<script lang="ts">
	import { page } from '$app/state';
	import Seo from '$components/seo.svelte';
	import { getArticleBySlug, type ArticleModule } from '$contents/articles/utils';
	import { my } from '$lib/url';
	import { error } from '@sveltejs/kit';
	import { formatDate } from 'date-fns';
	import Giscus from '@giscus/svelte';

	const article = getArticleBySlug(page.params.slug!);

	if (!article) throw error(404, 'Article not found');

	const modules = import.meta.glob<ArticleModule>('/src/contents/articles/*/*.svx');
	const key = `/src/contents/articles/${article.lang}/${article.slug}.svx`;
	const modPromise = modules[key]?.();

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: article.title,
		description: article.excerpt,
		image: my(article.thumbnail),
		author: {
			'@type': 'Person',
			name: 'Abi Noval Fauzi (Pow)',
			url: my()
		},
		publisher: {
			'@type': 'Organization',
			name: 'pow.kim',
			logo: {
				'@type': 'ImageObject',
				url: my('/images/icon.png')
			}
		},
		datePublished: article.created,
		dateModified: article.updated,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': my(`articles/${article.slug}`)
		}
	};
</script>

<Seo
	title={article.title}
	description={article.excerpt}
	url="/articles/{article.slug}"
	image={article.thumbnail}
	{schema}
/>

<div class="relative h-80">
	<img
		class="size-full object-cover"
		src={article.thumbnail}
		alt="{article.title} thumbnail"
		loading="lazy"
		fetchpriority="high"
	/>
</div>

<article class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300">
		<div class="grid w-full sm:grid-cols-2 md:grid-cols-4 md:divide-y-0">
			<div
				class="-m-px flex items-center justify-center gap-1 border border-zinc-300 bg-beige p-4 text-sm text-zinc-500"
			>
				Published at
				{formatDate(article.created, 'dd MMM yyyy')}
			</div>
			<div
				class="-m-px flex items-center justify-center gap-1 border border-zinc-300 bg-beige p-4 text-sm text-zinc-500"
			>
				Last updated at
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
		<div class="flex w-full flex-wrap justify-center gap-4 border-b border-zinc-300 p-4">
			{#each article.tags as tag}
				<a
					href="/articles?tags={tag}"
					class="flex items-center text-sm text-zinc-500 hover:text-dark"
				>
					#{tag}
				</a>
			{/each}
		</div>
		<div class="space-y-8 p-8">
			<h1 class="text-center text-4xl sm:text-5xl md:text-6xl">{article.title}</h1>
			<p class="text-center text-balance sm:text-lg md:text-xl">
				{article.excerpt}
			</p>
			<div class="flex items-center justify-center">
				<img
					class="size-12 rounded-full object-cover"
					src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>
				<div class="ml-2">
					<p class="leading-6 font-medium text-primary">
						<span class="text-zinc-500">By</span> Noval
					</p>
					<p class="text-sm leading-5">Software Engineer</p>
				</div>
			</div>
		</div>
		<div
			class="sm:prose-md mx-auto prose prose-sm px-8 pb-16 prose-zinc md:prose-lg prose-headings:font-normal prose-headings:text-dark prose-strong:text-dark"
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
