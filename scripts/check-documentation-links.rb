require "commonmarker"
require "nokogiri"
require "uri"
require "set"

module DocumentationLinks
  class Checker
    attr_reader :documents, :local_links

    def initialize(root)
      @root = File.realpath(root)
      candidates = Dir.children(@root).map { |name| File.join(@root, name) }
      candidates.concat(Dir.glob(File.join(@root, "docs", "**", "*")))
      @documents = candidates.select { |path| File.file?(path) && markdown?(path) }.sort
    end

    def check
      @parsed = {}
      @errors = []
      @local_links = 0
      documents.each do |source|
        unless inside_repository?(File.realpath(source))
          report(source, 1, source, "document is outside repository")
          next
        end
        document(source).fetch(:links).each { |target, line| check_link(source, target, line) }
      end
      @errors
    end

    private

    def markdown?(path)
      File.extname(path).downcase == ".md"
    end

    def inside_repository?(path)
      path == @root || path.start_with?(@root + File::SEPARATOR)
    end

    def document(path)
      @parsed[path] ||= begin
        tree = CommonMarker.render_doc(File.read(path), :DEFAULT, [:table, :strikethrough, :autolink])
        links = []
        anchors = Set.new
        generated = Set.new
        counters = Hash.new(0)
        tree.walk do |node|
          line = node.sourcepos.fetch(:start_line, 1)
          case node.type
          when :header
            text = +""
            node.walk do |child|
              text << child.string_content if [:text, :code].include?(child.type)
              text << " " if [:softbreak, :linebreak].include?(child.type)
            end
            base = text.downcase.gsub(/[^\p{Word}\- ]/, "").tr(" ", "-")
            suffix = counters[base]
            id = suffix.zero? ? base : "#{base}-#{suffix}"
            while generated.include?(id)
              suffix += 1
              id = "#{base}-#{suffix}"
            end
            counters[base] = suffix + 1
            generated.add(id)
            anchors.add(id)
          when :link, :image
            # CommonMarker returns URL bytes as ASCII-8BIT, including UTF-8 links.
            links << [node.url.dup.force_encoding(Encoding::UTF_8), line]
          when :html, :inline_html
            # HTML is parsed inertly: comments/code text cannot create Markdown links.
            Nokogiri::HTML.fragment(node.string_content).css("[id], a[name], a[href]").each do |element|
              anchors.add(element["id"]) if element["id"]
              anchors.add(element["name"]) if element.name == "a" && element["name"]
              if element.name == "a" && element["href"]
                links << [element["href"], line + element.line - 1]
              end
            end
          end
        end
        { links: links, anchors: anchors }
      end
    end

    def check_link(source, target, line)
      # Never fetch URLs or interpret a protocol-relative URL as a repository path.
      return if target.match?(%r{\A(?:[a-z][a-z0-9+.-]*:|//)}i)

      @local_links += 1
      path, fragment = target.split("#", 2)
      path = URI::DEFAULT_PARSER.unescape(path.to_s.split("?", 2).first.to_s)
      destination = if path.empty?
                      source
                    elsif path.start_with?("/")
                      File.expand_path(path.delete_prefix("/"), @root)
                    else
                      File.expand_path(path, File.dirname(source))
                    end
      unless inside_repository?(destination)
        report(source, line, target, "outside repository")
        return
      end
      unless File.exist?(destination)
        report(source, line, target, "missing file or directory")
        return
      end
      unless inside_repository?(File.realpath(destination))
        report(source, line, target, "outside repository")
        return
      end
      # Non-Markdown targets are checked for existence only, not HTML/Jekyll routes.
      return if fragment.nil? || fragment.empty? || !markdown?(destination) || !File.file?(destination)

      anchor = URI::DEFAULT_PARSER.unescape(fragment)
      unless document(destination).fetch(:anchors).include?(anchor)
        report(source, line, target, "missing Markdown anchor")
      end
    rescue ArgumentError => error
      report(source, line, target, "invalid local target: #{error.message}")
    end

    def report(source, line, target, reason)
      relative = source.delete_prefix(@root + File::SEPARATOR)
      @errors << "#{relative}:#{line}: #{reason}: #{target}"
    end
  end
end

if $PROGRAM_NAME == __FILE__
  checker = DocumentationLinks::Checker.new(Dir.pwd)
  errors = checker.check
  if errors.empty?
    puts "PASS: documentation links (#{checker.documents.size} documents, #{checker.local_links} local targets)"
  else
    warn "FAIL: documentation links"
    errors.each { |error| warn error }
    exit 1
  end
end
