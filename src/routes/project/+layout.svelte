<script>
	import Wrapper from '$components/Wrapper.svelte';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	const links = [
		{
			name: 'PalettePix',
			url: 'palettepix'
		},
		{
			name: 'BagiSkrip',
			url: 'bagiskrip'
		},
		{
			name: 'OpenSeries',
			url: 'openseries'
		},
		{
			name: 'Hollux',
			url: 'hollux'
		},
		{
			name: 'Groweb',
			url: 'groweb'
		},
		{
			name: 'Nametopia',
			url: 'nametopia'
		}
	];
</script>

<div class="flex h-full flex-col md:flex-row">
	<Wrapper wrapperClass="border-b border-gray-800 md:min-w-[340px] md:max-w-[340px] md:border-r">
		<h1>Project</h1>
		<p>
			Explore a variety of innovative solutions, from web development to mobile apps. Dive into Noval's creative and technically proficient work showcased
			on this page.
		</p>
		<div class="not-prose space-y-4">
			<div class="">
				{#each links as link}
					{@const isCurrent = $page.url.pathname === `/project/${link.url}`}
					<a
						href={isCurrent ? '/project' : `/project/${link.url}`}
						class="group flex items-center justify-between border-b border-gray-700 py-4 first:border-t"
					>
						<div class="flex w-full items-center gap-4">
							<div
								class="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full text-sm transition-all duration-300 {isCurrent
									? 'h-6 w-16 bg-accent-600'
									: 'h-2 w-8 bg-gray-600 group-hover:h-6 group-hover:w-16'}"
							>
								<span class="transition-all duration-300 {isCurrent ? 'translate-x-0' : '-translate-x-10 group-hover:translate-x-0'}">
									{isCurrent ? 'Close' : 'Open'}
								</span>
							</div>
							<h2 class="text-xl font-bold transition-all duration-300 {isCurrent ? 'text-white' : 'text-gray-400 group-hover:text-white'}">
								{link.name}
							</h2>
						</div>
						<Icon
							icon="solar:map-arrow-down-broken"
							class="shrink-0 text-2xl transition-all duration-300 md:-rotate-90 {isCurrent
								? 'translate-x-0 scale-100'
								: 'translate-x-6 scale-0 group-hover:translate-x-0 group-hover:scale-100'}"
						/>
					</a>
				{/each}
			</div>
			<a
				href="https://github.com/powdotkim"
				target="_blank"
				class="flex items-center gap-2 rounded-xl bg-gray-800 px-8 py-4 transition-all duration-300 hover:bg-gray-900"
			>
				<Icon icon="bi:github" class="text-xl" />
				Other Project
				<Icon icon="solar:arrow-right-up-broken" class="ml-auto text-2xl" />
			</a>
		</div>
	</Wrapper>
	<div class="not-prose flex items-center justify-center gap-2 border-b border-gray-800 py-2 md:hidden">
		<Icon icon="lucide:arrow-down-up" />
		<p>scrollable</p>
		<Icon icon="lucide:arrow-up-down" />
	</div>
	<slot />
</div>
