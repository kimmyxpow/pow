<script lang="ts">
	import Seo from '$components/seo.svelte';
	import { my } from '$lib/url';

	let { data } = $props();

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Dataset',
		name: 'Page Visits | callmepow.com',
		description:
			'A public record of page views on this website. Each row in the dataset corresponds to a page and its total visit count.',
		creator: {
			'@type': 'Person',
			name: 'Abi Noval Fauzi (Pow)',
			url: my()
		},
		url: my('/visits'),
		license: 'https://creativecommons.org/publicdomain/zero/1.0/'
	};
</script>

<Seo
	title="Page Visits"
	{schema}
	description="A transparent view of how often each page on this site has been visited."
	url="/visits"
	image="/images/banner.png"
/>

<main class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 px-8 py-8 lg:py-28">
		<div
			class="mx-auto flex flex-col justify-center gap-2 lg:max-w-2xl lg:items-center lg:gap-6 lg:text-center"
		>
			<span class="font-handwriting text-2xl text-zinc-500"> Tiny peek behind the curtain </span>
			<h1 class="text-4xl text-balance md:text-5xl">Which pages got the most love?</h1>
		</div>
	</div>
</main>

<section class="border-b border-zinc-300">
	<div class="inner -mb-px border-x border-zinc-300">
		<table class="w-full table-auto">
			<thead>
				<tr>
					<th class="border-r border-b border-zinc-300 px-8 py-4 font-normal text-zinc-500">
						Route
					</th>
					<th class="border-b border-zinc-300 px-8 py-4 font-normal text-zinc-500">Visits</th>
				</tr>
			</thead>
			<tbody>
				{#each data.visits as visit}
					<tr>
						<td class="border-r border-b border-zinc-300 px-8 py-4 text-zinc-500">
							<a class="break-all hover:underline" href={visit.route}>{visit.route}</a>
						</td>
						<td class="border-b border-zinc-300 px-8 py-4 text-zinc-500">{visit.count}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>
