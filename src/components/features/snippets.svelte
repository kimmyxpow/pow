<script lang="ts">
	import Highlight from '../highlight.svelte';

	let { snippets } = $props();
</script>

{#each snippets as snippet}
	<div class="flex flex-col border-y border-border last:border-b-0">
		<div class="space-y-2 p-8">
			<h3 class="text-4xl">{snippet.name}</h3>
			<p class="text-lg">
				{snippet.description}
			</p>
		</div>
		<Highlight lang={snippet.language} code={snippet.code} />
	</div>
{/each}
