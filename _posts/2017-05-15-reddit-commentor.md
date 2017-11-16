---
title: "Generating Text through Natural Language Methods"
layout: post
excerpt: |
  Shantanu Gore and I wrote a paper on the design and implementation of a learning-based text generator for our final project in Prof. Haym Hirsh's undergraduate artificial intelligence class (CS 4701) at Cornell University. Our design aims to use methods from natural-language processing to generate realistic comments for the social media site Reddit.
---

### Motivation

To broaden our horizons, [Shantanu Gore][gore] and I decided to take a class on [artificial intelligence][ai] in Spring 2017, taught in this iteration by [Prof. Haym Hirsh][hirsh] at Cornell University. We discussed classic topics like intelligence agents, search methods, adversarial search, and logic systems, as well as newer ideas in the field, such as reasoning about uncertainty, separation techniques from machine learning, and reinforcement learning.

For our final project for this class, [Shantanu Gore][gore] and I created a learning-based text generator. Our device used a generative model together with methods from the theory of natural languages to generate text based on learned samples. To be specific, our framework, dubbed `redditcommentor`, services as a bot that reads samples from texts and attempts to construct novel sentences based on what it has read. This differs slightly from classical machine learning techniques in that there is a conditional relationship in the construction based on what has already been chosen/generated. Generative models comprise an interesting portion of natural-language techniques.

Our motivation for this project came from existing "bots" on the social media platform Reddit that not only generate realistic comments, but are able to actively maintain a conversation in Reddit forums as humans reply to their generated comments. This type of sample-based text generation can ultimately be quite helpful, as it could maintain order in forums (called _subreddits_ on Reddit). In turn, this could alleviate the duties of moderators and help discussion stay civil without much external (read: human) effort.

### [Paper][]

The details of this framework can be found in our [paper][] on text generation, which discusses a hypothetical version of this framework using N-grams and machine learning techniques as well as a general implementation of the hypothetical framework in Python.

We also discuss a plethora of future directions in our framework. Among these are support for an extended lexical vocabulary, predictive modelling (with Bayesian inference) for the framework, semantics-directed generation (as opposed to the current syntax-directed version), and approaches to handle contextual ambiguity when parsing. We hope that future projects expand upon our work and help explore these directions, especially for variations on context-based generation.

### [Implementation][redditcommentor]

We also have an implementation of the aforementioned framework, which again provides a generator for Reddit comments. However, we implemented the structure so that it would generate text in selected subreddits, a design decision based on the fact that the most popular subreddits were likely to be the ones with the most available data. Future work can examine the details of the code (which is adequately commented and structured) to implement a similar natural-language device on a larger scale, perhaps meta-logically by using datasets borrowed from Reddit's [datasets subreddit][datasets].

We recently open-sourced our implementation of the framework. It is available as `redditcommentor` [on Github][redditcommentor].

[hirsh]:           https://www.cs.cornell.edu/~hirsh/
[ai]:              https://www.cs.cornell.edu/courses/cs4700/2017sp
[gore]:            https://www.linkedin.com/in/goreshantanu/
[redditcommentor]: https://github.com/bluedot951/redditcommentor
[datasets]:        https://www.reddit.com/r/datasets
[paper]:           {{site.baseurl}}/media/reddit-commentor.pdf