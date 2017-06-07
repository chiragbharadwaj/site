---
layout: home
excerpt: |
  Hi, my name is Chirag Bharadwaj, and I am currently an incoming graduate student at Princeton University. I am a candidate for an MSc degree in computer science. I received my BSc in computer science from Cornell University in May 2017.
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
The [IPA][] for my name is `/tʃiraːg bʱaːrədʋaːd͡ʑ/`, in case you are a linguistics
enthusiast (I sure am). I am originally from Flushing, NY.

I am currently an incoming graduate student at [Princeton University][mse], where
I am a candidate for an M.Sc. in computer science. Previously, I graduated at the
age of 20 from [Cornell University][cornell-cs] with a B.Sc. in computer science
in May 2017. I am interested in areas like theory of computation, programming
languages, and computer architecture. I like talking about theoretical stuff.

Please feel free to [reach out][contact] if you'd like to know more about my
interests or research work!

### Research

My research work currently focuses on *approximate computing*, an emerging
discipline at the intersection of programming languages and computer architecture.
At Cornell, I worked with [Adrian Sampson][adrian], who is very cool. My senior
project was focused on a project called [LambdaLab][], which is an interactive
lambda-calculus interface for student learning in programming languages courses.

### Curriculum Vitae

Here's my [CV][] as of {{ updated.month }} {{ updated.year }}. A [PDF version][pdf]
is also available, though it is not updated as often.

[ipa]:           https://en.wikipedia.org/wiki/IPA

[cornell-cs]:    http://www.cs.cornell.edu
[mse]:           http://www.cs.princeton.edu/grad/degrees
[contact]:       {{site.base}}/contact

[adrian]:        http://www.cs.cornell.edu/~asampson
[lambdalab]:     https://github.com/sampsyo/lambdalab

[cv]:            {{site.base}}/cv
[pdf]:           {{site.base}}/media/cv.pdf