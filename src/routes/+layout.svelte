<script lang="ts">
	import '../app.css';
	import NavigationBar from '$components/layouts/navigation-bar.svelte';
	import Footer from '$components/layouts/footer.svelte';
	import { Toaster } from 'svelte-french-toast';

	let { children } = $props();
</script>

<NavigationBar />
{@render children()}
<Footer />
<Toaster />
