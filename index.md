---
layout: home
excerpt: |
  Hi, my name is Chirag Bharadwaj, and I am currently a senior at Cornell University. I am a candidate for a B.Sc. degree in computer science, and I will be graduating in May 2017—one year early. I will be attending Cornell's M.Sc. program in the fall. I am interested in the intersection of programming languages and computer architecture.
---

# Home

----

### Brief overview

Hello! I am currently a senior at [Cornell University][cornell-cs], where I am a
candidate for a B.Sc. degree in computer science. I'll be graduating one year
early in May 2017, and will be attending [graduate school][grad] in the fall for
Cornell's [M.Sc. program][ms]!
I'm interested in areas like theory of computation, programming languages, and
computer architecture. I like talking about theoretical things.

Here's my [CV][] as of February 2017.

I love talking about my interests and research work, so please feel free to reach
out if you'd like to know more!

### [Research][]

I participate in undergraduate computer science [research][pl-research] at school.
My research advisor is [Adrian Sampson][adrian], who is a recent graduate from the
University of Washington and a new assistant professor at Cornell. I find that
my interests in computer science are quite an unusual combination. Adrian's work
is at the intersection of programming languages and computer architecture, so
working with him was a pretty sweet deal for me.

A lot of the work has to do with developing hardware and software abstractions
for something known as *approximate computing*, which is the notion that we can
make certain systems faster by trading off correctness for efficiency and
performance. This could be useful for [applications][] where 100% correctness is
not necessary. This is an emergent field at the cornerstone of modern computing
formalisms, and it is one that I find quite fascinating precisely for its ability
to combine multiple disciplines. Indeed, prior knowledge of [statistics][],
[programming languages][pl], [compiler design][compilers], and
[computer systems][systems] only helped me dive so far into the vast potential
for this field.

Some of these [projects][research] involve building new tools, languages, compilers,
and hardware components for use in approximate computing.

### Personal projects

I also have a few projects on [Github][] that are worth checking out. Notably:

  * [Ro][], an imperative language for modern programming that I am writing with
    [Peter Li][peter]. Right now, we only have specs and markups done, but we
    really want to jump right in and get a working lexer and parser using
    `ocamllex`/`menhir`.

  * [PokéSnowdown][poke], a winter-themed spin-off of Pokémon Showdown that
    [Matthew Zang][zang] and I wrote with some other teammates over the course of
    six weeks for our final project in CS 3110. We won the award for the
    [best final project][hall-fame] of the semester. We have since open-sourced
    this project.

  * [Cryptography][crypto], which is an in-progress repository containing my
    solutions to the Cryptopals' [cryptography challenge][pals] (which in turn
    is based on the Matasano cryptography challenge) in [OCaml][].
    
  * This [website][site] itself—it is a work in progress, of course.

Feel free to ask to contribute to any of these projects by submitting a pull request!

[cornell-cs]:    http://www.cs.cornell.edu
[grad]:          http://matt.might.net/articles/phd-school-in-pictures
[ms]:            https://www.cs.cornell.edu/ms
[cv]:            {{site.base}}/cv

[research]:      {{site.base}}/research

[pl-research]:   http://www.cs.cornell.edu/research/lang
[adrian]:        http://www.cs.cornell.edu/~asampson
[dissertation]:  http://www.cs.cornell.edu/~asampson/media/dissertation.pdf
[applications]:  http://adriansampson.net/doc/ppl.html
[statistics]:    http://www.cs.cornell.edu/~asampson/blog/statsmistakes.html
[pl]:            http://www.cs.cornell.edu/courses/cs6110/2016sp
[compilers]:     http://www.cs.cornell.edu/courses/cs4120/2016sp
[systems]:       http://www.cs.cornell.edu/courses/cs3410/2015sp

[github]:    {{site.github}}
[ro]:        https://github.com/chiragbharadwaj/ro
[poke]:      https://github.com/maZang/PokeSnowdown
[hall-fame]: http://www.cs.cornell.edu/Courses/cs3110/archive/tournaments.html#fa2015
[crypto]:    https://github.com/chiragbharadwaj/Cryptography
[pals]:      http://cryptopals.com
[ocaml]:     http://www.ocaml.org
[peter]:     https://www.linkedin.com/in/peteli3
[zang]:      https://www.linkedin.com/in/msz45
[site]:      {{site.base}}/