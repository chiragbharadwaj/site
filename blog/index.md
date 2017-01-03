---
layout: default
title: Blog
---

# Bloggings

#### AN ACADEMIC BLOG

----

<div class="row">
<div class="col-sm-3">
  <h3>Archive</h3>
  {% for post in site.posts %}
    {% assign curr_mo = post.date | date: "%B %Y" %}
    {% assign prev_mo = post.previous.date | date: "%B %Y" %}
    {% if curr_mo != prev_mo %}
      <a href="/blog/{{ post.date | date: "%Y" }}/{{ post.date | date: "%m" }}/">
        {{ curr_mo }}
      </a>
      <br/>
    {% endif %}
  {% endfor %}
</div>

<div class="col-sm-9">
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
</div>
</div>