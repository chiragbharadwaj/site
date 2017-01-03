---
layout: blog
title: Blog
---

{% for post in site.posts %}
<article class="preview">
  <h2>
    <a href="{{ site.base }}{{ post.url }}">{{ post.title }}</a>
  </h2>
  <h4 style="font-style: italic">
    {{ post.subtitle }}
  </h4>
  <h5 class="tagline">
    {{ post.date | date: 'posted on %-d %B %Y' }}
  </h5>
  <div class="excerpt">
    {{ post.excerpt | replace: 'SITE_BASE', site.url | markdownify }}
    <h4>
      <a href="{{ site.base }}{{ post.url }}">
        KEEP READING...
      </a>
    </h4>
  </div>
</article>
{% endfor %}