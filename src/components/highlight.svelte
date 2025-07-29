<script lang="ts">
	import { highlightAll } from '@speed-highlight/core';
	import { onMount } from 'svelte';
	let { lang, code }: { lang: string; code: string } = $props();

	onMount(() => {
		highlightAll();
	});
</script>

<div class="shj-lang-{lang} overflow-x-auto">{code}</div>
