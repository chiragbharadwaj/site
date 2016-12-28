---
layout: default
title: CV
class: vitae
excerpt: |
  My most recent curriculum vitae, in HTML form. A PDF is also available!
---

{% assign cv = site.data.vitae %}

# Curriculum Vitae
#### rev. {{ cv.updated }}

----

Note: A [PDF][] version of my CV is also available, though it is not updated as
often.

## Citizenship

{{ cv.citizenship }}

## Education

{% for school in cv.education %}
  **{{ school.school }}**  
  {{ school.degree }}  
  *{{ school.when }}*
  {{ school.text | markdownify }}
{% endfor %}

## [Research][]

{% for position in cv.research %}
  **{{ position.title }}**  
  {{ position.where }}  
  *{{ position.when }}*  
  {{ position.text | markdownify }}  
{% endfor %}

## Papers and Projects

{% for paper in cv.papers %}
  + [*{{ paper.title }}*]({{ paper.link }}). {{ paper.authors }}. {{ paper.when }}.  
    {{ paper.text | markdownify }}  
{% endfor %}

## Teaching

Note: I also have some experience with teaching at the [high school-level][hs].

{% for position in cv.teaching %}
  **{{ position.title }}**  
  {{ position.where }}  
  *{{ position.when }}*  
  + Syllabus: *{{ position.topics }}*
  + Course:   [{{ position.course }}]({{ position.link }})  
  + Tasks:    {{ position.tasks }}  
{% endfor %}

## Industry Positions

{% for position in cv.jobs %}
  **{{ position.title }}**  
  {{ position.where }}  
  *{{ position.when }}*  
  + Division: {{ position.unit }}
  + Role:     {{ position.role }}  
  + Tasks:    {{ position.tasks }}  
{% endfor %}

## Honors

{% for honor in cv.honors %}
  + <div>{{ honor.title }}, {{ honor.when }}</div>
{% endfor %}

## Skills

{{ cv.skills | markdownify }}

----

## Selected Coursework

{% for school in cv.schools %}
<h4>{{ school.school }}</h4>
{% for field in school.fields %}
  **{{ field.name }}**:
  {% for course in field.courses %}
  + <div>{{ course.number }}: {{ course.title }}, {{ course.semester }}</div>
  {% endfor %}
{% endfor %}
{% endfor %}

[pdf]:      {{site.base}}/media/cv.pdf
[hs]:       {{site.base}}/cv/teaching-hs.html

[research]: {{site.base}}/research/