<script lang="ts">
	import Icon from '@iconify/svelte';

	export let github: string = '#';
	export let web: string = '#';
	export let img: string;
	export let alt: string;
</script>

<div class="not-prose flex flex-wrap gap-4">
	<a href={github} class="group flex items-center gap-2 {github === '#' && 'pointer-events-none'}" target="_blank">
		<Icon icon="bi:github" class="text-2xl" />
		{#if github !== '#'}
			<span class="break-all font-medium group-hover:underline">{github}</span>
		{:else}
			<span class="rounded-full bg-accent-800 px-4 py-1 text-sm text-white">No Github</span>
		{/if}
	</a>
	<a href={web} class="group flex items-center gap-2 {web === '#' && 'pointer-events-none'}" target="_blank">
		<Icon icon="mdi:web" class="text-2xl" />
		{#if web !== '#'}
			<span class="break-all font-medium group-hover:underline">{web}</span>
		{:else}
			<span class="rounded-full bg-accent-800 px-4 py-1 text-sm text-white">No Web</span>
		{/if}
	</a>
</div>

<enhanced:img class="aspect-video w-full" src={img} {alt} />
