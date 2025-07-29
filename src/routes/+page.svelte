<script lang="ts">
	import Articles from '$components/features/articles.svelte';
	import Projects from '$components/features/projects.svelte';
	import Snippets from '$components/features/snippets.svelte';
	import { getArticles } from '$contents/articles/utils';
	import { getProjects } from '$contents/projects';
	import { getSnippets } from '$contents/snippets';
	import Icon from '@iconify/svelte';

	const snippets = getSnippets().slice(0, 4);
	const projects = getProjects().slice(0, 3);
	const articles = getArticles({ lang: 'en' }).slice(0, 3);
</script>

<main class="relative flex items-center py-28 lg:min-h-screen">
	<div class="inner">
		<div class="mx-auto lg:max-w-2xl">
			<div class="flex flex-col justify-center gap-6 lg:items-center lg:text-center">
				<span class="font-handwriting text-2xl text-zinc-400">Hello, you found me.</span>
				<h1 class="text-4xl sm:text-5xl lg:text-7xl">
					I'm <span class="text-cyan-500">Noval</span>. Welcome to my
					<span class="text-cyan-500">digital home</span>.
				</h1>
				<p class="sm:text-lg lg:text-xl">
					This isn’t a portfolio. It’s not a blog. It’s a quiet little corner where I collect
					thoughts, tinker with ideas, and keep pieces of who I am. There’s no grand theme — just
					life, as it unfolds.
				</p>
				<div class="flex flex-col items-start sm:flex-row sm:items-center sm:gap-8">
					<a
						href="/about"
						class="group/button inline-flex h-14 items-center gap-2 rounded-xl border border-zinc-700 px-4 text-white transition-all hover:bg-zinc-900 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
					>
						Get to know me
						<div
							class="grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white group-hover/button:text-zinc-800"
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
	</div>
</main>
<div class="relative flex items-center">
	<div class="absolute left-0 h-1 w-1/2 bg-gradient-to-l from-transparent to-zinc-950"></div>
	<div class="w-full border-b border-cyan-500"></div>
	<div class="absolute right-0 h-1 w-1/2 bg-gradient-to-r from-transparent to-zinc-950"></div>
</div>
<section class="py-28">
	<div class="inner flex flex-col items-center gap-12">
		<div class="w-full">
			<span class="font-handwriting text-xl text-zinc-400">Little Brain Dumps</span>
			<h2 class="my-4 text-3xl sm:text-4xl">Things I’ve Written Down</h2>
			<p class="max-w-2xl sm:text-lg">
				Some of them started as questions. Others, just needed to be said out loud. I write when I
				can’t find the answer in silence — or when I want to remember how it felt to be here, in
				this moment.
			</p>
		</div>
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
			<Articles {articles} />
		</div>
		<a
			href="/articles"
			class="group/button inline-flex h-14 items-center gap-2 rounded-xl border border-zinc-700 px-4 text-white transition-all hover:bg-zinc-900 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
		>
			See More Articles
			<div
				class="grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white group-hover/button:text-zinc-800"
			>
				<Icon icon="solar:arrow-right-outline" class="size-4" />
			</div>
		</a>
	</div>
</section>
<div class="relative flex items-center">
	<div class="absolute left-0 h-1 w-1/2 bg-gradient-to-l from-transparent to-zinc-950"></div>
	<div class="w-full border-b border-cyan-500"></div>
	<div class="absolute right-0 h-1 w-1/2 bg-gradient-to-r from-transparent to-zinc-950"></div>
</div>
<section class="py-28">
	<div class="inner flex flex-col items-center gap-12">
		<div class="w-full">
			<span class="font-handwriting text-xl text-zinc-400">Things I've Made (and Broke)</span>
			<h2 class="my-4 text-3xl sm:text-4xl">Projects I’ve Been Building</h2>
			<p class="max-w-2xl sm:text-lg">
				This is where I get my hands dirty — building things, breaking stuff, learning as I go. Some
				are experiments, some are finished, none are perfect.
			</p>
		</div>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<Projects {projects} />
		</div>
		<a
			href="/projects"
			class="group/button inline-flex h-14 items-center gap-2 rounded-xl border border-zinc-700 px-4 text-white transition-all hover:bg-zinc-900 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
		>
			See More Projects
			<div
				class="grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white group-hover/button:text-zinc-800"
			>
				<Icon icon="solar:arrow-right-outline" class="size-4" />
			</div>
		</a>
	</div>
</section>
<div class="relative flex items-center">
	<div class="absolute left-0 h-1 w-1/2 bg-gradient-to-l from-transparent to-zinc-950"></div>
	<div class="w-full border-b border-cyan-500"></div>
	<div class="absolute right-0 h-1 w-1/2 bg-gradient-to-r from-transparent to-zinc-950"></div>
</div>
<section class="py-28">
	<div class="inner flex flex-col items-center gap-12">
		<div class="w-full">
			<span class="font-handwriting text-xl text-zinc-400">Memory Hacks</span>
			<h2 class="my-4 text-3xl sm:text-4xl">Tiny Code Things</h2>
			<p class="max-w-2xl sm:text-lg">
				I forget stuff. These snippets are like sticky notes for my future self — little reminders
				that saved me hours. You’re welcome to borrow them, or improve them (or laugh at them).
			</p>
		</div>
		<div class="w-full gap-8 sm:columns-2">
			<Snippets {snippets} />
		</div>
		<a
			href="/snippets"
			class="group/button inline-flex h-14 items-center gap-2 rounded-xl border border-zinc-700 px-4 text-white transition-all hover:bg-zinc-900 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
		>
			See More Snippets
			<div
				class="grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white group-hover/button:text-zinc-800"
			>
				<Icon icon="solar:arrow-right-outline" class="size-4" />
			</div>
		</a>
	</div>
</section>
