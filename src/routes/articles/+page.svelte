<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Articles from '$components/features/articles.svelte';
	import Seo from '$components/seo.svelte';
	import { getArticles, getCategories, getTags } from '$contents/articles/utils';
	import { cn } from '$lib/cn';
	import { origin } from '$lib/url';
	import Icon from '@iconify/svelte';

	let selectedFilters = $derived<{
		search: string;
		categories: string[];
		tags: string[];
		lang: 'en' | 'id';
	}>({
		search: page.url.searchParams.get('search') || '',
		categories: page.url.searchParams.getAll('categories') || [],
		tags: page.url.searchParams.getAll('tags') || [],
		lang: (page.url.searchParams.get('lang') as 'id') || 'en'
	});

	let articles = $derived(getArticles(selectedFilters));

	const categories = getCategories();
	const tags = getTags();

	const filtersList = [
		{
			title: 'Filter by categories',
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

		if (selectedFilters.lang) {
			searchParams.set('lang', selectedFilters.lang);
		}

		selectedFilters.categories.forEach((cat) => {
			searchParams.append('categories', cat);
		});

		selectedFilters.tags.forEach((tag) => {
			searchParams.append('tags', tag);
		});

		goto(`?${searchParams.toString()}`, { replaceState: true, keepFocus: true, noScroll: true });
	};

	const onFilterChange = (event: Event, type: keyof typeof selectedFilters) => {
		const target = event.target as HTMLInputElement;

		const value = target.value;

		if (type === 'search') {
			// For search input
			selectedFilters.search = value;
		} else if (type !== 'lang') {
			// For categories and tags checkboxes
			selectedFilters[type] = target.checked
				? [...selectedFilters[type], value]
				: selectedFilters[type].filter((option) => option !== value);
		}

		updateQuery();
	};

	const onSwitchLanguage = (lang: 'en' | 'id') => {
		selectedFilters.lang = lang;
		updateQuery();
	};

	let isEnglish = $derived(selectedFilters.lang === 'en');

	const schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: 'Articles | pow.kim',
		url: origin('/articles'),
		description:
			'Articles, notes, and reflections from Pow — mostly about development, learning, and personal insights.',
		author: {
			'@type': 'Person',
			name: 'Abi Noval Fauzi (Pow)',
			url: origin()
		},
		mainEntity: articles.map((a) => ({
			'@type': 'BlogPosting',
			image: origin(a.thumbnail),
			headline: a.title,
			url: origin(`/articles/${a.slug}`),
			datePublished: a.created,
			author: {
				'@type': 'Person',
				name: 'Abi Noval Fauzi (Pow)',
				url: origin()
			}
		}))
	});
</script>

<Seo
	title="Articles"
	{schema}
	description="Long-form thoughts, reflections, and lessons I’ve written down. Mostly about code, learning, and things I find worth sharing."
	url="/articles"
	image="/images/banner.png"
/>

<main class="border-b border-border">
	<div class="inner border-x border-border px-8 py-8 lg:py-28">
		<div
			class="mx-auto flex flex-col justify-center gap-2 lg:max-w-2xl lg:items-center lg:gap-6 lg:text-center"
		>
			<span class="font-handwriting text-xl text-foreground-text sm:text-2xl">
				Things I needed to write down
			</span>
			<h1 class="text-4xl text-balance md:text-5xl">
				Notes, rambles, and things I didn’t want to forget
			</h1>
			<p class="text-balance sm:text-lg">
				I write mostly to understand things better. If it helps someone else, that’s a bonus.
			</p>
		</div>
	</div>
</main>

<section class="border-b border-border">
	<div class="inner border-x border-border">
		<div class="flex flex-col gap-4 p-8">
			{#each filtersList as filter}
				<span class="text-foreground-text">{filter.title}</span>
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
								class="inline-flex size-6 items-center justify-center rounded-md border border-zinc-400 transition-all duration-150 ease-in-out peer-checked:border-zinc-800 peer-checked:bg-primary active:scale-[0.98] zinc:border-zinc-600 black:border-zinc-600"
							>
								{#if isChecked}
									<Icon icon="lineicons:minus" class="size-4 text-white" />
								{/if}
							</label>
							<label
								for="{filter.type}-{option}"
								class="text-foreground-text peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								{option}
							</label>
						</div>
					{/each}
				</div>
			{/each}
		</div>
		<div
			class="group -mb-px flex h-20 flex-1 items-center border-y border-border bg-background px-8"
		>
			<Icon
				class="text-xl text-zinc-400 group-focus-within:text-primary"
				icon="solar:magnifer-linear"
			/>
			<input
				class="w-full px-4 transition-all outline-none"
				placeholder="Search articles title... or anything anyway"
				type="text"
				autocomplete="off"
				value={selectedFilters.search}
				oninput={(e) => onFilterChange(e, 'search')}
				name="search"
				id="search"
			/>
		</div>
		<div class="grid grid-cols-2 divide-x divide-border">
			<button
				onclick={() => onSwitchLanguage('en')}
				class={cn(
					'p-4 text-foreground-text transition-all hover:bg-primary/10',
					isEnglish && 'bg-primary text-white hover:bg-primary/90'
				)}
			>
				English Articles
			</button>
			<button
				onclick={() => onSwitchLanguage('id')}
				class={cn(
					'p-4 text-foreground-text transition-all hover:bg-primary/10',
					!isEnglish && 'bg-primary text-white hover:bg-primary/90'
				)}
			>
				Artikel Berbahasa Indonesia
			</button>
		</div>
		<div class="grid sm:grid-cols-2 lg:grid-cols-1">
			<Articles {articles} />
		</div>
	</div>
</section>

<div class="border-b border-border">
	<div class="inner border-x border-border py-28"></div>
</div>
