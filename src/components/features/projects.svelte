<script lang="ts">
	import { appendParam } from '$lib/url';

	let { projects } = $props();
</script>

{#each projects as project}
	<div class="group -mx-[0.5px] -mb-px flex flex-col space-y-4 border border-zinc-300 bg-beige">
		<div class="aspect-video overflow-hidden">
			<img
				class="size-full object-cover transition-all group-hover:scale-115 group-hover:rotate-4"
				src={project.image}
				alt="{project.name} thumbnail"
				loading="lazy"
			/>
		</div>
		<div class="flex grow flex-col">
			<div class="space-y-4 p-8">
				<a
					href={appendParam('categories', project.category)}
					class="text-zinc-400 hover:text-zinc-800"
				>
					{project.category}
				</a>
				<h3 class="mt-2 text-3xl">{project.name}</h3>
				<div class="flex items-center gap-2 text-sm text-zinc-500">
					<span class="flex gap-2">
						{#each project.tags as tag}
							<a
								href={appendParam('tags', tag)}
								class="font-handwriting text-lg transition-all hover:text-zinc-800"
							>
								#{tag}
							</a>
						{/each}
					</span>
				</div>
				<p class="line-clamp-3 text-lg">
					{project.description}
				</p>
			</div>
			<div class="mt-auto grid grid-cols-2 divide-x divide-zinc-300 border-t border-zinc-300">
				{#if project.github}
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						class="px-8 py-4 text-center text-zinc-400 hover:text-zinc-800"
						aria-label="GitHub"
					>
						GitHub
					</a>
				{/if}
				{#if project.url}
					<a
						href={project.url}
						rel="noopener noreferrer"
						target="_blank"
						class="px-8 py-4 text-center text-zinc-400 hover:text-zinc-800"
						aria-label="Website"
					>
						Demo
					</a>
				{/if}
			</div>
		</div>
	</div>
{/each}
