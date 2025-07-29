<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Projects from '$components/features/projects.svelte';
	import { getCategories, getProjects, getTags } from '$contents/projects';
	import { appendParam } from '$lib/url';
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
			title: 'Just show me...',
			type: 'categories' as const,
			options: categories
		},
		{
			title: 'Tags included...',
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
</script>

<main class="pt-16 lg:pt-32">
	<div class="inner">
		<div class="mx-auto lg:max-w-2xl">
			<div class="flex flex-col justify-center gap-6 lg:items-center lg:text-center">
				<span class="font-handwriting text-2xl text-zinc-400">Things I’ve built — or tried to.</span
				>
				<h1 class="text-4xl md:text-5xl">Projects, experiments & digital leftovers</h1>
				<p class="sm:text-lg">
					Not every idea becomes a masterpiece — but some are worth building anyway. Here’s a mix of
					things I’ve shipped, tweaked, or just needed to get out of my head.
				</p>
			</div>
		</div>
	</div>
</main>
<section class="py-8 lg:py-26">
	<div class="inner">
		<div class="flex flex-col-reverse gap-6 lg:flex-row">
			<div class="flex-1 space-y-6">
				<div class="flex items-end gap-2">
					<div class="grid flex-1 gap-2">
						<label for="search" class="font-semibold text-zinc-300">
							What are you curious about?
						</label>
						<input
							class="h-14 w-full rounded-xl border border-zinc-600 px-4 ring-4 ring-transparent transition-all outline-none focus:border-zinc-200 focus:ring-zinc-800"
							placeholder="Search projects... or just type something weird"
							type="text"
							value={selectedFilters.search}
							oninput={(e) => onFilterChange(e, 'search')}
							name="search"
							id="search"
						/>
					</div>
				</div>
				<div class="grid gap-8 sm:grid-cols-2">
					<Projects {projects} />
				</div>
			</div>
			<div class="w-full max-w-80">
				<div class="grid flex-1 gap-6">
					{#each filtersList as filter}
						<span class="font-semibold text-zinc-300">{filter.title}</span>
						<div class="flex grid-cols-2 flex-wrap gap-4 lg:grid">
							{#each filter.options as option}
								{@const isChecked = selectedFilters[filter.type].includes(option)}
								<div class="flex items-center gap-2">
									<input
										type="checkbox"
										onchange={(e) => onFilterChange(e, filter.type)}
										value={option}
										checked={isChecked}
										id="checkbox-{option}"
										class="peer hidden"
									/>
									<label
										for="checkbox-{option}"
										class="inline-flex size-6 items-center justify-center rounded-md border border-zinc-600 transition-all duration-150 ease-in-out peer-checked:border-zinc-400 peer-checked:bg-zinc-200 active:scale-[0.98]"
									>
										{#if isChecked}
											<Icon icon="lineicons:minus" class="text-background size-4" />
										{/if}
									</label>
									<label
										for="checkbox-{option}"
										class="font-medium text-zinc-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										{option}
									</label>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
