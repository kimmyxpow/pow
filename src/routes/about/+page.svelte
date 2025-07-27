<script lang="ts">
	import Icon from '@iconify/svelte';
	import { formatDistance } from 'date-fns';

	let { data } = $props();
</script>

<main class="pt-32">
	<div class="inner">
		<div class="mx-auto max-w-2xl">
			<div class="flex flex-col items-center justify-center gap-6 text-center">
				<span class="font-handwriting text-2xl text-zinc-400"
					>A little context, if you’re curious
				</span>
				<h1 class="text-5xl">Who I am, and why this site exists</h1>
			</div>
		</div>
	</div>
</main>

<section class="py-26">
	<div class="inner">
		<div class="grid grid-cols-2 gap-10">
			<div class="prose prose-lg max-w-none prose-zinc prose-invert">
				<h2>Short Bio</h2>
				<p>
					I’m a fullstack developer, though most of my work leans toward the frontend — partly
					because I enjoy shaping how things look and feel. Outside of building, I help run a
					programming community where I spend time connecting people and ideas.
				</p>
				<p>
					I often find myself chasing new project ideas — not all of them make it to the finish
					line, but each one teaches me something. I write to process my thoughts, read to feed
					them, and most days, I’m happiest in quiet spaces, working on something at my own pace.
				</p>
			</div>
			<div class="flex justify-center">
				<div class="relative max-w-xs">
					<div class="absolute inset-0 -rotate-4 rounded-xl bg-cyan-500"></div>
					<img
						class="relative rotate-4 rounded-xl object-cover"
						src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="pt-16 pb-26">
	<div class="inner">
		<div class="flex flex-col gap-12">
			<h2 class="text-center text-3xl">Things I’ve Been Part Of</h2>
			<div class="grid grid-cols-2 gap-px bg-radial from-cyan-500 to-transparent to-90% p-px">
				<div class="flex flex-col items-start bg-black px-8 py-8">
					<img class="h-10" src="https://www.peepl.tech/images/logo-peepl.png" alt="Peepl Logo" />
					<h3 class="mt-4 mb-2 text-xl">Full-Stack Developer</h3>
					<p class="text-zinc-400">
						I design and build user-facing features, mostly focusing on clean UI and accessible
						interactions. Still learning new things daily.
					</p>
					<div class="mt-auto flex w-full items-center justify-between pt-4">
						<span class="text-zinc-200">Peepl</span>
						<span class="text-zinc-400">May 2025 - Present</span>
					</div>
				</div>
				<div class="flex flex-col items-start bg-black px-8 py-8">
					<img
						class="h-10"
						src="https://zicare.id/upload/website/logo_header.svg"
						alt="Zi.Care Logo"
					/>
					<h3 class="mt-4 mb-2 text-xl">Full-Stack Developer</h3>
					<p class="text-zinc-400">
						Designed and built internal systems for hospitals — from back-office tools to full info
						systems — using PHP, Phalcon, SvelteKit, and PostgreSQL.
					</p>
					<div class="mt-auto flex w-full items-center justify-between pt-4">
						<span class="text-zinc-200">Zi.Care</span>
						<span class="text-zinc-400">Aug 2023 - April 2025</span>
					</div>
				</div>
				<div class="flex flex-col items-start bg-black px-8 py-8">
					<img
						class="h-10"
						src="https://www.lskk.co.id/wp-content/uploads/2024/06/Artboard-5@300x-e1718107755849.png"
						alt="Zi.Care Logo"
					/>
					<h3 class="mt-4 mb-2 text-xl">Full-Stack Developer Intern</h3>
					<p class="text-zinc-400">
						Built school-specific web apps — including RFID-based attendance, meeting management,
						and a custom site — using Next.js, Tailwind, Express, and MongoDB. Also taught sessions
						on Flutter and IoT as a guest instructor.
					</p>
					<div class="mt-auto flex w-full items-center justify-between pt-4">
						<span class="text-zinc-200">PT LSKK</span>
						<span class="text-zinc-400">Jul 2022 - Dec 2022</span>
					</div>
				</div>
				<div class="flex flex-col items-start bg-black px-8 py-8">
					<img class="h-10" src="https://pow.kim/brand/bellshade.png" alt="Bellshade Logo" />
					<h3 class="mt-4 mb-2 text-xl">Open-Source Maintainer</h3>
					<p class="text-zinc-400">
						Created learning materials and website templates for HTML & CSS. Built Bellshade CSS
						framework with SCSS and helped review community submissions. Also contributed to the
						OpenSeries platform.
					</p>
					<div class="mt-auto flex w-full items-center justify-between pt-4">
						<span class="text-zinc-200">Bellshade</span>
						<span class="text-zinc-400">Oct 2021 - Present</span>
					</div>
				</div>
				<div class="flex flex-col items-start bg-black px-8 py-8">
					<img class="h-10" src="https://pow.kim/brand/wpu.png" alt="WPU Logo" />
					<h3 class="mt-4 mb-2 text-xl">Community Manager</h3>
					<p class="text-zinc-400">
						Helped manage a 50K+ member dev community — answering programming questions, maintaining
						a supportive vibe, and hosting occasional webinars to share what I know (and learn in
						return).
					</p>
					<div class="mt-auto flex w-full items-center justify-between pt-4">
						<span class="text-zinc-200">WPU Community</span>
						<span class="text-zinc-400">Oct 2021 - Present</span>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center bg-black p-8">
					<span
						class="bg-gradient-to-tr from-cyan-500 to-zinc-200 bg-clip-text text-center text-3xl text-transparent"
					>
						Another story in progress
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

{#if data.commits.length > 0}
	<section class="pb-26">
		<div class="inner">
			<div class="flex flex-col gap-12">
				<h2 class="text-3xl">Recently Touched</h2>
				<div class="relative grid">
					{#each data.commits as commit (commit.sha)}
						<div class="relative pl-10 not-last:pb-4">
							<div
								class="absolute top-6 -bottom-2 left-2.5 w-1 bg-gradient-to-b from-zinc-800 to-cyan-500"
							></div>
							<div
								class="absolute top-1 left-0 size-6 rounded-full bg-gradient-to-b from-cyan-500 to-zinc-800"
							></div>
							<div class="mb-1 flex items-center justify-between">
								<span class="text-sm font-bold text-zinc-400">sha: {commit.sha}</span>
								<span class="text-sm text-zinc-200"
									>Changed by: <span class="font-bold">{commit.commit.committer.name}</span></span
								>
							</div>
							<div class="flex items-center justify-between">
								<span class="text-xl">
									<span class="mr-1">{commit.commit.message.slice(0, 2)}</span>
									<span
										class="bg-gradient-to-tr from-cyan-500 to-zinc-200 bg-clip-text text-transparent"
									>
										{commit.commit.message.slice(2)}
									</span>
								</span>
								<a
									href={commit.html_url}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 text-zinc-400 transition-all hover:text-zinc-200 hover:underline"
								>
									See Changes
									<Icon icon="solar:arrow-right-up-linear" class="size-4" />
								</a>
							</div>
							<span class="text-sm text-zinc-500">
								{formatDistance(commit.commit.author.date, new Date(), {
									addSuffix: true
								})}
							</span>
						</div>
					{/each}
					<div
						class="pointer-events-none absolute -bottom-2 h-[80%] w-full bg-gradient-to-b from-transparent to-zinc-950"
					></div>
				</div>
				<a
					href="https://github.com/kimmyxpow/bynoval/commits/main"
					target="_blank"
					rel="noopener noreferrer"
					class="group/button inline-flex h-14 items-center justify-center gap-2 self-center rounded-xl border border-zinc-700 px-4 text-white transition-all hover:bg-zinc-900 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
				>
					See All
					<div
						class="grid size-8 place-items-center rounded-lg border border-zinc-700 group-hover/button:bg-white group-hover/button:text-zinc-800"
					>
						<Icon icon="solar:arrow-right-up-linear" class="size-4" />
					</div>
				</a>
			</div>
		</div>
	</section>
{/if}
