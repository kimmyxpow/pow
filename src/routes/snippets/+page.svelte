<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { getSnippets } from '$contents/snippets';
	import Snippets from '$components/features/snippets.svelte';

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

<main class="pt-32">
	<div class="inner">
		<div class="mx-auto max-w-2xl">
			<div class="flex flex-col items-center justify-center gap-6 text-center">
				<span class="font-handwriting text-2xl text-zinc-400">Reusable little things</span>
				<h1 class="text-5xl">Code snippets I keep coming back to</h1>
				<p class="text-lg">
					Small bits of code I’ve used, reused, and forgotten more times than I’d like to admit.
					Some are practical, some are oddly specific, and all of them are here so I don’t lose them
					(again).
				</p>
			</div>
		</div>
	</div>
</main>
<section class="py-26">
	<div class="inner">
		<div class="flex-1 space-y-20">
			<div class="flex items-end gap-2">
				<div class="grid flex-1 gap-2">
					<label for="search" class="font-semibold text-zinc-300">What are you curious about?</label
					>
					<input
						class="h-14 w-full rounded-xl border border-zinc-600 px-4 ring-4 ring-transparent transition-all outline-none focus:border-zinc-200 focus:ring-zinc-800"
						placeholder="Type something like 'debounce' or 'dark mode toggle' or 'tailwind' or any other thing you can think of (or not)"
						type="text"
						value={selectedFilters.search}
						oninput={onFilterChange}
						name="search"
						id="search"
					/>
				</div>
			</div>
			<div class="columns columns-2 gap-x-8">
				<Snippets {snippets} />
			</div>
		</div>
	</div>
</section>
