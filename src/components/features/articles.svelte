<script lang="ts">
	import { appendParam } from '$lib/url';
	import Icon from '@iconify/svelte';

	let { articles } = $props();
</script>

{#each articles as article}
	<div
		class="-my-[0.5px] flex flex-col-reverse items-center overflow-hidden border-y border-r border-zinc-300 bg-beige lg:flex-row"
	>
		<div class="space-y-4 p-6">
			<div class="flex flex-wrap items-center justify-between gap-2">
				<a href={appendParam('categories', article.category)} class="text-zinc-600 hover:text-dark">
					{article.category}
				</a>
				<span class="flex flex-wrap gap-2">
					{#each article.tags as tag}
						<a
							href={appendParam('tags', tag)}
							class="font-handwriting text-zinc-600 transition-all hover:text-dark"
						>
							#{tag}
						</a>
					{/each}
				</span>
			</div>
			<a href="/articles/{article.slug}">
				<h3 class="mt-2 text-3xl hover:text-primary hover:underline">
					{article.title}
				</h3>
			</a>
			<p class="line-clamp-2 text-lg">
				{article.excerpt}
			</p>
			<div class="flex flex-wrap items-start justify-between gap-2">
				<div class="flex items-center gap-2">
					<span class="text-sm text-zinc-600">
						{article.readingTime} min read
					</span>
					<span class="size-0.5 rounded-full bg-primary"></span>
					<span class="text-sm text-zinc-600">28 Sep 2023</span>
				</div>
			</div>
		</div>
		<div class="aspect-square h-full shrink-0 overflow-hidden lg:max-w-70">
			<img
				class="size-full object-cover"
				src={article.thumbnail}
				alt="{article.title} thumbnail"
				loading="lazy"
			/>
		</div>
	</div>
{/each}
