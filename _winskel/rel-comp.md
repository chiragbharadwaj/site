---
layout: problem
title: Properties of Relational Composition
chapter: 1
problem: 3
katex: true
---

**Theorem.** Relational composition is associative.

*Proof.*

Let us consider three relations $R \subseteq X \times Y$, $S \subseteq Y \times Z$,
and $T \subseteq Z \times W$. We then know that

\\[S \circ R = \\{(x,z)\ \|\ \exists y \in Y.\, (x,y) \in R \mathrm{\ and\ } (y,z) \in S\\}.\\]

Then, $T \circ (S \circ R)$ is given as

\\[T \circ (S \circ R) = \\{(x,w)\ \|\ \exists z \in Z.\, (x,z) \in (S \circ R) \mathrm{\ and\ } (z,w) \in T\\},\\]

which we can expand as

\\[\\{(x,w)\ \|\ \exists z \in Z.\, \exists y \in Y.\, (x,y) \in R \mathrm{\ and\ } (y,z) \in S \mathrm{\ and\ } (z,w) \in T\\}.\\]

A simple rearrangement leads to

\\[T \circ (S \circ R) = \\{(x,w)\ \|\ \exists y \in Y.\, (x,y) \in R \mathrm{\ and\ } (y,w) \in (T \circ S)\\} = (T \circ S) \circ R.\\]

$\square$

For every set $X$, there exists an identity relation $\mathsf{id}_X$ that can be
built out of $X$, defined as follows.

**Definition.** Given a set $X$, the *identity relation* corresponding to it is
given by

\\[\mathsf{id}_X\ \triangleq \\{(x,x)\ \|\ x \in X\\}.\\]

**Theorem.** $\mathsf{id}$ acts as an identity with respect to $\circ$.

*Proof.*

Consider some arbitrary relation $R \subseteq X \times Y$. Then, we can show that
$\mathsf{id}\, \subseteq X \times X$ acts as an identity on $R$ with respect to
$\circ$ as follows:

\\[R \circ\ \mathsf{id}_X\, = \\{(x,y)\ \|\ \exists x^\prime \in X.\, (x,x^\prime) \in\, \mathsf{id}_X \mathrm{\ and\ } (x^\prime,y) \in R\\}.\\]

However, since $(x,x^\prime) \in\, \mathsf{id}_X$, we see by definition that $x = x^\prime$.
This leads to

\\[R \circ\, \mathsf{id}_X\, = \\{(x,y)\ \|\ (x,y) \in R\\} = R.\\]

Similarly, we see that

\\[\mathsf{id}_Y\, \circ R = \\{(x,y)\ \|\ \exists x^\prime \in X.\, (x,x^\prime) \in R \mathrm{\ and\ } (x^\prime,y) \in\, \mathsf{id}_Y\\}.\\]

The fact that $(x^\prime,y) \in\, \mathsf{id}_Y$ implies that $x^\prime = y$, by
definition. This leads to 

\\[\mathsf{id}_Y\, \circ R = \\{(x,y)\ \|\ (x,y) \in R \\} = R,\\]

as well. Thus, $R \circ\, \mathsf{id}_X\, =\, \mathsf{id}_Y\, \circ R = R$.

$\square$