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
				<a href={appendParam('categories', article.category)} class="text-zinc-500 hover:text-dark">
					{article.category}
				</a>
				<span class="flex flex-wrap gap-2">
					{#each article.tags as tag}
						<a
							href={appendParam('tags', tag)}
							class="font-handwriting text-zinc-500 transition-all hover:text-dark"
						>
							#{tag}
						</a>
					{/each}
				</span>
			</div>
			<h3 class="mt-2 text-3xl">{article.title}</h3>
			<p class="line-clamp-2 text-lg">
				{article.excerpt}
			</p>
			<div class="flex flex-wrap items-start justify-between gap-2">
				<div class="flex items-center gap-2">
					<span class="text-sm text-zinc-500">
						{article.readingTime} min read
					</span>
					<span class="size-0.5 rounded-full bg-primary"></span>
					<span class="text-sm text-zinc-500">28 Sep 2023</span>
				</div>
				<a
					href="/articles/{article.slug}"
					class="flex items-center gap-1 text-primary [&_svg]:transition-all hover:[&_svg]:-rotate-35"
					aria-label="Read more about {article.title}"
				>
					Read more <Icon icon="solar:arrow-right-linear" />
				</a>
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
