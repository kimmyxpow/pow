<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Projects from '$components/features/projects.svelte';
	import Seo from '$components/seo.svelte';
	import { getCategories, getProjects, getTags } from '$contents/projects';
	import { origin } from '$lib/url';
	import Icon from '@iconify/svelte';

	let selectedFilters = $derived({
		search: page.url.searchParams.get('search') || '',
		categories: page.url.searchParams.getAll('categories') || [],
		tags: page.url.searchParams.getAll('tags') || []
	});

	const projects = $derived(getProjects(selectedFilters));
	const categories = getCategories();
	const tags = getTags();

	const filtersList = [
		{
			title: 'Filter by categories:',
			type: 'categories' as const,
			options: categories
		},
		{
			title: 'Filter by tags:',
			type: 'tags' as const,
			options: tags
		}
	];

	const updateQuery = () => {
		const searchParams = new URLSearchParams();

		if (selectedFilters.search) {
			searchParams.set('search', selectedFilters.search);
		}

		selectedFilters.categories.forEach((cat) => {
			searchParams.append('categories', cat);
		});

		selectedFilters.tags.forEach((tag) => {
			searchParams.append('tags', tag);
		});

		goto(`?${searchParams.toString()}`, {
			keepFocus: true,
			noScroll: true,
			replaceState: true
		});
	};

	const onFilterChange = (event: Event, type: keyof typeof selectedFilters) => {
		const target = event.target as HTMLInputElement;

		const value = target.value;

		if (type === 'search') {
			// For search input
			selectedFilters.search = value;
		} else {
			// For categories and tags checkboxes
			selectedFilters[type] = target.checked
				? [...selectedFilters[type], value]
				: selectedFilters[type].filter((option) => option !== value);
		}

		updateQuery();
	};

	const schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Projects | pow.kim',
		url: origin('/projects'),
		description:
			'A collection of personal and collaborative projects by Pow — web apps, experiments, tools, and ideas in progress.',
		author: {
			'@type': 'Person',
			name: 'Abi Noval Fauzi (Pow)',
			url: origin()
		},
		hasPart: projects.map((p) => ({
			'@type': 'CreativeWork',
			name: p.name
		}))
	});
</script>

<Seo
	title="Projects"
	{schema}
	description="A collection of things I’ve built — from polished apps to half-finished ideas. Mostly web stuff."
	url="/projects"
	image="/images/banner.png"
/>

<main class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 px-8 py-8 lg:py-28">
		<div
			class="mx-auto flex flex-col justify-center gap-2 lg:max-w-2xl lg:items-center lg:gap-6 lg:text-center"
		>
			<span class="font-handwriting text-xl text-zinc-600 sm:text-2xl"
				>Things I’ve built — or tried to.</span
			>
			<h1 class="text-4xl text-balance md:text-5xl">Projects, experiments & digital leftovers</h1>
			<p class="text-balance sm:text-lg">
				Not every idea becomes a masterpiece — but some are worth building anyway. Here’s a mix of
				things I’ve shipped, tweaked, or just needed to get out of my head.
			</p>
		</div>
	</div>
</main>
<section class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300">
		<div class="flex flex-col gap-4 p-8">
			{#each filtersList as filter}
				<span class="text-zinc-600">{filter.title}</span>
				<div class="flex flex-wrap gap-4">
					{#each filter.options as option}
						{@const isChecked = selectedFilters[filter.type].includes(option)}
						<div class="flex items-center gap-2">
							<input
								type="checkbox"
								onchange={(e) => onFilterChange(e, filter.type)}
								value={option}
								checked={isChecked}
								id="{filter.type}-{option}"
								class="peer hidden"
							/>
							<label
								for="{filter.type}-{option}"
								class="inline-flex size-6 items-center justify-center rounded-md border border-zinc-400 transition-all duration-150 ease-in-out peer-checked:border-zinc-800 peer-checked:bg-primary active:scale-[0.98]"
							>
								{#if isChecked}
									<Icon icon="lineicons:minus" class="size-4 text-white" />
								{/if}
							</label>
							<label
								for="{filter.type}-{option}"
								class="text-zinc-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								{option}
							</label>
						</div>
					{/each}
				</div>
			{/each}
		</div>
		<div class="group -mb-px flex h-20 flex-1 items-center border-y border-zinc-300 bg-beige px-8">
			<Icon
				class="text-xl text-zinc-400 group-focus-within:text-primary"
				icon="solar:magnifer-linear"
			/>
			<input
				class="w-full px-4 transition-all outline-none"
				placeholder="Search projects... or just type something weird"
				type="text"
				autocomplete="off"
				value={selectedFilters.search}
				oninput={(e) => onFilterChange(e, 'search')}
				name="search"
				id="search"
			/>
		</div>
		<div class="grid-cols-2 sm:grid">
			<Projects {projects} />
		</div>
	</div>
</section>

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>
