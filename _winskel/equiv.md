---
layout: problem
title: Equivalence Relations and Equivalence Classes
chapter: 1
problem: 6
katex: true
---

Let us consider some equivalence relation $R$ on a set $X$. Then, we can define
equivalence classes on elements of $X$ as follows.

**Definition.** The $R$-*equivalence class* $\\{x\\}_R$ of some element $x \in X$
is given by

\\[\\{x\\}_R \triangleq \\{y\ \|\ y R x\\}.\\]

Note well that this implies that $y \in X$, since $R \subseteq X \times X$.

$\square$

Then, the following result holds:

**Theorem.** For all $x,y \in X$, if $\\{x\\}_R \cap \\{y\\}_R \neq \emptyset$,
then $\\{x\\}_R = \\{y\\}_R$.

*Proof.*

We assume that $\\{x\\}_R \cap \\{y\\}_R \neq \emptyset$. We can expand the intersection
using the definition of an equivalence class to see that 

\\[\\{x\\}_R \cap \\{y\\}_R = \\{z\ \|\ z R x \mathrm{\ and\ } z R y\\}.\\]

Now, since $\\{x\\}_R \cap \\{y\\}_R \neq \emptyset$, we know that there exists
at least one $z$ such that $z R x$ and $z R y$. Then, using symmetry, we can rewrite
the first result as $x R z$, and using transitivity on $x R z$ and $z R y$, we
can collapse this into the single result $x R y$. Then, we see that

\\[\\{x\\}_R = \\{t\ \|\ t R x\\} = \\{t\ \|\ t R y\\} \subseteq \\{y\\}_R\\]

and

\\[\\{y\\}_R = \\{t\ \|\ t R y\\} = \\{t\ \|\ t R x\\} \subseteq \\{x\\}_R,\\]

since $x R y$ and $y R x$ (i.e. $t R y$ and $t R x$ by transitivity). Combining
the subset relationships, we arrive at

\\[\\{x\\}_R = \\{y\\}_R.\\]

$\square$

**Note:** *In fact, the result is a little stronger. It is actually possible to*
*show that the converse is also true, namely that $\\{x\\}_R \neq \\{y\\}_R$ implies*
$\\{x\\}_R \cap \\{y\\}_R = \emptyset$. *This proof of the $(\Leftarrow)$ of the*
*implicit biconditional is left up to the reader.*