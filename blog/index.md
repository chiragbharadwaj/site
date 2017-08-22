---
layout: blog
title: Blog
---

{% for post in site.posts %}
<article class="preview">
  <h3>
    <a href="{{ site.base }}{{ post.url }}">{{ post.title }}</a>
  </h3>
  {{ post.date | date: 'posted on %-d %B %Y' }}
  <div class="excerpt">
    {{ post.excerpt | replace: 'SITE_BASE', site.url | markdownify }}
  </div>
</article>
{% endfor %}