<script lang="ts">
	import { squircle } from '$lib/client/attachments';
	import EnvelopIcon from 'phosphor-svelte/lib/Envelope';
	import GithubIcon from 'phosphor-svelte/lib/GithubLogo';
	import XIcon from 'phosphor-svelte/lib/XLogo';
	import LinkedinIcon from 'phosphor-svelte/lib/LinkedinLogo';
	import DiscordIcon from 'phosphor-svelte/lib/DiscordLogo';
	import ArrowSquareOutIcon from 'phosphor-svelte/lib/ArrowSquareOut';
	import CaretDownIcon from 'phosphor-svelte/lib/CaretDown';
	import { Accordion } from 'bits-ui';
</script>

<header class="border-b border-dashed border-zinc-300">
	<div class="inner border-x border-dashed border-zinc-300">
		<div class="flex items-center justify-between pl-8">
			<a href="/" class="font-bold">Pow</a>
			<div
				class="flex divide-x divide-dashed divide-zinc-300 border-l border-dashed border-zinc-300"
			>
				<a class="group relative px-4 py-4 text-sm transition-all" href="/">
					<div
						class="absolute inset-0 h-full w-0 bg-zinc-900 transition-all group-hover:w-full"
					></div>
					<span class="relative block transition-all group-hover:text-white">about</span>
				</a>
				<a class="group relative px-4 py-4 text-sm transition-all" href="/">
					<div
						class="absolute inset-0 h-full w-0 bg-zinc-900 transition-all group-hover:w-full"
					></div>
					<span class="relative block transition-all group-hover:text-white">articles</span>
				</a>
				<a class="group relative px-4 py-4 text-sm transition-all" href="/">
					<div
						class="absolute inset-0 h-full w-0 bg-zinc-900 transition-all group-hover:w-full"
					></div>
					<span class="relative block transition-all group-hover:text-white">snippets</span>
				</a>
				<a class="group relative px-4 py-4 text-sm transition-all" href="/">
					<div
						class="absolute inset-0 h-full w-0 bg-zinc-900 transition-all group-hover:w-full"
					></div>
					<span class="relative block transition-all group-hover:text-white">guestbook</span>
				</a>
			</div>
		</div>
	</div>
</header>
<main class="border-b border-dashed border-zinc-300">
	<div class="inner border-x border-dashed border-zinc-300">
		<div class="flex">
			<div class="aspect-square w-60 shrink-0">
				<img
					class="size-full object-cover"
					src="https://c.tenor.com/teQTFj1XAAUAAAAd/tenor.gif"
					alt=""
				/>
			</div>
			<div class="py-4">
				<div
					class="flex divide-x divide-dashed divide-zinc-300 border-y border-dashed border-zinc-300"
				>
					<span class="border-dashed border-zinc-300 px-8 py-2 text-sm text-zinc-500 last:border-r">
						Full Stack Software Engineer
					</span>
					<span class="border-dashed border-zinc-300 px-8 py-2 text-sm text-zinc-500 last:border-r">
						UI / UX Engineer
					</span>
					<span class="border-dashed border-zinc-300 px-8 py-2 text-sm text-zinc-500 last:border-r">
						Cat
					</span>
				</div>
				<div class="mt-4 space-y-4 px-8">
					<h1 class="text-2xl font-bold">pow</h1>
					<p>
						Passionate software engineer with 6+ years of experience building scalable web
						applications. I specialize in React, TypeScript, and Node.js, with a focus on creating
						exceptional user experiences and maintainable code architectures.
					</p>
				</div>
				<div
					class="mt-4 flex items-center gap-2 border-t border-dashed border-zinc-300 px-8 pt-4 text-sm"
				>
					<span class="relative size-2 rounded-full bg-pink-600">
						<span class="absolute inset-0 size-full animate-ping rounded-full bg-pink-600"></span>
					</span>
					Currently working at
					<a class="text-pink-600 hover:underline" href="https://www.peepl.tech/" target="_blank">
						Peepl
					</a>
				</div>
			</div>
		</div>
	</div>
</main>
<div class="inner">
	<div
		class="h-8 border-x border-dashed border-zinc-300 bg-[repeating-linear-gradient(315deg,var(--color-gray-300)_0,var(--color-gray-300)_0.5px,transparent_0,transparent_50%)] bg-size-[10px_10px]"
	></div>
</div>
<section class="border-y border-dashed border-zinc-300">
	<div
		class="inner grid grid-cols-3 divide-x divide-dashed divide-zinc-300 border-x border-dashed border-zinc-300"
	>
		<a
			href="mailto:chat@powroom.com"
			target="_blank"
			class="group relative flex gap-2 p-4 transition-all hover:bg-zinc-100 nth-[-n+3]:border-b nth-[-n+3]:border-dashed nth-[-n+3]:border-zinc-300 nth-[3]:border-r-0"
		>
			<div
				class="grid size-10 place-items-center rounded-xl bg-zinc-900 text-xl text-white"
				{@attach squircle()}
			>
				<EnvelopIcon />
			</div>
			<div>
				<h3 class="font-bold">Email</h3>
				<p class="text-sm">chat@powroom.com</p>
			</div>
			<ArrowSquareOutIcon
				class="absolute top-1/2 right-4 -translate-y-1/2 scale-0 text-2xl text-zinc-500 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
			/>
		</a>
		<a
			href="mailto:chat@powroom.com"
			target="_blank"
			class="group relative flex gap-2 p-4 transition-all hover:bg-zinc-100 nth-[-n+3]:border-b nth-[-n+3]:border-dashed nth-[-n+3]:border-zinc-300 nth-[3]:border-r-0"
		>
			<div
				class="grid size-10 place-items-center rounded-xl bg-zinc-900 text-xl text-white"
				{@attach squircle()}
			>
				<GithubIcon />
			</div>
			<div>
				<h3 class="text-lg font-bold">Github</h3>
				<p class="text-sm">kimmyxpow</p>
			</div>
			<ArrowSquareOutIcon
				class="absolute top-1/2 right-4 -translate-y-1/2 scale-0 text-2xl text-zinc-500 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
			/>
		</a>
		<a
			href="mailto:chat@powroom.com"
			target="_blank"
			class="group relative flex gap-2 p-4 transition-all hover:bg-zinc-100 nth-[-n+3]:border-b nth-[-n+3]:border-dashed nth-[-n+3]:border-zinc-300 nth-[3]:border-r-0"
		>
			<div
				class="grid size-10 place-items-center rounded-xl bg-zinc-900 text-xl text-white"
				{@attach squircle()}
			>
				<XIcon />
			</div>
			<div>
				<h3 class="text-lg font-bold">X/twitter</h3>
				<p class="text-sm">kimmyxpow</p>
			</div>
			<ArrowSquareOutIcon
				class="absolute top-1/2 right-4 -translate-y-1/2 scale-0 text-2xl text-zinc-500 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
			/>
		</a>
		<a
			href="mailto:chat@powroom.com"
			target="_blank"
			class="group relative flex gap-2 p-4 transition-all hover:bg-zinc-100 nth-[-n+3]:border-b nth-[-n+3]:border-dashed nth-[-n+3]:border-zinc-300 nth-[3]:border-r-0"
		>
			<div
				class="grid size-10 place-items-center rounded-xl bg-zinc-900 text-xl text-white"
				{@attach squircle()}
			>
				<LinkedinIcon />
			</div>
			<div>
				<h3 class="text-lg font-bold">Linkedin</h3>
				<p class="text-sm">abinovalfauzi</p>
			</div>
			<ArrowSquareOutIcon
				class="absolute top-1/2 right-4 -translate-y-1/2 scale-0 text-2xl text-zinc-500 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
			/>
		</a>
		<a
			href="mailto:chat@powroom.com"
			target="_blank"
			class="group relative flex gap-2 p-4 transition-all hover:bg-zinc-100 nth-[-n+3]:border-b nth-[-n+3]:border-dashed nth-[-n+3]:border-zinc-300 nth-[3]:border-r-0"
		>
			<div
				class="grid size-10 place-items-center rounded-xl bg-zinc-900 text-xl text-white"
				{@attach squircle()}
			>
				<DiscordIcon />
			</div>
			<div>
				<h3 class="text-lg font-bold">Discord</h3>
				<p class="text-sm">kimmyxpow</p>
			</div>
			<ArrowSquareOutIcon
				class="absolute top-1/2 right-4 -translate-y-1/2 scale-0 text-2xl text-zinc-500 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
			/>
		</a>
		<a
			href="mailto:chat@powroom.com"
			target="_blank"
			class="group relative flex gap-2 p-4 transition-all hover:bg-zinc-100 nth-[-n+3]:border-b nth-[-n+3]:border-dashed nth-[-n+3]:border-zinc-300 nth-[3]:border-r-0"
		>
			<div
				class="grid size-10 place-items-center rounded-xl bg-zinc-900 text-xl text-white"
				{@attach squircle()}
			>
				<DiscordIcon />
			</div>
			<div>
				<h3 class="text-lg font-bold">Discord Server</h3>
				<p class="text-sm">Compile Cafe</p>
			</div>
			<ArrowSquareOutIcon
				class="absolute top-1/2 right-4 -translate-y-1/2 scale-0 text-2xl text-zinc-500 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
			/>
		</a>
	</div>
</section>
<div class="inner">
	<div
		class="h-8 border-x border-dashed border-zinc-300 bg-[repeating-linear-gradient(315deg,var(--color-gray-300)_0,var(--color-gray-300)_0.5px,transparent_0,transparent_50%)] bg-size-[10px_10px]"
	></div>
</div>
<section class="border-y border-dashed border-zinc-300">
	<div class="inner border-x border-dashed border-zinc-300">
		<h2 class="border-b border-dashed border-zinc-300 p-4 text-xl font-bold">technologies</h2>
		<div class="flex flex-col gap-2 p-4">
			<div class="flex flex-wrap gap-4">
				<img
					class="size-8"
					src="https://icon.icepanel.io/Technology/svg/TypeScript.svg"
					alt="TypeScript"
				/>
				<img class="size-8" src="https://icon.icepanel.io/Technology/svg/Bun.svg" alt="Bun" />
				<img
					class="size-8"
					src="https://icon.icepanel.io/Technology/svg/Node.js.svg"
					alt="Node.js"
				/>
				<img class="size-8" src="https://icon.icepanel.io/Technology/svg/PHP.svg" alt="PHP" />
				<img
					class="size-8"
					src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"
					alt="Tailwind CSS"
				/>
				<img
					class="size-8"
					src="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"
					alt="PostgresSQL"
				/>
				<img class="size-8" src="https://icon.icepanel.io/Technology/svg/MySQL.svg" alt="MySQL" />
			</div>
			<p class="text-sm">And their ecosystem like React, Next.js, Svelte, Laravel, etc</p>
		</div>
	</div>
</section>
<div class="inner">
	<div
		class="h-10 border-x border-dashed border-zinc-300 bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-gray-300)]/50"
	></div>
</div>
<section class="border-y border-dashed border-zinc-300">
	<div class="inner border-x border-dashed border-zinc-300">
		<h2 class="border-b border-dashed border-zinc-300 p-4 text-xl font-bold">experience</h2>
		<Accordion.Root type="multiple">
			<Accordion.Item class="border-b border-dashed border-zinc-300 last:border-0" value="item-1">
				<Accordion.Header>
					<Accordion.Trigger
						class="flex w-full items-center justify-between p-4 text-left transition-all hover:bg-zinc-100 [&[data-state=open]>svg]:rotate-180"
					>
						<div class="flex items-center gap-4">
							<div class="grid aspect-square size-10 shrink-0 place-items-center">
								<img
									class="size-full"
									src="https://www.peepl.tech/images/favicon.ico"
									alt="TypeScript"
								/>
							</div>
							<div>
								<h3>
									<span class="font-normal">In</span>
									<span class="font-semibold">Peepl</span>
									<span class="font-normal">as a</span>
									<span class="font-semibold">Full Stack Developer</span>
								</h3>
								<p class="flex items-center gap-4 text-sm">
									West Jakarta, Indonesia / May 2025 - Present
								</p>
							</div>
						</div>
						<CaretDownIcon class="transition-all" />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content
					class="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
				>
					<ul
						class="list-inside list-disc space-y-2 border-t border-dashed border-zinc-300 px-8 py-4 text-sm"
					>
						<li class="flex gap-4">
							<div class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-300"></div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit ullam dicta
								tenetur error, adipisci quos ea, repellendus, expedita velit doloremque dignissimos
								dolor? Assumenda deserunt numquam dolores repudiandae expedita beatae.
							</p>
						</li>
						<li class="flex gap-4">
							<div class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-300"></div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit ullam dicta
								tenetur error, adipisci quos ea, repellendus, expedita velit doloremque dignissimos
								dolor? Assumenda deserunt numquam dolores repudiandae expedita beatae.
							</p>
						</li>
						<li class="flex gap-4">
							<div class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-300"></div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit ullam dicta
								tenetur error, adipisci quos ea, repellendus, expedita velit doloremque dignissimos
								dolor? Assumenda deserunt numquam dolores repudiandae expedita beatae.
							</p>
						</li>
					</ul>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item class="border-b border-dashed border-zinc-300 last:border-0" value="item-2">
				<Accordion.Header>
					<Accordion.Trigger
						class="flex w-full items-center justify-between p-4 text-left transition-all hover:bg-zinc-100 [&[data-state=open]>svg]:rotate-180"
					>
						<div class="flex items-center gap-4">
							<div class="grid aspect-square size-10 shrink-0 place-items-center">
								<img
									class="size-full"
									src="https://zicare.id/upload/website/favicon.png"
									alt="TypeScript"
								/>
							</div>
							<div>
								<h3>
									<span class="font-normal">In</span>
									<span class="font-semibold">Zi.Care</span>
									<span class="font-normal">as a</span>
									<span class="font-semibold">Full Stack Developer</span>
								</h3>
								<p class="flex items-center gap-4 text-sm">
									West Jakarta, Indonesia / Aug 2023 - Apr 2025
								</p>
							</div>
						</div>
						<CaretDownIcon class="transition-all" />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content
					class="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
				>
					<ul
						class="list-inside list-disc space-y-2 border-t border-dashed border-zinc-300 px-8 py-4 text-sm"
					>
						<li class="flex gap-4">
							<div class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-300"></div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit ullam dicta
								tenetur error, adipisci quos ea, repellendus, expedita velit doloremque dignissimos
								dolor? Assumenda deserunt numquam dolores repudiandae expedita beatae.
							</p>
						</li>
						<li class="flex gap-4">
							<div class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-300"></div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit ullam dicta
								tenetur error, adipisci quos ea, repellendus, expedita velit doloremque dignissimos
								dolor? Assumenda deserunt numquam dolores repudiandae expedita beatae.
							</p>
						</li>
						<li class="flex gap-4">
							<div class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-300"></div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit ullam dicta
								tenetur error, adipisci quos ea, repellendus, expedita velit doloremque dignissimos
								dolor? Assumenda deserunt numquam dolores repudiandae expedita beatae.
							</p>
						</li>
					</ul>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item class="border-b border-dashed border-zinc-300 last:border-0" value="item-3">
				<Accordion.Header>
					<Accordion.Trigger
						class="flex w-full items-center justify-between p-4 text-left transition-all hover:bg-zinc-100 [&[data-state=open]>svg]:rotate-180"
					>
						<div class="flex items-center gap-4">
							<div class="grid aspect-square size-10 shrink-0 place-items-center">
								<img
									class="size-full"
									src="https://lskk.co.id/wp-content/uploads/2025/09/cropped-cropped-Artboard-14-1-180x180.png"
									alt="TypeScript"
								/>
							</div>
							<div>
								<h3>
									<span class="font-normal">In</span>
									<span class="font-semibold">LSKK</span>
									<span class="font-normal">as a</span>
									<span class="font-semibold">Full Stack Developer Intern</span>
								</h3>
								<p class="flex items-center gap-4 text-sm">
									Bandung, Indonesia / Jul 202 - Dec 2022
								</p>
							</div>
						</div>
						<CaretDownIcon class="transition-all" />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content
					class="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
				>
					<ul
						class="list-inside list-disc space-y-2 border-t border-dashed border-zinc-300 px-8 py-4 text-sm"
					>
						<li class="flex gap-4">
							<div class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-300"></div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit ullam dicta
								tenetur error, adipisci quos ea, repellendus, expedita velit doloremque dignissimos
								dolor? Assumenda deserunt numquam dolores repudiandae expedita beatae.
							</p>
						</li>
						<li class="flex gap-4">
							<div class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-300"></div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit ullam dicta
								tenetur error, adipisci quos ea, repellendus, expedita velit doloremque dignissimos
								dolor? Assumenda deserunt numquam dolores repudiandae expedita beatae.
							</p>
						</li>
						<li class="flex gap-4">
							<div class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-300"></div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit ullam dicta
								tenetur error, adipisci quos ea, repellendus, expedita velit doloremque dignissimos
								dolor? Assumenda deserunt numquam dolores repudiandae expedita beatae.
							</p>
						</li>
					</ul>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item class="border-b border-dashed border-zinc-300 last:border-0" value="item-4">
				<Accordion.Header>
					<Accordion.Trigger
						class="flex w-full items-center justify-between p-4 text-left transition-all hover:bg-zinc-100 [&[data-state=open]>svg]:rotate-180"
					>
						<div class="flex items-center gap-4">
							<div class="grid aspect-square size-10 shrink-0 place-items-center">
								<img
									class="size-full"
									src="https://smkwikrama.sch.id/assets2/wikrama-logo.png"
									alt="TypeScript"
								/>
							</div>
							<div>
								<h3>
									<span class="font-normal">In</span>
									<span class="font-semibold">Wikrama Vocational High School</span>
									<span class="font-normal">as a</span>
									<span class="font-semibold">Software Engineering Student</span>
								</h3>
								<p class="flex items-center gap-4 text-sm">Bogor, Indonesia / 2020 - 2023</p>
							</div>
						</div>
						<CaretDownIcon class="transition-all" />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content
					class="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
				>
					<ul
						class="list-inside list-disc space-y-2 border-t border-dashed border-zinc-300 px-8 py-4 text-sm"
					>
						<li class="flex gap-4">
							<div class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-300"></div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit ullam dicta
								tenetur error, adipisci quos ea, repellendus, expedita velit doloremque dignissimos
								dolor? Assumenda deserunt numquam dolores repudiandae expedita beatae.
							</p>
						</li>
						<li class="flex gap-4">
							<div class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-300"></div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit ullam dicta
								tenetur error, adipisci quos ea, repellendus, expedita velit doloremque dignissimos
								dolor? Assumenda deserunt numquam dolores repudiandae expedita beatae.
							</p>
						</li>
						<li class="flex gap-4">
							<div class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-300"></div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit ullam dicta
								tenetur error, adipisci quos ea, repellendus, expedita velit doloremque dignissimos
								dolor? Assumenda deserunt numquam dolores repudiandae expedita beatae.
							</p>
						</li>
					</ul>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>
</section>
<div class="inner">
	<div
		class="h-10 border-x border-dashed border-zinc-300 bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-gray-300)]/50"
	></div>
</div>
