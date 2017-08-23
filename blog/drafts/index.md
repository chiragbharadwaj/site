---
layout: drafts
title: Blog Drafts
---

{% for post in site.drafts %}
<article class="preview">
  <h2>
    <a href="{{site.baseurl}}{{post.url}}">{{post.title}}</a>
  </h2>
  <h4 style="font-style: italic">
    {{post.subtitle}}
  </h4>
  <div class="excerpt">
    {{ post.excerpt | replace: 'SITE_BASE', site.url | markdownify }}
  </div>
</article>
{% endfor %}