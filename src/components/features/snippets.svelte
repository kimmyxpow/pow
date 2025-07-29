<script lang="ts">
	import Highlight from '../highlight.svelte';

	let { snippets } = $props();
</script>

{#each snippets as snippet}
	<div class="space-y-4 border-y border-zinc-300 first:border-t-0 last:border-b-0">
		<div class="space-y-2 p-8">
			<h3 class="text-4xl">{snippet.name}</h3>
			<p class="text-lg">
				{snippet.description}
			</p>
		</div>
		<Highlight lang="ts" code={snippet.code} />
	</div>
{/each}
