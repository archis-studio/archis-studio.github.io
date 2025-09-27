---
layout: default
title: "Blog"
permalink: /blog/
---

# All Blog Posts

{% if site.posts.size > 0 %}
  {% for post in site.posts %}
    <div class="post-preview">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-meta">
        {{ post.date | date: "%B %d, %Y" }}
        {% if post.categories.size > 0 %}
          • Categories: 
          {% for category in post.categories %}
            <span class="category">{{ category }}</span>{% unless forloop.last %}, {% endunless %}
          {% endfor %}
        {% endif %}
      </p>
      <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
      <a href="{{ post.url | relative_url }}">Read full post →</a>
    </div>
    <hr>
  {% endfor %}
{% else %}
  <p>No posts published yet. Check back soon for new content!</p>
{% endif %}