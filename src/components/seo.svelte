<script lang="ts">
	import { origin } from '$lib/url';

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

	<link rel="canonical" href={origin(url)} />

	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={origin(url)} />
	<meta property="og:image" content={origin(image)} />
	<meta property="og:site_name" content="pow.kim" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={origin(image)} />
	<meta name="twitter:site" content="@kimmyxpow" />
</svelte:head>
