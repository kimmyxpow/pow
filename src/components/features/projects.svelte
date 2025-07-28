<script lang="ts">
	import { appendParam } from '$lib/url';
	import Icon from '@iconify/svelte';

	let { projects } = $props();
</script>

{#each projects as project}
	<div class="group overflow-hidden rounded-lg bg-zinc-900/70">
		<div class="aspect-video overflow-hidden">
			<img
				class="size-full transition-all group-hover:scale-110 group-hover:rotate-4"
				src={project.image}
				alt="{project.name} thumbnail"
				loading="lazy"
			/>
		</div>
		<div class="space-y-2 p-6">
			<span class="font-handwriting text-xl text-zinc-400 italic">{project.category}</span>
			<h3 class="mt-2 text-2xl">Palletepix</h3>
			<div class="flex items-center gap-2 text-sm text-zinc-500">
				<span class="flex gap-2">
					{#each project.tags as tag}
						<a href={appendParam('tags', tag)} class="transition-all hover:text-zinc-200">#{tag}</a>
					{/each}
				</span>
			</div>
			<p class="line-clamp-3">
				{project.description}
			</p>
			<hr class="my-4 block border-zinc-700" />
			<div class="flex items-center justify-between">
				<div class="flex gap-2">
					{#if project.github}
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							class="text-zinc-400 hover:text-zinc-200"
							aria-label="GitHub"
						>
							<Icon icon="hugeicons:github" class="size-5" />
						</a>
					{/if}
					{#if project.url}
						<a
							href={project.url}
							rel="noopener noreferrer"
							target="_blank"
							class="text-zinc-400 hover:text-zinc-200"
							aria-label="Website"
						>
							<Icon icon="solar:link-linear" class="size-5" />
						</a>
					{/if}
				</div>
				<!-- <a
										href="/articles/this-is-a-title"
										class="flex items-center gap-1 text-cyan-500 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
									>
										Read Details <Icon icon="solar:arrow-right-linear" />
									</a> -->
			</div>
		</div>
	</div>
{/each}
