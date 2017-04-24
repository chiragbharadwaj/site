---
layout: construction
excerpt: |
  My research lies at the intersection of computer architecture and programming languages. A lot of what I like learning about is about approximate computing, which is the notion that we can trade off correctness for efficiency in applications where exact answers are important, but not critical. I help design better abstractions for this new computing formalism.
---

# Research

----

### Current projects

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

Some of these projects involve building new tools, languages, compilers, and
hardware components, which is exciting.

One of my current research projects under Adrian is the development of a
[GPU-specific ISA][gpu-research]. The goal is to be able to write normal high-level
graphics code, as is done now, but have a nice [intermediate representation][llvm]
that could generate efficient GPU-specific code instead of the CPU-tangled mess
that plague systems down to the metal right now. This could potentially help
improve the performance of computationally-intensive graphics code. Of course,
this means venturing out into the [graphics literature][graphics]...

More updates to come.

[research]:      {{site.base}}/research
[pl-research]:   http://www.cs.cornell.edu/research/lang
[adrian]:        http://www.cs.cornell.edu/~asampson
[dissertation]:  http://www.cs.cornell.edu/~asampson/media/dissertation.pdf
[applications]:  http://adriansampson.net/doc/ppl.html
[statistics]:    http://www.cs.cornell.edu/~asampson/blog/statsmistakes.html
[pl]:            http://www.cs.cornell.edu/courses/cs6110/2016sp
[compilers]:     http://www.cs.cornell.edu/courses/cs4120/2016sp
[systems]:       http://www.cs.cornell.edu/courses/cs3410/2015sp
[gpu-research]: http://www.cs.cornell.edu/~asampson/blog/opengl.html
[llvm]:         http://www.cs.cornell.edu/~asampson/blog/llvm.html
[graphics]:     http://jcgt.org