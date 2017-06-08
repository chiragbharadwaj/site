---
layout: default
title: Contact
excerpt: |
  If you'd like to get in touch, please shoot me an email. Alternatively, if you're around the greater Princeton area, feel free to ask me to meet up somewhere! I'd love to chat over some Hoagie Haven.
---

# Contact

----

### General information

If you're around the greater New York City area, feel free to ask me to meet up
somewhere! I'd love to chat over some Fruity Yogurt or [Hoagie Haven][hoagie].

### Detailed information

<div class="contact">
  <table>
    <tbody>
      <tr>
        <td align="right">
          Email:
        </td>
        <td>
          <a href="mailto:{{site.email1}}">{{ site.email1 }}</a>,
          <a href="mailto:{{site.email2}}">{{ site.email2 }}</a>
        </td>
      </tr>
      <tr>
        <td align="right">
          Research lab:
        </td>
        <td>
          Department of Computer Science<br>
          35 Olden Street<br>
          Princeton University<br>
          Princeton, NJ 08544-5233
        </td>
      </tr>
      <tr>
        <td align="right">
          Skype ID:</td>
        <td>
          <a href="skype:{{site.skype}}?userinfo">{{ site.skype }}</a>
        </td>
      </tr>
      <tr>
        <td align="right">
          Phone:
        </td>
        <td>
          <a href="tel:{{site.phone}}">{{ site.phone }}</a>
        </td>
      </tr>
      <tr>
        <td align="right">
          Postal address:
        </td>
        <td>
          {% for part in site.address %}
            {{ part }}<br>
          {% endfor %}
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Professional connections

You can also connect with me on [LinkedIn][] if you know me personally or
academically. I keep my profile updated through the end of a semester, so any
changes that occur during a semester won't likely be reflected for a few months,
as my time is quite limited while in school.

[hoagie]:    {{site.base}}/media/hoagie-haven.jpg
[linkedin]:  {{site.linkedin}}
[blog]:      {{site.base}}/blog/