<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { getSnippets } from '$contents/snippets';
	import Snippets from '$components/features/snippets.svelte';
	import Icon from '@iconify/svelte';

	let selectedFilters = $derived({
		search: page.url.searchParams.get('search') || ''
	});

	const snippets = $derived(getSnippets(selectedFilters));

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
</script>

<main class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28">
		<div class="mx-auto lg:max-w-2xl">
			<div class="flex flex-col justify-center gap-6 lg:items-center lg:text-center">
				<span class="font-handwriting text-2xl text-zinc-500">Reusable little things</span>
				<h1 class="text-4xl text-balance md:text-5xl">Code snippets I keep coming back to</h1>
				<p class="text-balance sm:text-lg">
					Small bits of code I’ve used, reused, and forgotten more times than I’d like to admit.
				</p>
			</div>
		</div>
	</div>
</main>

<section class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300">
		<div
			class="group flex h-20 flex-1 items-center border-y border-zinc-300 px-8 focus-within:border-primary"
		>
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
		<div class="grid">
			<Snippets {snippets} />
		</div>
	</div>
</section>

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>
