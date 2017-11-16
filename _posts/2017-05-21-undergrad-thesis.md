---
title: "LambdaLab: Interactive &lambda;-calculus for Learning"
kind: article
layout: post
excerpt: |
  For my undergraduate thesis at Cornell, I laid out a theoretical foundation for an interactive visual tool that students could utilize to aid in learning the lambda calculus. Lambda calculus underscores some of the fundamental core of functional programming languages. Its simplicity and power often work as a useful model for semantic analysis. However, some of its abstractions often pose pedagogical challenges. Arguably some of the methods by which lambda calculus is instructed to newly-minted FPL students is wanting. This is where LambdaLab comes into play.
---

### Motivation

I did research with [Adrian Sampson][adrian] during my final year at Cornell, and among other things, he helped advise my undergraduate thesis. Adrian teaches classes in programming languages at the [undergraduate][ugrad-pl] and [graduate][grad-pl] level at Cornell, so naturally he had noticed some common weaknesses among students. Among those, one of the most prevalent that plagued students was not possessing a deep understanding of how the lambda calculus works.

My thesis, called LambdaLab, focused on finding a way to help students better learn the lambda calculus in the classroom by accommodating different [types of learners][learners]. LambdaLab's goal was to fix issues that students commonly struggled with by providing a step-by-step visualization that they could play with to manipulate the information.

### [Paper][thesis]

The details of LambdaLab can be found in my [undergraduate thesis][thesis], which discusses a hypothetical implementation of this framework as well as a general survey of additional features that could help maximize the pedagogical value of this program.

I discuss various visualization techniques, reduction strategies, and physical cues (including color, shapes, placement, etc.) that could aid students in having a hands-on visuospatial approach to learning the lambda calculus. I proposed a light, feature-minimal product as the base framework, with additional features suggested for further development. Indeed, the penultimate section details **8** useful additions that could significantly engender a deeper understanding of the intricate aspects of the calculus. Most of these features require more than a cursory knowledge of the material, hence the suggestion to make them extensions to the original framework (a choice on the part of the developer).

### [Implementation][lambdalab]

A significant implementation of this framework in [TypeScript][] is still forthcoming. An open-source version in its initial stages can be found [on GitHub][lambdalab].

[adrian]:     www.cs.cornell.edu/~asampson
[ugrad-pl]:   https://www.cs.cornell.edu/courses/cs4110/2016fa
[grad-pl]:    https://www.cs.cornell.edu/courses/cs6110/2017sp
[learners]:   http://www.tecweb.org/styles/gardner.html

[thesis]:     {{site.baseurl}}/media/ugrad-thesis.pdf

[typescript]: https://www.typescriptlang.org/
[lambdalab]:  https://github.com/sampsyo/lambdalab