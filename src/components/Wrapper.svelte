<script lang="ts">
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { page } from '$app/stores';

	export let wrapperClass = '';
	export let contentClass = '';
	export let infinite = false;

	let wrapper: HTMLDivElement;
	let content: HTMLDivElement;

	const projectWrapperClass = 'md:h-[calc(100dvh-8rem)] h-[calc(50%-32px)] md:w-[calc(100%-340px)] shrink-0 w-full';

	onMount(() => {
		const lenis = new Lenis({
			wrapper,
			content,
			duration: 2,
			infinite
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		const frame = requestAnimationFrame(raf);

		return () => {
			lenis.scrollTo(0, { lerp: 1 });
			lenis.destroy();
			cancelAnimationFrame(frame);
		};
	});
</script>

<div
	bind:this={wrapper}
	class={twMerge('h-[calc(100dvh-8rem)] overflow-y-auto', $page.url.pathname.startsWith('/project') ? projectWrapperClass : '', wrapperClass)}
>
	<div in:fly={{ y: -60, duration: 500, delay: 500 }} out:fly={{ y: 60, duration: 500 }} bind:this={content} class={twMerge('p-8', contentClass)}>
		<slot />
	</div>
</div>
