---
layout: problem
title: Reflexive-Transitive Closures
chapter: 1
problem: 8
katex: true
---

We recall the definition of the reflexive-transitive closure of a relation $R$.

**Definition.** Given a relation $R$ on a set $X$, the smallest reflexive and
transitive relation that contains $R$ as a subset is given by

\\[R^* = \bigcup\limits_{n \in \omega} R^n,\\]

where $R^n$ is defined inductively as:
   * $R^0 =\, \mathsf{id}_X$,
   * $R^{n+1} = R \circ R^n$.

$\square$

Let us consider a relation $R$ on a set $X$. We denote by $R^{op}$ the so-called
*converse relation*, defined as

\\[R^{op} \triangleq \\{(y,x)\ \|\ (x,y) \in R\\}.\\]

We can then show the following results.

**Theorem.** $(R \cup R^{op})^*$ is an equivalence relation.

*Proof.*

Let us put $S = (R \cup R^{op})^*$.

As always, to prove that a relation is an equivalence relation, we simply show
that it is reflexive, symmetric, and transitive. We proceed:

 * **Reflexivity.** $\forall x \in X, x S x$.

   TBD

 * **Symmetry.** $\forall x,y \in X, x S y \Rightarrow y S x$.

   TBD

 * **Transitivity.** $\forall x,y,z \in X, (x S y \mathrm{\ and\ } y S z) \Rightarrow x S z$.

   TBD

$\square$

**Theorem.** $R^* \cup (R^{op})^*$ need not necessarily be an equivalence relation.

*Proof.*

Forthcoming.

$\square$