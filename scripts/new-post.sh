#!/bin/bash

# Create new blog post with proper template
# Usage: ./scripts/new-post.sh "Post Title" "category1,category2" "tag1,tag2,tag3"

if [ $# -lt 1 ]; then
    echo "Usage: $0 \"Post Title\" [\"category1,category2\"] [\"tag1,tag2,tag3\"]"
    exit 1
fi

TITLE="$1"
CATEGORIES="${2:-personal-growth,technical}"
TAGS="${3:-blog,update,tips}"

# Generate filename from title
FILENAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g')
DATE=$(date +%Y-%m-%d)
DATETIME=$(date +"%Y-%m-%d %H:%M:%S +0800")
FULLFILENAME="_posts/${DATE}-${FILENAME}.md"

# Convert comma-separated to YAML arrays
CATEGORIES_YAML=$(echo "$CATEGORIES" | sed 's/,/, /g')
TAGS_YAML=$(echo "$TAGS" | sed 's/,/, /g')

cat > "$FULLFILENAME" << EOF
---
title: "$TITLE"
date: $DATETIME
categories: [$CATEGORIES_YAML]
tags: [$TAGS_YAML]
header:
  overlay_color: "#2c3e50"
  overlay_filter: "0.5"
  # overlay_image: /assets/images/your-header-image.jpg
  # teaser: /assets/images/your-teaser-image.jpg
excerpt: "Add a compelling excerpt here that summarizes the main points of your post."
toc: true
toc_sticky: true
---

Write your engaging introduction here. This should hook the reader and clearly explain what they'll learn.

<!--more-->

## Main Section 1

Add your main content here with clear headings, useful information, and actionable insights.

### Subsection Example

- Use bullet points for easy scanning
- Include practical tips and examples
- Make content actionable and valuable

## Code Examples (if applicable)

\`\`\`python
# Include relevant code examples
def example_function():
    return "Hello, world!"
\`\`\`

## Key Takeaways

Summarize the main points:

1. **Key Point 1**: Brief explanation
2. **Key Point 2**: Brief explanation  
3. **Key Point 3**: Brief explanation

## Next Steps

Guide readers on what to do next:
- Action item 1
- Action item 2
- Links to related resources

---

*What are your thoughts on this topic? Share your experiences in the comments below!*
EOF

echo "Created new post: $FULLFILENAME"
echo "Don't forget to add header and teaser images!"