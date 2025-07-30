<script lang="ts">
	import { my } from '$lib/url';

	type Props = {
		title: string;
		description: string;
		url: string;
		schema: Record<string, unknown>;
		image: string;
	};

	let { title, description, url, schema, image }: Props = $props();
</script>

<svelte:head>
	<title>{title} | pow.kim</title>
	<meta name="description" content={description} />

	<link rel="canonical" href={my(url)} />

	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={my(url)} />
	<meta property="og:image" content={my(image)} />
	<meta property="og:site_name" content="bynoval" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={my(image)} />
	<meta name="twitter:site" content="@kimmyxpow" />
</svelte:head>
