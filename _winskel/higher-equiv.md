---
layout: problem
title: Higher-order Equivalence Relations
chapter: 1
problem: 7
katex: true
---

Let us consider a set of sets $X$. We define the relation $R$ over $X$ as follows:

\\[R \triangleq \\{(x,y)\ \|\ x \mathrm{\ and\ } y \mathrm{\ are\ in\ correspondence}\\} \subseteq X \times X.\\]

**Theorem.** $R$ is an equivalence relation.

*Proof.*

As always, to prove that a relation is an equivalence relation, we simply show
that it is reflexive, symmetric, and transitive. We proceed:

 * **Reflexivity.** $\forall x \in X, x R x$.

   This holds trivially, as for all $x \in X$, we know that $x$ is in one-to-one
   correspondence with itself via the function $\mathsf{id}\, = \lambda x.\, x$
   (which is its own inverse).

 * **Symmetry.** $\forall x,y \in X, x R y \Rightarrow y R x$.

   Let us assume that $x R y$. This implies that $x$ and $y$, which are sets in
   $X$, are in one-to-one correspondence with each other. In other words, there
   is a function $f : x \rightarrow y$ with inverse mapping $g : y \rightarrow x$
   between the sets. Then, it is evident that $y$ and $x$ are also in one-to-one
   correspondence with each other via the function $g$ with corresponding inverse
   $f$. As a result, $y R x$ as well.

 * **Transitivity.** $\forall x,y,z \in X, (x R y \mathrm{\ and\ } y R z) \Rightarrow x R z$.

   Let us assume that $x R y$ and $y R z$. Then, for $x$, $y$, and $z$, which are
   sets in $X$, we know that there exist total, invertible functions $f : x \rightarrow y$
   and $g : y \rightarrow z$ between the sets (with corresponding inverses, say,
   $f^{-1} : y \rightarrow x$ and $g^{-1} : z \rightarrow y$). We can then define

   \\[h = g \circ f\\]

   as a function between $x$ and $z$ to show that they are in one-to-one correspondence.
   This implies that $x R z$, as well.

   Note: A similar construction, namely $h^{-1} = f^{-1} \circ g^{-1}$, works for
   the inverse mapping.