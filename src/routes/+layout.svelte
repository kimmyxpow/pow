<script lang="ts">
	import '@fontsource-variable/baskervville';
	import '@fontsource-variable/manrope';
	import '@fontsource/handlee';
	import '../app.css';

	import NavigationBar from '$components/layouts/navigation-bar.svelte';
	import Footer from '$components/layouts/footer.svelte';
	import { Toaster } from 'svelte-french-toast';
	import { page } from '$app/state';

	let { children } = $props();

	let scroll = $state<number>();

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		const docHeight = document.body.scrollHeight - window.innerHeight;
		const scrollPercent = (scrollTop / docHeight) * 100;
		scroll = scrollPercent;
	};

	$effect(() => {
		fetch('/api/visits', {
			method: 'POST',
			body: JSON.stringify({
				pathname: page.url.pathname
			})
		});

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="fixed top-0 left-0 z-100 h-1 w-full border-b border-zinc-300 bg-transparent">
	<div
		class="h-full w-0 bg-primary transition-all duration-100 ease-out"
		style="width: {scroll}%"
	></div>
</div>
<NavigationBar />
{@render children()}
<Footer />
<Toaster />
