---
title: Website 6.0 FINALLY online!
date_created: 2024/01/01
date_modified: 2025/03/01
tags: ['update']
---

# Preface

Creating a personal website isn't a difficult task today. You can easily make a [carrd.co](https://carrd.co/) page, a [WordPress](https://wordpress.org/) blog, a basic [Wix](https://www.wix.com/) or [Squarespace](https://www.squarespace.com/) static site using a template or even use a no-code platform like [Webflow](https://webflow.com/). They're pretty easy to use, fairly customizable, and these let you get your brand sailing on the internet outside of social media platforms without having to worry about handling an entire technology stack from scratch quickly.

<br>

And here I am, doing it in the most unnecessarily complicated way possible.

<br>

This is the culmination of **two years** of work since the release of version 5, hopefully it will be the last version for my website I will have to write ever, it will also be the version where I will try to host as much of my content as I can gradually.

<br>

# What did I change on this version?

For one I aimed to arrive at a balance between showcasing my professional work but also showing some of my personal hobbies and passions, recent versions had too much of the former and older too much of the latter, which makes sense considering the amount of portfolio work to show I had at the time. Leaving all my personal stuff in the **Nook** section.

<br>

# Technical mumbo jumbo

As for the more technical details, I'd like to write them all out here, but figured that it'd be better to write a separate Svelte guide or article sharing my experience with the framework. In the meantime though, the broad strokes are:

I'm using [SvelteKit](https://kit.svelte.dev/) (a meta framework for [Svelte](https://svelte.dev/)) as the main dependency of my website. This is a web framework that lets you write reusable components in its own language which is compiled to vanilla JavaScript. Its syntax looks like this:

<br>

```svelte
<script>
	let count = $state(0);
	let doubled = $derived(count * 2);

	function increment() {
		count++;
	}
</script>

<p>Counter: {count}</p>
<p>This count doubled: {doubled}</p>
<button onclick={increment}>+</button>
```

<small>An example of a counter that increments every time the user clicks the + button.</small>

<br>
<br>

All of this is to say that it was a framework I could learn in a fairly quick manner and it didn't have too large of a boilerplate compared to all the copy-pasting I was doing in vanilla HTML/CSS/JS. In fact, I started using it since version 5 of this website.

<br>

Would I recommend it? If you're making a static blog with little interactivity, it's probably overkill to go with a meta-framework like SvelteKit. There are some useful static site generators (or SSG's) that will help you get to production in less time such as [11ty](https://www.11ty.dev/). Even if you had a more interactive website in mind, I would suggest learning the basics of HTML/CSS/JS before hopping on any of the JavaScript frameworks that exist out there.

<br>

# Definitive

Version 6 should be the last time I have to redesign and recode my website from scratch **ever**, so any following updates will be briefly reported on the nook's changelog instead of dedicated blog posts. Therefore, this _should_ be the last one of my 'update' posts for a very long time, unless I release a huge content update, albeit unlikely. I've been trying to lean more towards smaller chunks of content being released more frequently to avoid another two-year long period of radio silence.

<style>
    a {
        text-decoration: underline;
    }
    h1 > a {
        text-decoration: none;
    }
</style>
