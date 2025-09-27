---
layout: default
title: "Home"
---

# Welcome to My Personal Blog

Hello! Welcome to my personal blog where I share my thoughts, experiences, and insights on various topics.

## Recent Posts

{% for post in site.posts limit:5 %}
  <div class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    <a href="{{ post.url | relative_url }}">Read more →</a>
  </div>
  <hr>
{% endfor %}

{% if site.posts.size == 0 %}
<p>No posts yet! Check back soon for new content.</p>
{% endif %}

## About Me

I'm passionate about sharing knowledge and experiences. Feel free to explore my blog posts and [learn more about me](/about/).

---

*Want to get in touch? You can find me on [GitHub](https://github.com/{{ site.github_username }}).*