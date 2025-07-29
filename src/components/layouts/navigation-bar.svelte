<script lang="ts">
	import { cn } from '$lib/cn';
	import Icon from '@iconify/svelte';
	import { Popover } from 'bits-ui';
	import { onMount } from 'svelte';

	const notebookLinks = [
		{
			href: '/articles',
			icon: 'solar:notes-linear',
			bg: 'bg-amber-600',
			title: 'Article',
			desc: 'Stuff I’ve written about tech, life, and whatever else I felt like putting into words.'
		},
		{
			href: '/snippets',
			icon: 'solar:paperclip-rounded-linear',
			bg: 'bg-fuchsia-600',
			title: 'Snippets',
			desc: 'Small pieces of code I’ve reused, reshaped, or just wanted to remember.'
		},
		{
			href: '/guest-book',
			icon: 'solar:paw-linear',
			bg: 'bg-emerald-600',
			title: 'Guest Book',
			desc: 'Say hi, leave a trace, or just let me know you were here.'
		}
	];

	const personalLinks = [
		{ href: '/about', img: 'about.webp', label: 'About' },
		{ href: '/goals', img: 'goals.webp', label: 'Goals' }
		// { href: '/interest', img: 'interest.webp', label: 'Interest' },
		// { href: '/gallery', img: 'gallery.webp', label: 'Gallery' }
	];

	const extraLinks = [
		// { href: '/mentoring', icon: 'solar:call-chat-rounded-linear', label: 'Mentoring' },
		{ href: '/attributions', icon: 'solar:accessibility-linear', label: 'Attribution' },
		{ href: '/community', icon: 'radix-icons:discord-logo', label: 'Community' }
	];

	let isOpen = $state(false);
</script>

<header
	class="fixed left-1/2 z-50 mt-4 hidden max-w-max -translate-x-1/2 rounded-2xl bg-gradient-to-r from-black via-cyan-500 to-black p-[0.5px] lg:block"
>
	<nav class="flex h-12 items-center rounded-xl border-cyan-500 bg-zinc-800 px-1">
		<a class="grid size-10 place-items-center rounded-lg text-zinc-200 hover:bg-zinc-900" href="/">
			<Icon icon="solar:home-2-linear" />
		</a>
		<div class="h-3/5 border-r border-zinc-700"></div>
		<a
			class="flex h-10 items-center gap-1 rounded-lg pr-4 pl-2 text-zinc-300 transition-all hover:bg-zinc-900"
			href="/projects"
		>
			<span class="mb-0.5 text-xs text-zinc-600">01</span>Projects
		</a>
		<Popover.Root>
			<Popover.Trigger>
				{#snippet child({ props })}
					<button
						{...props}
						class="flex h-10 items-center gap-1 rounded-lg px-2 text-zinc-300 transition-all hover:bg-zinc-900 [&>svg]:transition-all data-[state='open']:[&>svg]:-scale-y-100"
					>
						<span class="mb-0.5 text-xs text-zinc-600">02</span>
						Notebook
						<Icon icon="solar:alt-arrow-down-linear" class="text-xl" />
					</button>
				{/snippet}
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content
					class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-30 w-full max-w-90 rounded-xl border border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-black"
					sideOffset={8}
				>
					<div class="grid gap-2">
						{#each notebookLinks as link}
							<Popover.Close>
								{#snippet child({ props })}
									<a
										{...props}
										href={link.href}
										class="flex items-start gap-4 rounded-lg border border-zinc-700 p-4 font-medium transition-all select-none hover:bg-zinc-800 focus-visible:outline-none"
									>
										<div
											class={`mt-1 grid size-10 shrink-0 place-items-center rounded-lg text-zinc-200 ${link.bg}`}
										>
											<Icon class="size-6" icon={link.icon} />
										</div>
										<div>
											<span class="text-zinc-200">{link.title}</span>
											<p class="text-sm text-zinc-400">
												{link.desc}
											</p>
										</div>
									</a>
								{/snippet}
							</Popover.Close>
						{/each}
					</div>
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
		<Popover.Root>
			<Popover.Trigger>
				{#snippet child({ props })}
					<button
						{...props}
						class="flex h-10 items-center gap-1 rounded-lg px-2 text-zinc-300 transition-all hover:bg-zinc-900 [&>svg]:transition-all data-[state='open']:[&>svg]:-scale-y-100"
					>
						<span class="mb-0.5 text-xs text-zinc-600">03</span>Personal
						<Icon icon="solar:alt-arrow-down-linear" class="text-xl" />
					</button>
				{/snippet}
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content
					class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-30 w-full max-w-90 rounded-xl border border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-black"
					sideOffset={8}
				>
					<div class="grid grid-cols-2 gap-2">
						{#each personalLinks as link}
							<Popover.Close>
								{#snippet child({ props })}
									<a
										{...props}
										href={link.href}
										class="flex h-12 items-center gap-2 rounded-lg border border-zinc-700 px-3 font-medium text-zinc-400 transition-all select-none hover:text-zinc-200 focus-visible:outline-none"
									>
										<img class="size-6" src="/animated-icons/{link.img}" alt="{link.label} Icon" />
										{link.label}
									</a>
								{/snippet}
							</Popover.Close>
						{/each}
					</div>
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
		<Popover.Root>
			<Popover.Trigger>
				{#snippet child({ props })}
					<button
						{...props}
						class="flex h-10 items-center gap-1 rounded-lg px-2 text-zinc-300 transition-all hover:bg-zinc-900 [&>svg]:transition-all data-[state='open']:[&>svg]:-scale-y-100"
					>
						<span class="mb-0.5 text-xs text-zinc-600">04</span>
						Extras
						<Icon icon="solar:alt-arrow-down-linear" class="text-xl" />
					</button>
				{/snippet}
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content
					class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-30 w-full max-w-90 rounded-xl border border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-black"
					sideOffset={8}
				>
					<div class="grid gap-2">
						{#each extraLinks as link}
							<Popover.Close>
								{#snippet child({ props })}
									<a
										{...props}
										href={link.href}
										class="flex h-12 items-center gap-2 rounded-lg border border-zinc-700 px-3 font-medium text-zinc-400 transition-all select-none hover:bg-zinc-800 focus-visible:outline-none"
									>
										<Icon icon={link.icon} class="size-6" />
										{link.label}
									</a>
								{/snippet}
							</Popover.Close>
						{/each}
					</div>
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
		<!-- <a
			class="flex h-10 items-center gap-1 rounded-lg pr-4 pl-2 text-zinc-300 transition-all hover:bg-zinc-900"
			href="/home"
		>
			<span class="mb-0.5 text-xs text-zinc-600">05</span>Contact Me
		</a> -->
		<div class="h-3/5 border-r border-zinc-700"></div>
		<button
			class="grid size-10 place-items-center rounded-lg text-zinc-200 hover:bg-zinc-900"
			onclick={() => alert('not yet implemented :p')}
		>
			<Icon icon="solar:sun-linear" />
		</button>
	</nav>
</header>

<header class="fixed inset-x-0 bottom-0 z-50 lg:hidden">
	<div class="inner">
		<div
			class="relative z-10 mb-6 ml-auto max-w-max rounded-2xl bg-gradient-to-r from-zinc-950 via-cyan-500 to-zinc-950 p-px shadow-2xl shadow-black/50"
		>
			<button
				onclick={() => (isOpen = !isOpen)}
				class="grid size-14 place-items-center rounded-2xl bg-zinc-900 text-3xl text-zinc-200 hover:bg-zinc-800"
			>
				<Icon icon={!isOpen ? 'solar:menu-dots-bold' : 'tabler:x'} />
			</button>
		</div>
		<nav
			class={cn(
				'fixed inset-x-0 bottom-0 flex origin-bottom-right translate-y-full scale-50 flex-col border-t border-zinc-700 bg-zinc-900 pb-26 transition-all duration-300',
				isOpen && 'translate-y-0 scale-100'
			)}
		>
			<div class="border-b border-zinc-700 p-4 lg:p-8">
				<a
					onclick={() => (isOpen = false)}
					class="flex items-center justify-between text-4xl text-zinc-200 sm:text-5xl"
					href="/"
				>
					Home
					<Icon icon="guidance:left-arrow" />
				</a>
			</div>
			<div class="border-b border-zinc-700 p-4 lg:p-8">
				<a
					onclick={() => (isOpen = false)}
					class="flex items-center justify-between text-4xl text-zinc-200 sm:text-5xl"
					href="/projects"
				>
					Projects <Icon icon="guidance:left-arrow" />
				</a>
			</div>
			<div class="grid grid-cols-2 gap-4 border-b border-zinc-700">
				<span class="p-4 text-4xl text-zinc-500 sm:text-5xl lg:p-8">Notebook</span>
				<div class="flex flex-col border-l border-zinc-700">
					{#each notebookLinks as link}
						<a
							onclick={() => (isOpen = false)}
							class="flex items-center justify-between border-b border-zinc-700 p-4 text-xl text-zinc-200 sm:text-3xl lg:p-8"
							href={link.href}
						>
							{link.title}
							<Icon icon="guidance:left-arrow" />
						</a>
					{/each}
				</div>
			</div>
			<div class="grid grid-cols-2 gap-4 border-b border-zinc-700">
				<span class="p-4 text-4xl text-zinc-500 sm:text-5xl lg:p-8">Personal</span>
				<div class="flex flex-col border-l border-zinc-700">
					{#each personalLinks as link}
						<a
							onclick={() => (isOpen = false)}
							class="flex items-center justify-between border-b border-zinc-700 p-4 text-xl text-zinc-200 sm:text-3xl lg:p-8"
							href={link.href}
						>
							{link.label}
							<Icon icon="guidance:left-arrow" />
						</a>
					{/each}
				</div>
			</div>
			<div class="grid grid-cols-2 gap-4 border-b border-zinc-700">
				<span class="p-4 text-4xl text-zinc-500 sm:text-5xl lg:p-8">Extras</span>
				<div class="flex flex-col border-l border-zinc-700">
					{#each extraLinks as link}
						<a
							onclick={() => (isOpen = false)}
							class="flex items-center justify-between border-b border-zinc-700 p-4 text-xl text-zinc-200 sm:text-3xl lg:p-8"
							href={link.href}
						>
							{link.label}
							<Icon icon="guidance:left-arrow" />
						</a>
					{/each}
				</div>
			</div>
		</nav>
	</div>
</header>
