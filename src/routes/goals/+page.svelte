<script lang="ts">
	import { cn } from '$lib/cn';
	import Icon from '@iconify/svelte';

	const lifeGoals = [
		{ goal: 'Build a warm and inclusive creative community', achieved: false },
		{ goal: 'Speak at a national-level webinar or conference', achieved: false },
		{ goal: 'Make genuine international friendships', achieved: true },
		{ goal: 'Learn to speak 3 foreign languages fluently', achieved: false },
		{ goal: 'Write and publish a personal memoir', achieved: false },
		{ goal: 'Launch my own podcast about personal growth and creativity', achieved: false },
		{ goal: 'Travel solo to at least 10 countries', achieved: false },
		{ goal: 'Design and launch a personal brand or product', achieved: false },
		{ goal: 'Teach something meaningful to 1,000+ people', achieved: false },
		{ goal: 'Run a workshop that inspires someone’s career or life direction', achieved: false },
		{ goal: 'Master photography and build a visual story portfolio', achieved: false },
		{ goal: 'Start a passion project that turns into a movement', achieved: false },
		{ goal: 'Learn to play a musical instrument well', achieved: false },
		{ goal: 'Host a retreat or camp for creatives and changemakers', achieved: false },
		{ goal: 'Meditate consistently for mental clarity and peace', achieved: false },
		{ goal: 'Be financially free through meaningful work', achieved: false },
		{ goal: 'Mentor someone younger on their creative or life journey', achieved: false },
		{ goal: 'Co-create something impactful with strangers', achieved: false },
		{ goal: 'Speak on stage in another country', achieved: false },
		{ goal: 'Read 500+ books that shape who I become', achieved: false },
		{ goal: 'Create an online course that helps people grow', achieved: false },
		{ goal: 'Master storytelling in writing, visuals, and voice', achieved: false },
		{ goal: 'Build an eco-conscious or sustainable lifestyle', achieved: false },
		{ goal: 'Experience northern lights and the midnight sun', achieved: false },
		{ goal: 'Participate in a humanitarian project abroad', achieved: false },
		{ goal: 'Write a letter to my future self every 5 years', achieved: false },
		{ goal: 'Collaborate with artists from different disciplines', achieved: false },
		{ goal: 'Build a small cabin or creative space in nature', achieved: false },
		{ goal: 'Host a virtual summit with global speakers', achieved: false },
		{ goal: 'Be part of a startup that creates real change', achieved: false },
		{ goal: 'Develop an app that solves a niche problem', achieved: false },
		{ goal: 'Learn public speaking and storytelling on stage', achieved: false },
		{ goal: 'Paint and exhibit my own artworks', achieved: false },
		{ goal: 'Become known for integrity, kindness, and creativity', achieved: false },
		{ goal: 'Help my family experience the world', achieved: false },
		{ goal: 'Start a foundation or scholarship for underprivileged youth', achieved: false },
		{ goal: 'Explore a spiritual tradition deeply and respectfully', achieved: false },
		{ goal: 'Make a documentary or short film', achieved: false },
		{ goal: 'Be interviewed by someone I admire', achieved: false },
		{ goal: 'Watch a sunrise from a mountaintop', achieved: false },
		{ goal: 'Celebrate life with a community I helped grow', achieved: false },
		{ goal: 'Write a children’s book about imagination and courage', achieved: false },
		{ goal: 'Send 1,000 postcards to strangers with kind messages', achieved: false },
		{ goal: 'Learn to cook signature dishes from 10 cultures', achieved: false },
		{ goal: 'Live and work in a different continent for a year', achieved: false },
		{ goal: 'Be at peace with uncertainty and failure', achieved: false },
		{ goal: 'Design my own personal rituals and traditions', achieved: false },
		{ goal: 'Take a sabbatical to reset and rediscover', achieved: false },
		{ goal: 'Experience deep, slow, intentional living', achieved: false },
		{ goal: 'Live a story worth telling — and share it generously', achieved: false }
	];
</script>

<main class="pt-32">
	<div class="inner">
		<div class="mx-auto max-w-2xl">
			<div class="flex flex-col items-center justify-center gap-6 text-center">
				<span class="font-handwriting text-2xl text-zinc-400">
					An evolving list of “maybe someday.”
				</span>
				<h1 class="text-5xl">
					A lifelong collection of things I’d love to learn, build, feel, and become
				</h1>
			</div>
		</div>
	</div>
</main>
<section class="py-26">
	<div class="inner">
		<div class="mx-auto flex max-w-xl flex-col items-center gap-2">
			<div class="flex w-full items-center justify-between">
				<span class="text-lg text-zinc-400">Overall Progress</span>
				<span
					class="bg-gradient-to-tr from-cyan-500 to-zinc-200 bg-clip-text text-lg font-semibold text-transparent"
				>
					4/48
				</span>
			</div>
			<div class="h-4 w-full overflow-hidden rounded-full bg-zinc-800">
				<div class="h-full w-[8%] bg-gradient-to-tr from-cyan-500 to-zinc-200"></div>
			</div>
			<span class="text-zinc-400">8% complete</span>
		</div>
		<div class="mt-8">
			<div class="grid grid-cols-2 gap-4">
				{#each lifeGoals as goal}
					<div
						class={cn(
							'flex items-center gap-2 rounded-xl border border-zinc-600 p-4',
							goal.achieved && 'border-emerald-600'
						)}
					>
						<div
							class={cn(
								'grid size-6 shrink-0 place-items-center rounded-lg border border-zinc-600 text-white',
								goal.achieved && 'border-emerald-600 bg-emerald-600'
							)}
						>
							{#if goal.achieved}
								<Icon icon="tabler:check" />
							{/if}
						</div>
						<span class="text-zinc-400">{goal.goal}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
