<script lang="ts">
	import { appendParam } from '$lib/url';

	let { projects } = $props();
</script>

{#each projects as project}
	<div class="group -mx-[0.5px] -mb-px flex flex-col space-y-4 border border-[#F0E4D3] bg-beige">
		<div class="aspect-video overflow-hidden">
			<img
				class="size-full object-cover transition-all group-hover:scale-115 group-hover:rotate-4"
				src={project.image}
				alt="{project.name} thumbnail"
				loading="lazy"
			/>
		</div>
		<div class="flex grow flex-col">
			<div class="space-y-4 p-6">
				<a href={appendParam('categories', project.category)} class="text-zinc-500 hover:text-dark">
					{project.category}
				</a>
				<h3 class="mt-2 text-3xl">{project.name}</h3>
				<div class="flex items-center gap-2 text-sm text-zinc-500">
					<span class="flex gap-2">
						{#each project.tags as tag}
							<a
								href={appendParam('tags', tag)}
								class="font-handwriting text-lg transition-all hover:text-dark"
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
			<div class="mt-auto grid grid-cols-2 divide-x divide-zinc-300 border-t border-[#F0E4D3]">
				{#if project.github}
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						class="group/link relative px-8 py-4 text-center text-zinc-500 transition-all duration-300 hover:text-white"
						aria-label="GitHub"
					>
						<div
							class="absolute inset-0 w-0 bg-primary transition-all group-hover/link:w-full"
						></div>
						<span class="relative">GitHub</span>
					</a>
				{/if}
				{#if project.url}
					<a
						href={project.url}
						rel="noopener noreferrer"
						target="_blank"
						class="group/link relative px-8 py-4 text-center text-zinc-500 transition-all duration-300 hover:text-white"
						aria-label="Website"
					>
						<div
							class="absolute inset-0 w-0 bg-primary transition-all group-hover/link:w-full"
						></div>
						<span class="relative">Demo</span>
					</a>
				{/if}
			</div>
		</div>
	</div>
{/each}
