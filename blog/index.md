---
layout: blog
title: Blog
---

{% for post in site.posts %}
<article>
  <div class="row vertical-align">
    <div class="col-sm-2" style="text-align: center; margin-top: -20px">
      <div class="date">
        {{ post.date | date: '%-d' }}
        <br>
        {{ post.date | date: '%B' }}
        <br>
        {{ post.date | date: '%Y' }}
      </div>
    </div>
    <div class="col-sm-10">
      <h4>
        <a href="{{site.baseurl}}{{post.url}}">{{post.title}}</a>
      </h4>
      {{ post.excerpt | replace: 'SITE_BASE', site.url | markdownify }}
    </div>
  </div>
</article>
{% endfor %}