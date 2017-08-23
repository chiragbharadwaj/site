---
layout: blog
title: Blog
---

{% for post in site.posts %}
<article>
  <div class="row vertical-align">
    <div class="col-sm-2" style="text-align: center">
      <div class="date">
        {{ post.date | date: '%-d' }}
        <br>
        {{ post.date | date: '%B' | upcase }}
        <br>
        {{ post.date | date: '%Y' }}
      </div>
    </div>
    <div class="col-sm-10">
      <h3>
        <a href="{{site.baseurl}}{{post.url}}">{{post.title}}</a>
      </h3>
      {{ post.excerpt | replace: 'SITE_BASE', site.url | markdownify }}
    </div>
  </div>
</article>
{% endfor %}