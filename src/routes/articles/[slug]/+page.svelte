<script lang="ts">
	import Seo from '$components/seo.svelte';
	import { type ArticleModule } from '$contents/articles/utils';
	import { origin } from '$lib/url';
	import { formatDate } from 'date-fns';
	import Giscus from '@giscus/svelte';

	const { data } = $props();

	const modules = $derived(import.meta.glob<ArticleModule>('/src/contents/articles/*/*.svx'));
	const key = $derived(`/src/contents/articles/${data.article.lang}/${data.article.slug}.svx`);
	const modPromise = $derived(modules[key]?.());

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: data.article.title,
		description: data.article.excerpt,
		image: origin(data.article.thumbnail),
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
		datePublished: data.article.created,
		dateModified: data.article.updated,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': origin(`articles/${data.article.slug}`)
		}
	};

	const isEnglish = $derived(data.article.lang === 'en');
</script>

<Seo
	title={data.article.title}
	description={data.article.excerpt}
	url="/articles/{data.article.slug}"
	image={data.article.thumbnail}
	{schema}
/>

<div class="relative h-60 sm:h-80">
	<img
		class="size-full object-cover"
		src={data.article.thumbnail}
		alt="{data.article.title} thumbnail"
		loading="lazy"
		fetchpriority="high"
	/>
</div>

<article class="border-b border-zinc-300">
	<div class="inner flex flex-col border-x border-zinc-300">
		<div class="order-4 grid w-full sm:grid-cols-2 md:order-1 md:grid-cols-4 md:divide-y-0">
			<div
				class="-m-px flex items-center justify-center gap-1 border border-zinc-300 bg-beige p-4 text-sm text-zinc-600"
			>
				Published at
				{formatDate(data.article.created, 'dd MMM yyyy')}
			</div>
			<div
				class="-m-px flex items-center justify-center gap-1 border border-zinc-300 bg-beige p-4 text-sm text-zinc-600"
			>
				Updated at
				{formatDate(data.article.updated, 'dd MMM yyyy')}
			</div>
			<div
				class="-m-px flex items-center justify-center gap-1 border border-zinc-300 bg-beige p-4 text-sm text-zinc-600"
			>
				{data.article.readingTime} min read
			</div>
			<a
				href="/articles?categories={data.article.category}"
				class="-m-px flex items-center justify-center gap-1 border border-zinc-300 bg-beige p-4 text-sm text-zinc-600 hover:text-primary"
			>
				{data.article.category}
			</a>
		</div>
		<div
			class="order-4 -mb-px flex w-full flex-wrap justify-center gap-4 border-b border-zinc-300 p-4 md:order-2"
		>
			{#each data.article.tags as tag}
				<a
					href="/articles?tags={tag}"
					class="flex items-center text-sm text-zinc-600 hover:text-primary"
				>
					#{tag}
				</a>
			{/each}
		</div>
		<div class="order-1 space-y-8 p-6 md:order-3">
			<h1 class="text-center text-4xl sm:text-5xl md:text-6xl">{data.article.title}</h1>
			<p class="text-center text-balance sm:text-lg md:text-xl">
				{data.article.excerpt}
			</p>
			<div class="flex items-center justify-center">
				<img
					class="size-12 rounded-full object-cover"
					src="/images/lynette.jpeg"
					alt="Pow Avatar"
				/>
				<div class="ml-2">
					<p class="leading-6 font-medium text-primary">
						<span class="text-zinc-600">By</span> Pow
					</p>
					<p class="text-sm leading-5">Software Engineer</p>
				</div>
			</div>
		</div>
		<a
			href="/articles/{isEnglish ? data.article.id : data.article.en}"
			class="group relative order-2 border-y border-zinc-300 text-sm font-semibold transition-all hover:bg-white/60 sm:text-base md:order-4 lg:hover:bg-transparent"
		>
			<div
				class="absolute inset-0 hidden w-0 items-center justify-center overflow-hidden bg-primary whitespace-nowrap text-white transition-all duration-300 group-hover:w-full lg:flex"
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
		<div class="order-3 max-w-full md:order-5">
			<div
				class="sm:prose-md mx-auto prose prose-sm p-6 prose-zinc md:prose-lg lg:px-0 prose-headings:font-normal prose-headings:text-dark prose-strong:text-dark"
			>
				{#await modPromise}
					<p>Loading Article</p>
				{:then mod}
					{@const Content = mod?.default}
					<Content />
				{/await}
			</div>
		</div>
	</div>
</article>

<section class="border-b border-zinc-300">
	<div class="inner space-y-6 border-x border-zinc-300 p-6">
		<h2 class="text-center text-2xl">Share your thoughts below</h2>
		<Giscus
			id="comments"
			repo="kimmyxpow/pow"
			repoId="R_kgDOMVl7mw"
			category="General"
			categoryId="DIC_kwDOMVl7m84Ctkq-"
			mapping="specific"
			term={data.article.slug}
			strict="1"
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
