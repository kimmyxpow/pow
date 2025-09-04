<script lang="ts">
	import '@fontsource-variable/syne';
	import '@fontsource/mynerve';
	import '../app.css';

	import NavigationBar from '$components/layouts/navigation-bar.svelte';
	import Footer from '$components/layouts/footer.svelte';
	import { Toaster } from 'svelte-french-toast';
	import { page } from '$app/state';
	import { tick } from 'svelte';
	import { dev } from '$app/environment';

	let { children } = $props();

	let scroll = $state<number>();

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		const docHeight = document.body.scrollHeight - window.innerHeight;
		const scrollPercent = (scrollTop / docHeight) * 100;
		scroll = scrollPercent;
	};

	$effect(() => {
		if (page.status === 200 && !dev)
			fetch('/api/visits', {
				method: 'POST',
				body: JSON.stringify({
					pathname: page.url.pathname
				})
			});

		tick().then(() => {
			window.addEventListener('scroll', handleScroll);
		});

		return () => window.addEventListener('scroll', handleScroll);
	});
</script>

<div class="fixed top-0 left-0 z-100 h-1 w-full border-b border-separator bg-transparent">
	<div
		class="h-full w-0 bg-primary transition-all duration-100 ease-out"
		style="width: {scroll}%"
	></div>
</div>
<NavigationBar />
{@render children()}
<Footer />
<Toaster />
