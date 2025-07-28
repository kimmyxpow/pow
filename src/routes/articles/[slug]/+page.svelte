<script lang="ts">
	import { page } from '$app/state';
	import { getArticleBySlug, type ArticleModule } from '$contents/articles/utils';
	import { my } from '$lib/url';
	import { error } from '@sveltejs/kit';
	import { formatDate } from 'date-fns';

	const article = getArticleBySlug(page.params.slug!);

	if (!article) throw error(404, 'Article not found');

	const modules = import.meta.glob<ArticleModule>('/src/contents/articles/*/*.svx');
	const key = `/src/contents/articles/${article.lang}/${article.slug}.svx`;
	const modPromise = modules[key]?.();

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: article.title,
		description: article.excerpt,
		image: my(article.thumbnail),
		author: {
			'@type': 'Person',
			name: 'Abi Noval Fauzi'
		},
		publisher: {
			'@type': 'Organization',
			name: 'bynoval',
			logo: {
				'@type': 'ImageObject',
				url: my('logo.png')
			}
		},
		datePublished: article.created,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': my(`articles/${article.slug}`)
		}
	};
</script>

<svelte:head>
	<title>{article.title} | bynoval.com</title>
	<meta name="description" content={article.excerpt} />
	<meta name="keywords" content={article.keywords} />

	<link rel="canonical" href={my(`/articles/${article.slug}`)} />

	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
	<meta property="og:title" content={article.title} />
	<meta property="og:description" content={article.excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={my(`/articles/${article.slug}`)} />
	<meta property="og:image" content={my(article.thumbnail)} />
	<meta property="og:site_name" content="bynoval" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={article.title} />
	<meta name="twitter:description" content={article.excerpt} />
	<meta name="twitter:image" content={my(article.thumbnail)} />
	<meta name="twitter:site" content="@kimmyxpow" />
</svelte:head>

<section class="pt-86 pb-26">
	<div class="absolute inset-x-0 top-0 aspect-[4/3] overflow-hidden">
		<img
			class="size-full object-cover"
			src={article.thumbnail}
			alt="{article.title} thumbnail"
			loading="lazy"
		/>
		<div
			class="absolute bottom-0 size-full bg-gradient-to-b from-transparent to-zinc-950 to-35%"
		></div>
	</div>
	<div class="inner relative">
		<div class="mb-12 space-y-32">
			<div class="flex flex-col items-center gap-6">
				<h1 class="text-center text-6xl">{article.title}</h1>
				<p class="text-center text-xl text-balance text-zinc-400">{article.excerpt}</p>
				<div class="flex items-center">
					<img
						class="size-12 rounded-full object-cover"
						src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
					<div class="ml-2">
						<p class="leading-5 font-medium text-zinc-200">
							<span class="text-zinc-400">By</span> Noval
						</p>
						<p class="text-sm leading-4">Software Engineer</p>
					</div>
				</div>
				<div class="flex flex-col items-center gap-2">
					<div class="flex gap-4">
						<div class="flex items-center gap-1 text-sm text-zinc-500">
							Published at
							{formatDate(article.created, 'dd MMM yyyy')}
						</div>
						<span class="text-zinc-500">|</span>
						<div class="flex items-center gap-1 text-sm text-zinc-500">
							Last updated at
							{formatDate(article.updated, 'dd MMM yyyy')}
						</div>
						<span class="text-zinc-500">|</span>
						<div class="flex items-center gap-1 text-sm text-zinc-500">
							{article.readingTime} min read
						</div>
					</div>
					<div class="flex gap-4">
						<a
							href="/articles?categories={article.category}"
							class="flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-200"
						>
							{article.category}
						</a>
						<span class="text-zinc-500">|</span>
						{#each article.tags as tag}
							<a
								href="/articles?tags={tag}"
								class="flex items-center text-sm text-zinc-500 hover:text-zinc-200"
							>
								#{tag}
							</a>
						{/each}
					</div>
				</div>
			</div>
			<div
				class="mx-auto prose prose-lg prose-zinc prose-invert prose-headings:font-normal prose-headings:text-zinc-200 prose-strong:font-normal prose-strong:text-zinc-200"
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
</section>
