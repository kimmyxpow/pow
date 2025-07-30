<script lang="ts">
	import Articles from '$components/features/articles.svelte';
	import Projects from '$components/features/projects.svelte';
	import Snippets from '$components/features/snippets.svelte';
	import { getArticles } from '$contents/articles/utils';
	import { getProjects } from '$contents/projects';
	import { getSnippets } from '$contents/snippets';
	import Icon from '@iconify/svelte';

	const snippets = getSnippets().slice(0, 4);
	const projects = getProjects().slice(0, 4);
	const articles = getArticles({ lang: 'en' }).slice(0, 3);
</script>

<main
	class="relative flex flex-col items-center justify-center border-b border-zinc-200 lg:min-h-screen"
>
	<div class="inner py-8">
		<div
			class="mx-auto flex flex-col justify-center gap-6 lg:max-w-2xl lg:items-center lg:text-center"
		>
			<span class="font-handwriting text-2xl text-zinc-500">Hello, you found me.</span>
			<h1 class="text-4xl sm:text-5xl lg:text-7xl">
				I'm <span class="text-primary">Pow</span>. Welcome to my
				<span class="text-primary">digital home</span>.
			</h1>
			<p class="text-balance sm:text-lg lg:text-xl">
				This isn’t a portfolio. It’s not a blog. It’s a quiet little corner where I collect
				thoughts, tinker with ideas, and keep pieces of who I am. There’s no grand theme — just
				life, as it unfolds.
			</p>
			<div class="flex flex-col items-start sm:flex-row sm:items-center sm:gap-8">
				<a
					href="/about"
					class="group/button inline-flex h-14 items-center gap-2 rounded-xl border border-zinc-800 px-4 text-dark transition-all hover:bg-primary hover:text-white [&_svg]:transition-all hover:[&_svg]:-rotate-35"
				>
					Get to know me
					<div
						class="grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white group-hover/button:text-dark"
					>
						<Icon icon="solar:arrow-right-outline" class="size-4" />
					</div>
				</a>
				<!-- <div class="relative">
						<span
							class="flex h-14 w-full items-center gap-4 bg-gradient-to-tr from-cyan-500 to-zinc-200 bg-clip-text text-transparent"
						>
							<div class="relative grid place-items-center">
								<span class="absolute size-2 rounded-full bg-cyan-500"></span>
								<span class="textcyan500 absolute size-3 animate-ping rounded-full bg-cyan-500"
								></span>
							</div>
							Open for Opportunities
						</span>
						<a
							href="/contact"
							class="absolute right-0 bottom-0 translate-1/2 -rotate-4 animate-bounce font-handwriting text-xl text-zinc-400 hover:underline"
						>
							Click here to contact me
						</a>
					</div> -->
			</div>
		</div>
	</div>
	<img
		alt=""
		class="pointer-events-none bottom-0 left-1/2 block lg:absolute lg:-translate-x-1/2"
		src="/images/decorations/cats.svg"
	/>
</main>

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>

<section class="border-b border-zinc-300">
	<div class="inner flex flex-col items-center border-x border-zinc-300">
		<div class="w-full p-8">
			<span class="block text-center font-handwriting text-xl text-zinc-400">
				Little Brain Dumps
			</span>
			<h2 class="my-4 text-center text-3xl sm:text-6xl">Things I’ve Written Down</h2>
		</div>
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
			<Articles {articles} />
		</div>
		<a
			href="/articles"
			class="group relative flex w-full items-center justify-between p-8 text-xl text-zinc-600 transition-all duration-300 hover:text-white"
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
			<span class="block text-center font-handwriting text-xl text-zinc-400"
				>Things I've Made (and Broke)</span
			>
			<h2 class="my-4 text-center text-3xl sm:text-6xl">Projects I’ve Been Building</h2>
		</div>
		<div class="grid divide-x divide-zinc-300 md:grid-cols-2">
			<Projects {projects} />
		</div>
		<a
			href="/projects"
			class="group relative flex w-full items-center justify-between p-8 text-xl text-zinc-600 transition-all duration-300 hover:text-white"
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
			<span class="block text-center font-handwriting text-xl text-zinc-400">Memory Hacks</span>
			<h2 class="my-4 text-center text-3xl sm:text-6xl">Tiny Code Things</h2>
		</div>
		<div class="w-full">
			<Snippets {snippets} />
		</div>
		<a
			href="/snippets"
			class="group relative flex w-full items-center justify-between p-8 text-xl text-zinc-600 transition-all duration-300 hover:text-white"
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
