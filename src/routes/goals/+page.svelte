<script lang="ts">
	import { goals, getProgress } from '$contents/goals';
	import { cn } from '$lib/cn';
	import Icon from '@iconify/svelte';

	const progress = getProgress();
</script>

<main class="pt-16 lg:pt-32">
	<div class="inner">
		<div class="mx-auto lg:max-w-2xl">
			<div class="flex flex-col justify-center gap-6 lg:items-center lg:text-center">
				<span class="font-handwriting text-2xl text-zinc-400">
					An evolving list of “maybe someday.”
				</span>
				<h1 class="text-4xl md:text-5xl">
					A lifelong collection of things I’d love to learn, build, feel, and become
				</h1>
			</div>
		</div>
	</div>
</main>
<section class="py-8 lg:py-26">
	<div class="inner">
		<div class="mx-auto flex max-w-xl flex-col items-center gap-2">
			<div class="flex w-full items-center justify-between">
				<span class="text-lg text-zinc-400">Overall Progress</span>
				<span
					class="bg-gradient-to-tr from-cyan-500 to-zinc-200 bg-clip-text text-lg font-semibold text-transparent"
				>
					{progress.done}/{progress.total}
				</span>
			</div>
			<div class="h-4 w-full overflow-hidden rounded-full bg-zinc-800">
				<div class="h-full w-[8%] bg-gradient-to-tr from-cyan-500 to-zinc-200"></div>
			</div>
			<span class="text-zinc-400">{progress.percentage}% complete</span>
		</div>
		<div class="mt-8">
			<div class="grid gap-4 md:grid-cols-2">
				{#each goals as goal}
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
