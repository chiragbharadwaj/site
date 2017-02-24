---
layout: problem
title: Ordered Pairs
chapter: 1
problem: 1
katex: true
---

We recall that regardless of underlying representation, equality over ordered
pairs is defined as follows.

**Definition.** Consider two ordered pairs $(a,b)$ and $(a^\prime,b^\prime)$. Then,
we have that

\\[(a,b) = (a^\prime,b^\prime) \Leftrightarrow a = a^\prime \mathrm{\ and\ } b = b^\prime,\\]

i.e. the pairs are component-wise equal.

$\square$

Let us now consider the following set representation of ordered pairs:

\\[(a,b) \triangleq \\{\\{a\\},\\{a,b\\}\\}.\\]

We must argue that this satisfies the aforementioned property of pair equality.

**Theorem.** The construction $(a,b) = \\{\\{a\\},\\{a,b\\}\\}$ satisfies the
ordered pair property.

*Proof.* We consider each direction separately.

$(\Leftarrow)$: This direction is trivial.

We know that $a = a^\prime$ and $b = b^\prime$. Then, it trivially follows that

\\[(a,b) = (a^\prime,b^\prime)\\]

by substituting the known equalities.

$(\Rightarrow)$: This direction requires more thought.

We know that $(a,b) = (a^\prime,b^\prime)$. Appealing to our constructive set
definition of ordered pairs, this reduces to

\\[\\{\\{a\\},\\{a,b\\}\\} = \\{\\{a^\prime\\},\\{a^\prime,b^\prime\\}\\}.\\]

We recall that two sets are equal if and only if they contain the same elements.
Then, we end up with two possible cases:

 * **Case 1**: $\\{a\\} = \\{a^\prime\\}$ and $\\{a,b\\} = \\{a^\prime,b^\prime\\}$.

   It is immediately clear that $a = a^\prime$, since both sets only contain 1
   element. Then, combining the first result with the second equality, we see that
   $\\{a,b\\} = \\{a^\prime,b\\} = \\{a^\prime,b^\prime\\}$. This implies that
   $b = b^\prime$ based on distinctness of elements.

 * **Case 2**: $\\{a\\} = \\{a^\prime,b^\prime\\}$ and $\\{a,b\\} = \\{a^\prime\\}$.

   This case cannot occur, as a finite set of size 1 cannot be equal to another
   finite set of size 2. So we ignore this.

Thus, using the result from Case 1 directly, we see that $a = a^\prime$ and
$b = b^\prime$.

$\square$