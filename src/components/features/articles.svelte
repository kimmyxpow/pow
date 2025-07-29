<script lang="ts">
	import { appendParam } from '$lib/url';
	import Icon from '@iconify/svelte';

	let { articles } = $props();
</script>

{#each articles as article}
	<div class="flex flex-col-reverse items-center gap-12 rounded-lg bg-zinc-900/70 p-6 lg:flex-row">
		<div class="space-y-2">
			<div class="flex flex-wrap items-center justify-between gap-2">
				<a
					href={appendParam('categories', article.category)}
					class="font-handwriting text-2xl text-zinc-400 italic hover:text-zinc-200"
				>
					{article.category}
				</a>
				<span class="flex flex-wrap gap-2">
					{#each article.tags as tag}
						<a
							href={appendParam('tags', tag)}
							class="text-sm text-zinc-500 transition-all hover:text-zinc-200"
						>
							#{tag}
						</a>
					{/each}
				</span>
			</div>
			<h3 class="mt-2 text-xl md:text-2xl">{article.title}</h3>
			<p class="line-clamp-2">
				{article.excerpt}
			</p>
			<div class="flex flex-wrap items-start justify-between gap-2">
				<div class="flex items-center gap-2">
					<span class="text-sm text-zinc-500">
						{article.readingTime} min read
					</span>
					<span class="size-0.5 rounded-full bg-cyan-500"></span>
					<span class="text-sm text-zinc-500">28 Sep 2023</span>
				</div>
				<a
					href="/articles/{article.slug}"
					class="flex items-center gap-1 text-cyan-500 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
				>
					Read more <Icon icon="solar:arrow-right-linear" />
				</a>
			</div>
		</div>
		<div class="aspect-[4/3] shrink-0 overflow-hidden rounded-md lg:max-w-70">
			<img
				class="size-full object-cover"
				src={article.thumbnail}
				alt="{article.title} thumbnail"
				loading="lazy"
			/>
		</div>
	</div>
{/each}
