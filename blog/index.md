---
layout: blog
title: Blog
---

{% for post in site.posts %}
<article class="preview">
  <div class="date">
  {{ post.date | date: '%-d %B %Y' }}
  </div>
  <h3>
    <a href="{{ site.base }}{{ post.url }}">{{ post.title }}</a>
  </h3>
  <div class="excerpt">
    {{ post.excerpt | replace: 'SITE_BASE', site.url | markdownify }}
  </div>
</article>
{% endfor %}