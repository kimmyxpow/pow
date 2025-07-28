<script lang="ts">
	import Highlight from '../highlight.svelte';
	import PaperTorn from '../svg/paper-torn.svelte';

	let { snippets } = $props();
</script>

{#each snippets as snippet}
	<div
		class="group relative mb-28 break-inside-avoid-column rounded-lg bg-zinc-900 transition-all hover:-rotate-2"
	>
		<PaperTorn class="absolute top-0 left-0 w-full -translate-y-1/2 fill-zinc-400" />
		<PaperTorn class="absolute top-2 left-0 w-full -translate-y-1/2 fill-zinc-900" />
		<PaperTorn class="absolute bottom-0 left-0 w-full translate-y-1/2 fill-zinc-400" />
		<PaperTorn class="absolute bottom-2 left-0 w-full translate-y-1/2 fill-zinc-900" />
		<div class="relative z-10 bg-zinc-900">
			<div class="flex flex-col space-y-4 p-6">
				<span class="font-handwriting text-4xl text-zinc-400">{snippet.name}</span>
				<p>
					{snippet.description}
				</p>
				<Highlight lang="ts" code={snippet.code} />
			</div>
		</div>
	</div>
{/each}
