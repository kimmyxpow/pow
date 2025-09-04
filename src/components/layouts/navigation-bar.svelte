<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/cn';
	import { currentTheme } from '$lib/writeables';
	import Icon from '@iconify/svelte';
	import { Dialog, Popover } from 'bits-ui';
	import { Select } from 'bits-ui';

	const notebookLinks = [
		{
			href: '/articles',
			icon: 'solar:notes-linear',
			bg: 'bg-[#B7B1F2]',
			title: 'Article',
			desc: 'Stuff I’ve written about tech, life, and whatever else I felt like putting into words.'
		},
		{
			href: '/snippets',
			icon: 'solar:paperclip-rounded-linear',
			bg: 'bg-[#FDB7EA]',
			title: 'Snippets',
			desc: 'Small pieces of code I’ve reused, reshaped, or just wanted to remember.'
		},
		{
			href: '/guest-book',
			icon: 'solar:paw-linear',
			bg: 'bg-[#FFDCCC]',
			title: 'Guest Book',
			desc: 'Say hi, leave a trace, or just let me know you were here.'
		}
	];

	const personalLinks = [
		{ href: '/about', emoji: '👋', label: 'About' },
		{ href: '/goals', emoji: '🎯', label: 'Goals' }
		// { href: '/interest', img: 'interest.webp', label: 'Interest' },
		// { href: '/gallery', img: 'gallery.webp', label: 'Gallery' }
	];

	const extraLinks = [
		// { href: '/mentoring', icon: 'solar:call-chat-rounded-linear', label: 'Mentoring' },
		{ href: '/attributions', icon: 'solar:accessibility-linear', label: 'Attribution' },
		{
			href: 'https://discord.gg/ExCvJtVTu6',
			icon: 'radix-icons:discord-logo',
			label: 'Dicsord Server',
			attr: {
				target: '_blank',
				rel: 'noopener noreferrer'
			}
		}
	];

	let isOpen = $state(false);

	const themes = [
		{ value: 'default', label: 'Default', colour: '#f8f6e3' },
		{ value: 'white', label: 'White', colour: '#fff' },
		{ value: 'zinc', label: 'Zinc', colour: '#18181b' },
		{ value: 'black', label: 'Black', colour: '#000' },
		{ value: 'pray-for-indonesia', label: '#ResetIndonesia', colour: '#FF2DD1' }
	];

	$currentTheme = page.data.theme;
	const selectedTheme = $derived(themes.find((theme) => theme.value === $currentTheme)!);

	const handleThemeChange = (v: string) => {
		$currentTheme = v;
		document.documentElement.className = v;
		document.cookie = `theme=${v}; path=/; max-age=31536000; SameSite=Strict; Secure`;
	};
</script>

<header class="fixed inset-x-0 top-0 z-50 hidden border-b border-separator bg-background lg:block">
	<nav class="inner flex justify-center py-6">
		<a
			class="flex items-center gap-1 rounded-lg pr-4 pl-2 font-medium text-foreground-text transition-all hover:text-primary"
			href="/"
		>
			<span class="mb-0.5 text-xs text-foreground-text" aria-hidden="true">00</span>Home
		</a>
		<a
			class="flex items-center gap-1 rounded-lg pr-4 pl-2 font-medium text-foreground-text transition-all hover:text-primary"
			href="/projects"
		>
			<span class="mb-0.5 text-xs text-foreground-text" aria-hidden="true">01</span>Projects
		</a>
		<Popover.Root>
			<Popover.Trigger>
				{#snippet child({ props })}
					<button
						{...props}
						class="flex items-center gap-1 rounded-lg px-2 font-medium text-foreground-text transition-all hover:text-primary [&>svg]:transition-all data-[state='open']:[&>svg]:-scale-y-100"
					>
						<span class="mb-0.5 text-xs text-foreground-text" aria-hidden="true">02</span>
						Notebook
						<Icon icon="solar:alt-arrow-down-linear" class="text-xl" />
					</button>
				{/snippet}
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content
					class="z-30 mt-2 w-full max-w-90 border border-separator bg-background shadow-2xl shadow-black/10 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
					sideOffset={8}
				>
					<div class="grid">
						{#each notebookLinks as link}
							<Popover.Close>
								{#snippet child({ props })}
									<a
										{...props}
										href={link.href}
										class="flex items-start gap-4 border-b border-separator p-4 font-medium transition-all select-none last:border-b-0 hover:bg-background-2/30 focus-visible:outline-none"
									>
										<div
											class={`mt-1 grid size-10 shrink-0 place-items-center rounded-lg text-zinc-600 ${link.bg}`}
										>
											<Icon class="size-6" icon={link.icon} />
										</div>
										<div>
											<span class="text-foreground-primary">{link.title}</span>
											<p class="text-sm">
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
						aria-label="Toggle Menu"
						class="flex items-center gap-1 rounded-lg px-2 font-medium text-foreground-text transition-all hover:text-primary [&>svg]:transition-all data-[state='open']:[&>svg]:-scale-y-100"
					>
						<span class="mb-0.5 text-xs text-foreground-text" aria-hidden="true">03</span>Personal
						<Icon icon="solar:alt-arrow-down-linear" class="text-xl" />
					</button>
				{/snippet}
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content
					class="z-30 mt-4 w-full max-w-90 border border-separator bg-background shadow-2xl shadow-black/10 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
					sideOffset={8}
				>
					<div class="grid grid-cols-2 divide-x divide-separator">
						{#each personalLinks as link}
							<Popover.Close>
								{#snippet child({ props })}
									<a
										{...props}
										href={link.href}
										class="flex items-center gap-2 px-6 py-3 font-medium text-foreground-text transition-all select-none hover:bg-background-2/30 focus-visible:outline-none"
									>
										{link.emoji}
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
						class="flex items-center gap-1 rounded-lg px-2 font-medium text-foreground-text transition-all hover:text-primary [&>svg]:transition-all data-[state='open']:[&>svg]:-scale-y-100"
					>
						<span class="mb-0.5 text-xs text-foreground-text" aria-hidden="true">04</span>
						Extras
						<Icon icon="solar:alt-arrow-down-linear" class="text-xl" />
					</button>
				{/snippet}
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content
					class="z-30 mt-4 w-full max-w-90 border border-separator bg-background shadow-2xl shadow-black/10 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
					sideOffset={8}
				>
					<div class="grid divide-y divide-separator">
						{#each extraLinks as link}
							<Popover.Close>
								{#snippet child({ props })}
									<a
										{...props}
										href={link.href}
										{...link.attr}
										class="flex h-12 items-center gap-2 px-3 font-medium text-foreground-text transition-all select-none hover:bg-background-2/30 focus-visible:outline-none"
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
		<Select.Root
			type="single"
			value={$currentTheme}
			onValueChange={handleThemeChange}
			items={themes}
		>
			<Select.Trigger
				class="flex items-center gap-1 rounded-lg border border-separator p-2 text-sm font-medium text-foreground-text"
				aria-label="Select a theme"
			>
				<div
					class="size-4 rounded-full border border-separator"
					style="background-color: {selectedTheme.colour};"
				></div>
				{selectedTheme.label}
				<Icon icon="solar:alt-arrow-down-linear" class="text-xl" />
			</Select.Trigger>
			<Select.Portal>
				<Select.Content
					class="z-60 rounded-xl border border-separator bg-background shadow-2xl shadow-black/10 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
					sideOffset={10}
				>
					<Select.Viewport class="grid divide-y divide-separator">
						{#each themes as theme, i (i + theme.value)}
							<Select.Item
								class="flex items-center gap-2 px-6 py-3 font-medium text-foreground-text transition-all select-none hover:bg-background-2/30 focus-visible:outline-none"
								value={theme.value}
								label={theme.label}
							>
								{#snippet children({ selected })}
									<div
										class="size-4 rounded-full border border-separator"
										style="background-color: {theme.colour};"
									></div>
									{theme.label}
									{#if selected}
										<Icon icon="tabler:check" class="text-primary" />
									{/if}
								{/snippet}
							</Select.Item>
						{/each}
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	</nav>
</header>

<header class="fixed inset-x-0 bottom-0 z-50 lg:hidden">
	<div class="inner">
		<button
			onclick={() => (isOpen = !isOpen)}
			aria-label="Toggle navigation menu"
			class="relative z-10 mb-6 ml-auto grid size-14 place-items-center rounded-2xl border border-zinc-800 bg-primary text-3xl text-white"
		>
			<Icon
				class={cn('absolute transition-all duration-300', !isOpen && 'rotate-90 opacity-0')}
				icon={'tabler:x'}
			/>
			<Icon
				class={cn('absolute transition-all duration-300', isOpen && '-rotate-90 opacity-0')}
				icon={'solar:menu-dots-bold'}
			/>
		</button>
		<nav
			class={cn(
				'fixed inset-x-0 bottom-0 flex origin-bottom scale-y-0 flex-col border-t border-zinc-700 bg-zinc-900 pb-26 transition-all duration-300',
				isOpen && 'scale-y-100'
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
				<span class="p-4 text-4xl text-foreground-text sm:text-5xl lg:p-8">Notebook</span>
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
				<span class="p-4 text-4xl text-foreground-text sm:text-5xl lg:p-8">Personal</span>
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
				<span class="p-4 text-4xl text-foreground-text sm:text-5xl lg:p-8">Extras</span>
				<div class="flex flex-col border-l border-zinc-700">
					{#each extraLinks as link}
						<a
							onclick={() => (isOpen = false)}
							class="flex items-center justify-between border-b border-zinc-700 p-4 text-xl text-zinc-200 sm:text-3xl lg:p-8"
							href={link.href}
							{...link.attr}
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
