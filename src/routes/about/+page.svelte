<script lang="ts">
	import Seo from '$components/seo.svelte';
	import { origin } from '$lib/url';
	import Icon from '@iconify/svelte';
	import { formatDistance } from 'date-fns';

	let { data } = $props();

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Abi Noval Fauzi (Pow)',
		url: origin('/about'),
		image: origin('/images/icon.png'),
		sameAs: [
			'https://github.com/kimmyxpow',
			'https://twitter.com/kimmyxpow',
			'https://instagram.com/kimmyxpow',
			'https://linkedin.com/in/abinovalfauzi'
		],
		jobTitle: 'Fullstack Developer',
		description:
			'A fullstack developer who loves design, writing, and helping developer communities grow. Often working on side projects and open-source.',
		knowsAbout: [
			'Web Development',
			'Frontend Engineering',
			'JavaScript',
			'Svelte',
			'React.js',
			'Tailwind CSS',
			'CSS',
			'Community Building'
		],
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: 'Wikrama Vocational High School'
		}
	};
</script>

<Seo
	title="About"
	{schema}
	description="I’m Pow, a frontend-leaning fullstack developer and community manager who enjoys writing, building side projects, and learning out loud."
	url="/about"
	image="/images/banner.png"
/>

<main class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 px-8 py-8 lg:py-28">
		<div
			class="mx-auto flex flex-col justify-center gap-2 lg:max-w-2xl lg:items-center lg:gap-6 lg:text-center"
		>
			<span class="font-handwriting text-2xl text-zinc-600">
				A little context, if you’re curious
			</span>
			<h1 class="text-4xl text-balance md:text-5xl">Who I am, and why this site exists</h1>
		</div>
	</div>
</main>

<section class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300">
		<div class="flex flex-col items-center sm:flex-row">
			<div class="prose max-w-none p-8 prose-zinc sm:prose-lg prose-headings:font-normal">
				<h2>Short Bio</h2>
				<p>
					Hey, I’m Pow — short for Abi Noval Fauzi. I’m a self-taught software engineer who got into
					tech not through a degree or bootcamp, but through a deep love for creating things. I
					found my groove in frontend development, where design meets logic, and where I get to
					bring ideas to life in a way that looks and feels good. There’s something special about
					shaping what people see and interact with.
				</p>
				<p>
					Outside of code, I’m all about stories. I write, I read, and I dream a lot. I’ve even
					published a book on mindfulness, which reflects my love for slowing down and being
					present. But my heart also belongs to wild imaginations — sci-fi and fantasy worlds where
					anything is possible. That’s where I go when I want to feel free. Thanks for stopping by!
				</p>
			</div>
			<div class="self-stretch">
				<img
					class="size-full object-cover"
					src="https://i.pinimg.com/1200x/a1/e1/35/a1e135b52f2720c25fbab6f1e1e93e7c.jpg"
					alt=""
				/>
			</div>
		</div>
	</div>
</section>

<section class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300">
		<h2 class="p-8 text-center text-3xl">Things I’ve Been Part Of</h2>
		<div class="-mr-[0.5px] -mb-[0.5px] grid sm:grid-cols-2">
			<div
				class="-mx-[0.5px] -my-[0.5px] flex flex-col items-start border border-zinc-300 bg-beige p-8"
			>
				<img class="h-10" src="https://www.peepl.tech/images/logo-peepl.png" alt="Peepl Logo" />
				<h3 class="my-4 text-xl">Full-Stack Developer</h3>
				<p>
					At Peepl, I worked on building an executive education LMS platform for state-owned
					enterprises. One of the key features I developed was an AI-powered assistant integrated
					into the entire ecosystem—covering assessments, personalized reports, and a fully adaptive
					learning experience. I also set up code quality standards across projects to enforce
					consistent commits and maintain a clean codebase.
				</p>
				<div class="mt-auto flex w-full items-center justify-between pt-4">
					<span class="text-dark">Peepl</span>
					<span class="text-zinc-600">May 2025 - Present</span>
				</div>
			</div>
			<div
				class="-mx-[0.5px] -my-[0.5px] flex flex-col items-start border border-zinc-300 bg-beige p-8"
			>
				<img
					class="h-10"
					src="https://zicare.id/upload/website/logo_header.svg"
					alt="Zi.Care Logo"
				/>
				<h3 class="my-4 text-xl">Full-Stack Developer</h3>
				<p>
					During my time at Zicare, I helped develop a backoffice system tailored for hospitals. I
					contributed to a full migration of their database infrastructure from MySQL to PostgreSQL
					and worked on creating an integrated system to support public health centers (puskesmas)
					in streamlining their operations.
				</p>
				<div class="mt-auto flex w-full items-center justify-between pt-4">
					<span class="text-dark">Zi.Care</span>
					<span class="text-zinc-600">Aug 2023 - April 2025</span>
				</div>
			</div>
			<div
				class="-mx-[0.5px] -my-[0.5px] flex flex-col items-start border border-zinc-300 bg-beige p-8"
			>
				<img
					class="h-10"
					src="https://www.lskk.co.id/wp-content/uploads/2024/06/Artboard-5@300x-e1718107755849.png"
					alt="Zi.Care Logo"
				/>
				<h3 class="my-4 text-xl">Full-Stack Developer Intern</h3>
				<p>
					At LSKK, I built a customizable school website where users could tweak the visual style
					easily. I also developed an RFID-based attendance system and a QR-powered event management
					platform for tracking participant entry and exit. Besides coding, I had the chance to
					assist during company-led industry classes in schools, sharing knowledge and supporting
					students directly.
				</p>
				<div class="mt-auto flex w-full items-center justify-between pt-4">
					<span class="text-dark">PT LSKK</span>
					<span class="text-zinc-600">Jul 2022 - Dec 2022</span>
				</div>
			</div>
			<div
				class="-mx-[0.5px] -my-[0.5px] flex flex-col items-start border border-zinc-300 bg-beige p-8"
			>
				<img class="h-10" src="https://pow.kim/brand/bellshade.png" alt="Bellshade Logo" />
				<h3 class="my-4 text-xl">Open-Source Maintainer</h3>
				<p>
					At Bellshade, I created learning resources and website templates to help beginners get
					comfortable with HTML and CSS. I also built the Bellshade CSS framework using SCSS, aiming
					to provide a clean and reusable foundation for frontend projects. On top of that, I
					actively reviewed community contributions and contributed to the OpenSeries platform,
					supporting open-source learning along the way.
				</p>
				<div class="mt-auto flex w-full items-center justify-between pt-4">
					<span class="text-dark">Bellshade</span>
					<span class="text-zinc-600">Oct 2021 - Present</span>
				</div>
			</div>
			<div
				class="-mx-[0.5px] -my-[0.5px] flex flex-col items-start border border-zinc-300 bg-beige p-8"
			>
				<img class="h-10" src="https://pow.kim/brand/wpu.png" alt="WPU Logo" />
				<h3 class="my-4 text-xl">Community Manager</h3>
				<p>
					As part of the WPU community, I helped moderate and support over 50,000 developers by
					answering questions, keeping the space positive, and occasionally hosting webinars to
					share insights. It was a great way to give back, grow alongside others, and stay connected
					with the wider dev world.
				</p>
				<div class="mt-auto flex w-full items-center justify-between pt-4">
					<span class="text-dark">WPU Community</span>
					<span class="text-zinc-600">Oct 2021 - Present</span>
				</div>
			</div>
			<div
				class="-mx-[0.5px] -my-[0.5px] flex flex-col items-center justify-center border border-zinc-300 bg-beige p-8"
			>
				<span class="text-center text-3xl text-primary"> Another story in progress </span>
			</div>
		</div>
	</div>
</section>

{#if data.commits.length > 0}
	<section class="border-b border-zinc-300">
		<div class="inner border-x border-zinc-300">
			<h2 class="p-8 text-center text-3xl">Recently Touched</h2>
			<div class="relative grid border-y border-zinc-300 p-8">
				{#each data.commits as commit (commit.sha)}
					<div class="relative pl-10 not-last:pb-4">
						<div class="absolute top-6 -bottom-2 left-2.5 w-1 bg-primary"></div>
						<div class="absolute top-1 left-0 size-6 rounded-full bg-primary"></div>
						<div
							class="mt-1.5 mb-4 flex flex-col-reverse justify-between sm:mb-1 sm:flex-row sm:items-center"
						>
							<span class="text-xs break-all text-zinc-600 sm:text-sm">sha: {commit.sha}</span>
							<span class="text-xs text-zinc-600 sm:text-sm">
								Changed by: <span class="text-primary">{commit.commit.committer.name}</span>
							</span>
						</div>
						<div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
							<span class="text-lg sm:text-xl">
								<span class="mr-1">{commit.commit.message.slice(0, 2)}</span>
								<span class="text-primary">
									{commit.commit.message.slice(2)}
								</span>
							</span>
							<a
								href={commit.html_url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2 text-zinc-600 transition-all hover:text-dark hover:underline"
							>
								See Changes
								<Icon icon="solar:arrow-right-up-linear" class="size-4" />
							</a>
						</div>
						<span class="mt-4 block text-sm text-zinc-600 sm:mt-1">
							{formatDistance(commit.commit.author.date, new Date(), {
								addSuffix: true
							})}
						</span>
					</div>
				{/each}
			</div>
			<a
				href="https://github.com/kimmyxpow/bynoval/commits/main"
				target="_blank"
				rel="noopener noreferrer"
				class="group relative flex w-full items-center justify-between p-8 text-xl text-zinc-600 transition-all duration-300 hover:text-white"
			>
				<div
					class="absolute inset-0 -z-10 w-0 bg-primary transition-all duration-300 group-hover:w-full"
				></div>
				See All
				<Icon
					class="text-3xl transition-all duration-300 group-hover:-rotate-45"
					icon="guidance:left-arrow"
				/>
			</a>
		</div>
	</section>
{/if}

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>
