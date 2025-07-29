<script lang="ts">
	import Highlight from '../highlight.svelte';

	let { snippets } = $props();
</script>

{#each snippets as snippet}
	<div
		class="flex break-inside-avoid-column flex-col space-y-4 rounded-xl bg-zinc-900 p-6 transition-all hover:-rotate-2"
	>
		<span class="font-handwriting text-4xl text-zinc-400">{snippet.name}</span>
		<p>
			{snippet.description}
		</p>
		<Highlight lang="ts" code={snippet.code} />
	</div>
{/each}
