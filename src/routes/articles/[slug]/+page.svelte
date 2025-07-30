<script lang="ts">
	import { page } from '$app/state';
	import Seo from '$components/seo.svelte';
	import { getArticleBySlug, type ArticleModule } from '$contents/articles/utils';
	import { origin } from '$lib/url';
	import { error } from '@sveltejs/kit';
	import { formatDate } from 'date-fns';
	import Giscus from '@giscus/svelte';

	const article = $derived(getArticleBySlug(page.params.slug!)!);

	$effect(() => {
		if (!article) throw error(404, 'Article not found');
	});

	const modules = import.meta.glob<ArticleModule>('/src/contents/articles/*/*.svx');
	const key = $derived(`/src/contents/articles/${article.lang}/${article.slug}.svx`);
	const modPromise = $derived(modules[key]?.());

	const schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: article.title,
		description: article.excerpt,
		image: origin(article.thumbnail),
		author: {
			'@type': 'Person',
			name: 'Abi Noval Fauzi (Pow)',
			url: origin()
		},
		publisher: {
			'@type': 'Organization',
			name: 'pow.kim',
			logo: {
				'@type': 'ImageObject',
				url: origin('/images/icon.png')
			}
		},
		datePublished: article.created,
		dateModified: article.updated,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': origin(`articles/${article.slug}`)
		}
	});

	const isEnglish = $derived(article.lang === 'en');
</script>

<Seo
	title={article?.title}
	description={article?.excerpt}
	url="/articles/{article?.slug}"
	image={article?.thumbnail}
	{schema}
/>

<div class="relative h-60 sm:h-80">
	<img
		class="size-full object-cover"
		src={article.thumbnail}
		alt="{article.title} thumbnail"
		loading="lazy"
		fetchpriority="high"
	/>
</div>

<article class="border-b border-zinc-300">
	<div class="inner flex flex-col border-x border-zinc-300">
		<div class="order-4 grid w-full sm:grid-cols-2 md:order-1 md:grid-cols-4 md:divide-y-0">
			<div
				class="-m-px flex items-center justify-center gap-1 border border-zinc-300 bg-beige p-4 text-sm text-zinc-500"
			>
				Published at
				{formatDate(article.created, 'dd MMM yyyy')}
			</div>
			<div
				class="-m-px flex items-center justify-center gap-1 border border-zinc-300 bg-beige p-4 text-sm text-zinc-500"
			>
				Updated at
				{formatDate(article.updated, 'dd MMM yyyy')}
			</div>
			<div
				class="-m-px flex items-center justify-center gap-1 border border-zinc-300 bg-beige p-4 text-sm text-zinc-500"
			>
				{article.readingTime} min read
			</div>
			<a
				href="/articles?categories={article.category}"
				class="-m-px flex items-center justify-center gap-1 border border-zinc-300 bg-beige p-4 text-sm text-zinc-500 hover:text-dark"
			>
				{article.category}
			</a>
		</div>
		<div
			class="order-4 -mb-px flex w-full flex-wrap justify-center gap-4 border-b border-zinc-300 p-4 md:order-2"
		>
			{#each article.tags as tag}
				<a
					href="/articles?tags={tag}"
					class="flex items-center text-sm text-zinc-500 hover:text-dark"
				>
					#{tag}
				</a>
			{/each}
		</div>
		<div class="order-1 space-y-8 p-8 md:order-3">
			<h1 class="text-center text-4xl sm:text-5xl md:text-6xl">{article.title}</h1>
			<p class="text-center text-balance sm:text-lg md:text-xl">
				{article.excerpt}
			</p>
			<div class="flex items-center justify-center">
				<img
					class="size-12 rounded-full object-cover"
					src="/images/lynette.jpeg"
					alt="Pow Avatar"
				/>
				<div class="ml-2">
					<p class="leading-6 font-medium text-primary">
						<span class="text-zinc-500">By</span> Pow
					</p>
					<p class="text-sm leading-5">Software Engineer</p>
				</div>
			</div>
		</div>
		<a
			href="/articles/{isEnglish ? article.id : article.en}"
			class="group relative order-2 border-y border-zinc-300 text-sm transition-all hover:bg-white/60 sm:text-base md:order-4 lg:hover:bg-transparent"
		>
			<div
				class="absolute inset-0 hidden w-0 items-center justify-center bg-primary whitespace-nowrap text-white transition-all duration-300 group-hover:w-full lg:flex"
			>
				{#if isEnglish}
					Klik untuk baca dalam bahasa Indonesia
				{:else}
					Click here to read in English
				{/if}
			</div>
			<p class="p-4 text-center">
				{#if isEnglish}
					<span class="hidden lg:block">Artikel ini tersedia dalam bahasa Indonesia</span>
					<span class="lg:hidden">Klik disini untuk membaca dalam bahasa Indonesia</span>
				{:else}
					<span class="hidden lg:block">This article is available in English</span>
					<span class="lg:hidden">Click here to read in English</span>
				{/if}
			</p>
		</a>
		<div
			class="sm:prose-md order-3 mx-auto prose prose-sm p-8 prose-zinc md:order-5 md:prose-lg prose-headings:font-normal prose-headings:text-dark prose-strong:text-dark"
		>
			{#await modPromise}
				<p>Loading Article</p>
			{:then mod}
				{@const Content = mod?.default}
				<Content />
			{/await}
		</div>
	</div>
</article>

<section class="border-b border-zinc-300">
	<div class="inner space-y-6 border-x border-zinc-300 p-8">
		<h2 class="text-center text-2xl">Share your thoughts below</h2>
		<Giscus
			id="comments"
			repo="kimmyxpow/pow"
			repoId="R_kgDOMVl7mw"
			category="General"
			categoryId="DIC_kwDOMVl7m84Ctkq-"
			mapping="specific"
			term={article.slug}
			strict="0"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="top"
			theme="light"
			lang="en"
			loading="lazy"
		/>
	</div>
</section>

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>
