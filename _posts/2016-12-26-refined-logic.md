---
title: Refined Logic
subtitle: Proof Assistants for the Masses
layout: post
excerpt: |
  Siva Somayyajula and I wrote a paper on the theoretical design of a refinement logics proof assistant for our final project in Prof. Bob Constable's undergraduate applied logic class (CS 4860) at Cornell University. We also implemented such an assistant by following our design. We hope that our assistant makes it easier for students and researchers alike to work with proof assistants based on custom proof calculi by generating executables.
---

## Motivation

As PL and logic enthusiasts, [Siva Somayyajula][siva] and I embarked on a journey
in Fall 2016 by taking [Prof. Bob Constable][constable]'s course in [applied logic][]
at Cornell University, which was a small class of about 20 students. We discussed
classic topics like logic systems, refinement rules, and formal methods, as well
as newer ideas in the field, such as automated reasoning, [proof assistants][nuprl],
and constructive type/logic systems.

For our final project for this class, [Siva Somayyajula][siva] and I created a
refinement logics framework. To be specific, our framework, known as `refined-logic`,
enables students and researchers to implement proof assistants for their specific
logics with relative ease.

Our goal is to provide a simple solution for these researchers that works at a
level more than just a toy script. In particular, for people with their own proof
calculi, `refined-logic` provides a simple way for them to input their calculus
and be given an executable that serves as the proof assistant for that logic system.
This circumvents the writing of unnecessary interpreters and proof assistants on
the part of the researcher, which is ordinarily a huge time sink. This meta approach
allows researchers to focus on their own important work rather than concerning
themselves with tricky boilerplate code.

This type of proof calculus-based assistant generation can ultimately be quite
helpful, even to students studying functional programming from an axiomatic
standpoint for the first time, such as in Cornell's very own [CS 3110][] course.

## [Paper][]

The details of this framework can be found in our [paper][] on the refinement
logics, which discusses a hypothetical implementation of this framework as well
as a general implementation of constructive logics in OCaml, a functional
programming language.

We discuss providing the rules for an example calculus in our framework. We elected
to discuss propositional calculus and how to use its rules in this implementation
to create a helpful proof assistant. We also provide instructions on how future
work can extend this to first-order logic, which has more complicated governing
axioms.

## [Implementation][refined-logic]

We also have an implementation of the aforementioned framework, which again
provides a generalized method of generating proof assistants for arbitrary proof
calculi. We implemented the hypothetical propositional refinement calculus as an
example, and left a similar implementation for first-order logic as an exercise
for the reader. Future work can examine the set-up and structure of the code
(which is adequately commented using interface files) to implement the proof
calculi for custom logic systems.

We recently open-sourced our implementation of the framework. It is available as
`refined-logic` [on Github][refined-logic].

[constable]:     http://www.cs.cornell.edu/home/rc
[applied logic]: http://www.cs.cornell.edu/courses/cs4860/2016fa
[nuprl]:         http://www.nuprl.org
[siva]:          http://ssomayyajula.github.io
[refined-logic]: https://github.com/ssomayyajula/refined-logic
[cs 3110]:       http://www.cs.cornell.edu/courses/cs3110/2016sp
[paper]:         {{site.base}}/media/refined-logic.pdf