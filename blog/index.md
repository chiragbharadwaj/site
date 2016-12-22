---
layout: default
title: Blog
---

## Thoughts from a Rogue Mathematician
#### AN ACADEMIC BLOG

{% for post in site.posts %}
<div id="text" class="well well-md" markdown="1">
  <article class="preview">
    <h2>
      <a href="{{ site.base }}{{ post.url }}">{{ post.title }}</a>
    </h2>
    <h5 class="tagline">
      {{ post.date | date: '%-d %B %Y' }}
    </h5>
    <div class="excerpt">
      {{ post.excerpt | replace: 'SITE_BASE', site.url | markdownify }}
    </div>
  </article>
</div>
{% endfor %}