<script lang="ts">
	import Articles from '$components/features/articles.svelte';
	import Projects from '$components/features/projects.svelte';
	import Snippets from '$components/features/snippets.svelte';
	import Cats from '$components/cats.svelte';
	import { getArticles } from '$contents/articles/utils';
	import { getProjects } from '$contents/projects';
	import { getSnippets } from '$contents/snippets';
	import Icon from '@iconify/svelte';
	import Seo from '$components/seo.svelte';
	import { origin } from '$lib/url';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	const snippets = getSnippets().slice(0, 4);
	const projects = getProjects().slice(0, 4);
	const articles = getArticles({ lang: 'en' }).slice(0, 3);

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Abi Noval Fauzi (Pow)',
		url: origin(),
		image: origin('/images/icon.png'),
		sameAs: [
			'https://github.com/kimmyxpow',
			'https://twitter.com/kimmyxpow',
			'https://instagram.com/kimmyxpow',
			'https://linkedin.com/in/abinovalfauzi'
		],
		jobTitle: 'Fullstack Developer',
		description:
			'Fullstack developer with a love for design, community building, and writing. Creator of various web projects and contributor to open-source.',
		worksFor: {
			'@type': 'Organization',
			name: 'Peepl'
		}
	};

	onMount(() => {
		const items = document.querySelectorAll('[data-gsap-hero]');

		items.forEach((el, i) => {
			gsap.set(el, {
				scale: 0.8,
				filter: 'blur(0.2rem)',
				opacity: 0,
				y: -100
			});

			gsap
				.timeline({
					delay: i * 0.2
				})
				.to(el, {
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: 'power2.out'
				})
				.to(el, {
					scale: 1,
					filter: 'blur(0rem)',
					duration: 0.4,
					ease: 'power2.out'
				});
		});

		const button = document.querySelector('[data-hero-button]');

		gsap.set(button, {
			opacity: 0,
			y: 50,
			scale: 0.95
		});

		gsap.to(button, {
			opacity: 1,
			y: 0,
			scale: 1,
			duration: 0.6,
			delay: 1.4,
			ease: 'back.out(1.7)'
		});

		const cats = document.querySelector('[data-hero-cats]');

		gsap.set(cats, {
			opacity: 0,
			filter: 'blur(1rem)'
		});

		gsap.to(cats, {
			opacity: 1,
			duration: 1,
			delay: 1.8,
			filter: 'blur(0rem)',
			ease: 'back.out(1.4)'
		});
	});
</script>

<Seo
	title="Pow — Developer, Writer, and Curious Builder"
	{schema}
	description="People call me Pow, a fullstack developer who enjoys building, writing, and helping communities grow. This site is where I share projects, notes, and ideas."
	url="/"
	image="/images/banner.png"
/>

<main
	class="relative flex flex-col items-center justify-center overflow-hidden overflow-x-hidden border-b border-zinc-200 lg:min-h-screen"
>
	<div class="inner py-8">
		<div
			class="mx-auto flex flex-col justify-center gap-6 lg:max-w-2xl lg:items-center lg:text-center"
		>
			<span class="font-handwriting text-xl text-zinc-600 sm:text-2xl" data-gsap-hero>
				Hello, you found me.
			</span>
			<h1 class="text-4xl sm:text-5xl lg:text-7xl" data-gsap-hero>
				I'm <span class="text-primary">Pow</span>. Welcome to my
				<span class="text-primary">digital home</span>.
			</h1>
			<p class="text-balance sm:text-lg lg:text-xl" data-gsap-hero>
				This isn’t a portfolio. It’s not a blog. It’s a quiet little corner where I collect
				thoughts, tinker with ideas, and keep pieces of who I am.
			</p>
			<div class="flex flex-col items-start sm:flex-row sm:items-center sm:gap-8" data-hero-button>
				<a
					href="/about"
					class="group/button inline-flex h-14 items-center gap-2 rounded-xl border border-zinc-800 px-4 font-semibold text-dark transition-all hover:bg-primary hover:text-white [&_svg]:transition-all hover:[&_svg]:-rotate-35"
				>
					Get to know me
					<div
						class="grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white group-hover/button:text-dark"
					>
						<Icon icon="solar:arrow-right-outline" class="size-4" />
					</div>
				</a>
			</div>
		</div>
	</div>
	<Cats />
</main>

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>

<section class="border-b border-zinc-300">
	<div class="inner flex flex-col items-center border-x border-zinc-300">
		<div class="w-full p-8">
			<span class="block text-center font-handwriting text-xl text-zinc-600">
				Little Brain Dumps
			</span>
			<h2 class="my-4 text-center text-3xl sm:text-6xl">Things I’ve Written Down</h2>
		</div>
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
			<Articles {articles} />
		</div>
		<a
			href="/articles"
			class="group relative flex w-full items-center justify-between px-6 py-4 text-lg font-semibold text-zinc-600 transition-all duration-300 hover:text-white"
		>
			<div
				class="absolute inset-0 -z-10 w-0 bg-primary transition-all duration-300 group-hover:w-full"
			></div>
			See More Articles
			<Icon
				class="text-3xl transition-all duration-300 group-hover:-rotate-45"
				icon="guidance:left-arrow"
			/>
		</a>
	</div>
</section>

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>

<section class="border-b border-zinc-300">
	<div class="inner flex flex-col items-center border-x border-zinc-300">
		<div class="w-full p-8">
			<span class="block text-center font-handwriting text-xl text-zinc-600">
				Things I've Made (and Broke)
			</span>
			<h2 class="my-4 text-center text-3xl sm:text-6xl">Projects I’ve Been Building</h2>
		</div>
		<div class="grid divide-x divide-zinc-300 md:grid-cols-2">
			<Projects {projects} />
		</div>
		<a
			href="/projects"
			class="group relative flex w-full items-center justify-between px-6 py-4 text-lg font-semibold text-zinc-600 transition-all duration-300 hover:text-white"
		>
			<div
				class="absolute inset-0 -z-10 w-0 bg-primary transition-all duration-300 group-hover:w-full"
			></div>
			See More Projects
			<Icon
				class="text-3xl transition-all duration-300 group-hover:-rotate-45"
				icon="guidance:left-arrow"
			/>
		</a>
	</div>
</section>

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>

<section class="border-b border-zinc-300">
	<div class="inner flex flex-col items-center border-x border-zinc-300">
		<div class="w-full p-8">
			<span class="block text-center font-handwriting text-xl text-zinc-600">Memory Hacks</span>
			<h2 class="my-4 text-center text-3xl sm:text-6xl">Tiny Code Things</h2>
		</div>
		<div class="w-full">
			<Snippets {snippets} />
		</div>
		<a
			href="/snippets"
			class="group relative flex w-full items-center justify-between px-6 py-4 text-lg font-semibold text-zinc-600 transition-all duration-300 hover:text-white"
		>
			<div
				class="absolute inset-0 -z-10 w-0 bg-primary transition-all duration-300 group-hover:w-full"
			></div>
			See More Snippets
			<Icon
				class="text-3xl transition-all duration-300 group-hover:-rotate-45"
				icon="guidance:left-arrow"
			/>
		</a>
	</div>
</section>

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>
