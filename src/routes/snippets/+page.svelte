<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { getSnippets } from '$contents/snippets';
	import Snippets from '$components/features/snippets.svelte';
	import Icon from '@iconify/svelte';
	import Seo from '$components/seo.svelte';
	import { my } from '$lib/url';

	let selectedFilters = {
		search: page.url.searchParams.get('search') || ''
	};

	const snippets = getSnippets(selectedFilters);

	const updateQuery = () => {
		const searchParams = new URLSearchParams();

		if (selectedFilters.search) {
			searchParams.set('search', selectedFilters.search);
		}

		goto(`?${searchParams.toString()}`, {
			keepFocus: true,
			noScroll: true,
			replaceState: true
		});
	};

	const onFilterChange = (event: Event) => {
		const target = event.target as HTMLInputElement;

		const value = target.value;

		selectedFilters.search = value;

		updateQuery();
	};

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Code Snippets | callmepow.com',
		description:
			'A collection of handy code snippets, utilities, and tiny helpers — ready to reuse.',
		url: my('/snippets'),
		author: {
			'@type': 'Person',
			name: 'Abi Noval Fauzi (Pow)',
			url: my()
		},
		hasPart: snippets.map((s) => ({ '@type': 'CreativeWork', name: s.name }))
	};
</script>

<Seo
	title="Code Snippets"
	{schema}
	description="Bite-sized code pieces, utilities, or patterns I often use. Quick to grab, easy to reuse."
	url="/snippets"
	image="/images/banner.png"
/>

<main class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 px-8 py-8 lg:py-28">
		<div
			class="mx-auto flex flex-col justify-center gap-2 lg:max-w-2xl lg:items-center lg:gap-6 lg:text-center"
		>
			<span class="font-handwriting text-2xl text-zinc-500">Reusable little things</span>
			<h1 class="text-4xl text-balance md:text-5xl">Code snippets I keep coming back to</h1>
			<p class="text-balance sm:text-lg">
				Small bits of code I’ve used, reused, and forgotten more times than I’d like to admit.
			</p>
		</div>
	</div>
</main>

<section class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300">
		<div class="group -my-px flex h-20 flex-1 items-center border-y border-zinc-300 bg-beige px-8">
			<Icon
				class="text-xl text-zinc-400 group-focus-within:text-primary"
				icon="solar:magnifer-linear"
			/>
			<input
				class="w-full px-4 transition-all outline-none"
				placeholder="Type something like 'debounce' or 'dark mode toggle' or 'tailwind' or any other thing you can think of (or not)"
				type="text"
				autocomplete="off"
				value={selectedFilters.search}
				oninput={onFilterChange}
				name="search"
				id="search"
			/>
		</div>
		<Snippets {snippets} />
	</div>
</section>

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>
