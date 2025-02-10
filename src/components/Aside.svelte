<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import Wrapper from './Wrapper.svelte';

	let isOpen = false;

	const links = [
		{
			name: 'See My CV',
			url: 'https://r.pow.kim',
			icon: 'solar:case-outline',
			target: '_blank'
		},
		{
			name: 'About',
			url: '/about',
			icon: 'solar:sticker-smile-circle-2-broken'
		},
		{
			name: 'Project',
			url: '/project',
			icon: 'solar:code-square-broken'
		}
		// {
		// 	name: 'Certificate',
		// 	url: '/certificate',
		// 	icon: 'solar:medal-ribbons-star-broken'
		// }
	];

	const social = [
		{
			name: 'chat@pow.kim',
			url: 'mailto:chat@pow.kim',
			icon: 'uil:envelope'
		},
		{
			name: '@kimmyxpow',
			url: 'https://github.com/kimmyxpow',
			icon: 'pajamas:github'
		},
		{
			name: '@kimmyxpow',
			url: 'https://www.instagram.com/kimmyxpow',
			icon: 'mdi:instagram'
		},
		{
			name: '@kimmyxpow',
			url: 'https://x.com/kimmyxpow',
			icon: 'ri:twitter-x-fill'
		},
		// {
		// 	name: '@kimmyxpow',
		// 	url: 'https://www.youtube.com/@kimmyxpow',
		// 	icon: 'simple-line-icons:social-youtube'
		// },
		{
			name: '@kimmyxpow',
			url: 'https://www.threads.net/@kimmyxpow',
			icon: 'akar-icons:threads-fill'
		}
	];
</script>

<Wrapper
	wrapperClass="absolute z-30 h-[calc(100dvh-8rem)] min-w-[300px] max-w-[300px] shrink-0 border-r border-gray-800 bg-black transition-all duration-300 lg:relative lg:translate-x-0 {isOpen
		? 'translate-x-0'
		: '-translate-x-full'}"
	contentClass="space-y-8"
>
	<h1 class="inline-block font-black uppercase text-gray-400">Welcome</h1>
	<p class="font-medium text-gray-300">
		Hello World! Step into this digital space where lines of code come to life. Take a virtual seat and let's dive into the captivating realm of software
		together.
	</p>
	<p class="text-emerald-400">I'm currently open to new opportunities, see my cv below or feel free to contact me :D</p>
	<div class="grid gap-2">
		{#each links as link}
			{@const isCurrent = $page.url.pathname.startsWith(link.url)}
			<a
				on:click={() => (isOpen = false)}
				href={link.url}
				target={link.target}
				class="group flex items-center gap-2 rounded-2xl border-2 border-gray-800 p-4 text-left text-lg font-bold uppercase text-gray-300 transition-all duration-300 {isCurrent
					? 'bg-gray-800'
					: 'hover:bg-gray-800'}"
			>
				<Icon icon={link.icon} class="text-2xl" />
				{link.name}
				<Icon
					icon="solar:arrow-right-broken"
					class="ml-auto text-2xl transition-all duration-300 {isCurrent
						? 'translate-x-0 opacity-100'
						: '-translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}"
				/>
			</a>
		{/each}
	</div>
	<span class="inline-block font-black uppercase text-gray-400">Social</span>
	<div>
		{#each social as link}
			<a
				href={link.url}
				target="_blank"
				class="flex items-center gap-2 border-b border-gray-700 py-4 text-lg text-gray-400 transition-all duration-200 first:border-t hover:text-white"
			>
				<Icon icon={link.icon} class="text-2xl" />
				{link.name}
				<Icon icon="solar:arrow-right-up-broken" class="ml-auto text-2xl" />
			</a>
		{/each}
	</div>
</Wrapper>
<button
	class="absolute z-20 size-full bg-black/20 backdrop-blur transition-all duration-300 {isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}"
	on:click={() => (isOpen = false)}
>
	<span class="sr-only">Close Sidebar</span>
</button>
<button
	on:click={() => (isOpen = !isOpen)}
	class="fixed bottom-16 right-0 z-10 flex h-12 items-center gap-2 rounded-tl-xl border-l border-t border-gray-700 bg-black p-4 lg:hidden"
>
	<Icon icon={'ri:menu-5-line'} />
	Open Sidebar
</button>
