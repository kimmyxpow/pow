<script lang="ts">
	import Highlight from '../highlight.svelte';

	let { snippets } = $props();
</script>

{#each snippets as snippet}
	<div
		class="group relative break-inside-avoid-column rounded-lg bg-zinc-900 transition-all hover:-rotate-2"
	>
		<div class="flex flex-col space-y-4 p-6">
			<span class="font-handwriting text-4xl text-zinc-400">{snippet.name}</span>
			<p>
				{snippet.description}
			</p>
			<Highlight lang="ts" code={snippet.code} />
		</div>
	</div>
{/each}
