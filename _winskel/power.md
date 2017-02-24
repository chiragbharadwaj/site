---
layout: problem
title: Bijections on Power Sets
chapter: 1
problem: 4
katex: true
---

Note: We use the shorthand notation $2^X$ to mean the power set of $X$, which
Winskel denotes as $\mathcal{P}ow(X)$.

**Theorem.** The set of functions $(X \rightarrow 2^Y)$ and the set of relations
$2^{X \times Y}$ are in one-to-one correspondence.

*Proof.*

We can equivalently show that there is a bijection between the set of functions
$(X \rightarrow 2^Y)$ and the set of relations $2^{X \times Y}$.

To show that there is a bijection, we must find a total function
$f : (X \rightarrow 2^Y) \rightarrow 2^{X \times Y}$ such that there exists an
inverse function $g : 2^{X \times Y} \rightarrow (X \rightarrow 2^Y)$ with the
property that $g \circ f = f \circ g =\, \mathsf{id}$, albeit for different
identity functions.

Let us first show constructively that such a function $f$ exists.

We know that $f$ must be higher order, as it takes in as input a function of the
type $(X \rightarrow 2^Y)$ and returns a subset of $X \times Y$ (i.e. a binary
relation between $X$ and $Y$). Let us call the input function $r$. Then, we can
choose $f$ to be the following function (using the lambda notation):

\\[f = \lambda r.\, \\{(x,y)\ \|\ y \in r(x)\\}.\\]

It is clear that $f$ is total in that it is defined generally over all such input
functions. We now show that there exists an explicit inverse function $g$ that
satisfies the properties we described above.

We know that $g$ must take in as input a binary relation between $X$ and $Y$ and
return a function of the type $(X \rightarrow 2^Y)$. Let us call the input relation
$t$. Then, we can define $g$, the supposed inverse, to be

\\[g = \lambda t.\lambda x.\, \\{y\ \|\ (x,y) \in t\\}.\\]

We claim that these choices of $f$ and $g$ satisfy the properties that we desire.
To prove this, we show that these functions compose to form identities over the
respective domains.

 * **Lemma 1.** Let us first show that $g \circ f =\, \mathsf{id}$.

   Consider some element $r$ of the domain of $f$. Then, we know that $r : X \rightarrow 2^Y$. 
   It follows that

   \\[g(f(r)) = \lambda x.\, \\{y\ \|\ (x,y) \in f(r)\\},\\]

   where we use the definition of $f$ to rewrite $f(r)$ as

   \\[f(r) = \\{(x,y)\ \|\ y \in r(x)\\}.\\]

   This leads to

   \\[g(f(r)) = \lambda x.\, \\{y\ \|\ y \in r(x)\\} = r.\\]

 * **Lemma 2.** Now, we show that $f \circ g =\, \mathsf{id}$.

   Consider some element $s$ of the domain of $g$. Then, we know that $s \subseteq X \times Y$.
   It follows that

   \\[f(g(s)) = \\{(x,y)\ \|\ y \in g(s)(x)\\},\\]

   where we use the definition of $g$ to rewrite $g(s)(x)$ as

   \\[g(s)(x) = \\{y\ \|\ (x,y) \in s\\}.\\]

   This leads to

   \\[f(g(s)) = \\{(x,y)\ \|\ (x,y) \in s\\} = s.\\]

Thus, both $g \circ f$ and $f \circ g$ act as identity functions, so $f$ and $g$
are inverses, i.e. $(X \rightarrow 2^Y)$ and $2^{X \times Y}$ are in one-to-one
correspondence.

$\square$

**Note:** *The takeaway here is that even when the domain and codomain of the*
*function are more complicated (e.g. sets and/or functions themselves), we can*
*still perform the same analysis, albeit at a higher-order level.*