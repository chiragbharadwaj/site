---
layout: default
excerpt: |
  My research lies at the intersection of computer architecture and programming languages. A lot of what I like learning about is about approximate computing, which is the notion that we can trade off correctness for efficiency in applications where exact answers are important, but not critical. I help design better abstractions for this new computing formalism.
---

# Research

----

### Current projects

One of my current research projects under Adrian is the development of a
[GPU-specific ISA][gpu-research]. The goal is to be able to write normal high-level
graphics code, as is done now, but have a nice [intermediate representation][llvm]
that could generate efficient GPU-specific code instead of the CPU-tangled mess
that plague systems down to the metal right now. This could potentially help
improve the performance of computationally-intensive graphics code. Of course,
this means venturing out into the [graphics literature][graphics]...

More updates to come.

[gpu-research]: http://www.cs.cornell.edu/~asampson/blog/opengl.html
[llvm]:         http://www.cs.cornell.edu/~asampson/blog/llvm.html
[graphics]:     http://jcgt.org