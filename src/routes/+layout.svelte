<script lang="ts">
	import '../app.css';
	import NavigationBar from '$components/layouts/navigation-bar.svelte';
	import Footer from '$components/layouts/footer.svelte';
	import { Toaster } from 'svelte-french-toast';
	import { page } from '$app/state';

	let { children } = $props();

	$effect(() => {
		fetch('/api/visits', {
			method: 'POST',
			body: JSON.stringify({
				pathname: page.url.pathname
			})
		});
	});
</script>

<NavigationBar />
{@render children()}
<Footer />
<Toaster />
