---
layout: home
excerpt: |
  Hi, my name is Chirag Bharadwaj, and I am currently a senior at Cornell University. I am a candidate for a B.Sc. degree in computer science, and I will be graduating in May 2017—one year early. With luck, I will be attending a graduate program in the fall. I am interested in the intersection of programming languages and computer architecture.
---

<div id="text" class="well well-md" markdown="1" style="margin-bottom: 40px">

### Brief overview

Hello! My name is Chirag Bharadwaj. I am currently a senior at [Cornell
University][cornell-cs], where I am a candidate for a B.Sc. degree in computer
science. I'll be graduating in May 2017, one year early, and will hopefully attend
[graduate school][grad] in the fall! I'm interested in areas like theory of
computation, programming languages, and computer architecture. Outside of CS, I
also hop around some other departments, such as physics, electrical engineering,
economics, and even [nuclear science][nuclear].

On my own time, I enjoy running, watching basketball, playing classical piano,
and listening to alternative- and progressive-rock. I also actively follow the
political discussions within the Asian-American diaspora.

Here's my [CV][]. If you would like to get in contact, feel free to reach out via
[email][contact].

</div>

### Research

I participate in undergraduate computer science [research][] at school. My
research advisor is [Adrian Sampson][adrian], who is a recent graduate from the
University of Washington and a new assistant professor at Cornell. I find that
my interests in computer science are quite an unusual combination. Adrian's work
is at the intersection of programming languages and computer architecture, so
working with him was a pretty sweet deal for me.

A lot of the work has to do with developing hardware and software abstractions
for something known as *[approximate computing][dissertation]*, which is the
notion that we can make certain systems faster by trading off correctness for
efficiency/performance. This could be useful for [applications][] where 100%
correctness is not necessary. This is an emergent field at the cornerstone of
modern computing formalisms, and it is one that I find quite fascinating precisely
for its ability to combine multiple disciplines. Indeed, prior knowledge of
[statistics][], [programming languages][pl], [compiler design][compilers], and
[computer systems][systems] only helped me dive so far into the vast potential
for this field.

One of my current research projects under Adrian is the development of a
[GPU-specific ISA][gpu-research]. The goal is to be able to write normal high-level
graphics code, as is done now, but have a nice [intermediate representation][llvm]
that could generate efficient GPU-specific code instead of the CPU-tangled mess
that plague systems down to the metal right now. This could potentially help
improve the performance of computationally-intensive graphics code. Of course,
this means venturing out into the [graphics literature][graphics]...

[cornell-cs]:   http://www.cs.cornell.edu
[grad]:         http://matt.might.net/articles/phd-school-in-pictures
[nuclear]:      {{site.base}}/media/nuclear.pdf
[cv]:           {{site.base}}/media/cv.pdf
[contact]:      {{site.base}}/contact.html

[research]:     http://www.cs.cornell.edu/research/lang
[adrian]:       http://www.cs.cornell.edu/~asampson
[dissertation]: http://www.cs.cornell.edu/~asampson/media/dissertation.pdf
[applications]: http://adriansampson.net/doc/ppl.html
[statistics]:   http://www.cs.cornell.edu/~asampson/blog/statsmistakes.html
[pl]:           http://www.cs.cornell.edu/courses/cs6110/2016sp
[compilers]:    http://www.cs.cornell.edu/courses/cs4120/2016sp
[systems]:      http://www.cs.cornell.edu/courses/cs3410/2015sp
[gpu-research]: http://www.cs.cornell.edu/~asampson/blog/opengl.html
[llvm]:         http://www.cs.cornell.edu/~asampson/blog/llvm.html
[graphics]:     http://jcgt.org