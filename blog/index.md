---
layout: default
title: Blog
---

# Bloggings

#### AN ACADEMIC BLOG

----

{% for post in site.posts %}
<article class="preview">
  <h2>
    <a href="{{ site.base }}{{ post.url }}">{{ post.title }}</a>
  </h2>
  <h5 class="tagline">
    {{ post.date | date: 'posted on %-d %B %Y' }}
  </h5>
  <div class="excerpt">
    {{ post.excerpt | replace: 'SITE_BASE', site.url | markdownify }}
  </div>
</article>
{% endfor %}