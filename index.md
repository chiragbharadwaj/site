---
layout: home
excerpt: |
  Hi, my name is Chirag Bharadwaj, and I am currently a senior at Cornell University. I am a candidate for a BSc degree in computer science, and I will be graduating in May 2017—one year early. I will be attending Princeton's MSE program in the fall.
---

{% assign updated = site.data.vitae.updated %}

# Home

----

### Overview

<audio id="name" src="{{ site.base }}/media/name.mp3"></audio>

Hello! My name is
    <a onclick="document.getElementById('name').play()">
    <i class="fa fa-volume-up"></i>
    Chirag Bharadwaj</a>.
I am from Flushing, NY. I've also lived in Princeton, NJ.

I am currently a senior at [Cornell University][cornell-cs], where I am a
candidate for a B.Sc. degree in computer science. I'll be graduating one year
early in May 2017. In Fall 2017, I will begin an MSE in computer science at
[Princeton][mse]. I am interested in areas like theory of computation, programming
languages, and computer architecture.

Please feel free to [reach out][contact] if you'd like to know more about my
interests or research work!

### [Research][]

I participate in undergraduate computer science [research][pl-research] at school.
My research advisor is [Adrian Sampson][adrian].

A lot of our work has to do with developing hardware and software abstractions
for something known as *approximate computing*, which is the notion that we can
make certain systems faster by [trading off][applications] correctness for
efficiency and performance. This is an emergent field at the cornerstone of modern
computing formalisms, and it is one that I find quite fascinating precisely for
its ability to combine multiple disciplines. Indeed, prior knowledge of [statistics][],
[programming languages][pl], [compiler design][compilers], and
[computer systems][systems] have only helped me dive so far into the vast potential
for this field.

Some of these [projects][research] involve building new tools, languages, compilers,
and hardware components, which is exciting.

### Curriculum Vitae

Here's my [CV][] as of {{ updated.month }} {{ updated.year }}. A [PDF version][pdf]
is also available, though it is not updated as often.

[cornell-cs]:    http://www.cs.cornell.edu
[mse]:           http://www.cs.princeton.edu/grad/degrees
[contact]:       {{site.base}}/contact

[research]:      {{site.base}}/research
[pl-research]:   http://www.cs.cornell.edu/research/lang
[adrian]:        http://www.cs.cornell.edu/~asampson
[dissertation]:  http://www.cs.cornell.edu/~asampson/media/dissertation.pdf
[applications]:  http://adriansampson.net/doc/ppl.html
[statistics]:    http://www.cs.cornell.edu/~asampson/blog/statsmistakes.html
[pl]:            http://www.cs.cornell.edu/courses/cs6110/2016sp
[compilers]:     http://www.cs.cornell.edu/courses/cs4120/2016sp
[systems]:       http://www.cs.cornell.edu/courses/cs3410/2015sp

[cv]:            {{site.base}}/cv
[pdf]:           {{site.base}}/media/cv.pdf