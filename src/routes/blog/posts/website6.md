---
title: Website 6.0 FINALLY online!
date_created: 2024/01/01
date_modified: 2024/10/27
tags: ['update', 'development', 'unfinished']
---

# Preface

Creating a personal website isn't a difficult task today. You can easily make a [carrd.co](https://carrd.co/) page, a [WordPress](https://wordpress.org/) blog, a basic [Wix](https://www.wix.com/) or [Squarespace](https://www.squarespace.com/) static site using a template or even use a no-code platform like [Webflow](https://webflow.com/), they're pretty easy to use, fairly customizable, and these let you get your brand sailing on the internet outside of social media platforms without having to worry about handling an entire technology stack from scratch quickly.

<br>

And here I am, doing it in the most unnecessarily complicated way possible.

<br>

This is the culmination of **two years** of work since the release of version 5, hopefully it will be the last version for my website I will have to write ever, it will also be the version where I will try to host as much of my content as I can gradually.

<br>

# What did I change on this version?

For one I aimed to arrive at a balance between showcasing my professional work but also showing some of my personal hobbies and passions, recent versions had too much of the former and older too much of the latter, which makes sense considering the amount of portfolio work to show I had at the time. Leaving all my personal stuff in the **Nook** section.

<br>

## Technical mumbo jumbo

I'm using [SvelteKit](https://kit.svelte.dev/) (which uses [Svelte](https://svelte.dev/)) as the main dependency of my website. This is a web framework that lets you write reusable components in its own language which is compiled to vanilla JavaScript. Its syntax looks like this:

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

All of this is to say that it was a framework I could learn in a fairly quick manner and it didn't have too large of a boilerplate compared to all the copy-pasting I was doing in vanilla HTML/CSS/JS. In fact, I started using it since version 5 of this website.

<br>

<style>
    a {
        text-decoration: underline;
    }
    h1 > a {
        text-decoration: none;
    }
    small {
        opacity: 0.6;
    }
</style>
