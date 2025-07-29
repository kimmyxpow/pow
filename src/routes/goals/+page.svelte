<script lang="ts">
	import { goals, getProgress } from '$contents/goals';
	import { cn } from '$lib/cn';
	import Icon from '@iconify/svelte';

	const progress = getProgress();
</script>

<main class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28">
		<div class="mx-auto lg:max-w-2xl">
			<div class="flex flex-col justify-center gap-6 lg:items-center lg:text-center">
				<span class="font-handwriting text-2xl text-zinc-500">
					An evolving list of “maybe someday.”
				</span>
				<h1 class="text-4xl text-balance md:text-5xl">
					A lifelong collection of things I’d love to feel
				</h1>
			</div>
		</div>
	</div>
</main>
<section class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300">
		<div class="flex w-full items-center justify-between px-8 py-4">
			<span class="text-zinc-500">Overall Progress</span>
			<span class="text-zinc-500">
				{progress.done}/{progress.total} ({progress.percentage}%)
			</span>
		</div>
		<div class="h-4 w-full overflow-hidden border-t border-zinc-300 bg-white/30">
			<div class="h-full bg-primary" style="width: {progress.percentage}%;"></div>
		</div>
	</div>
</section>
<section class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300">
		<div class="grid md:grid-cols-2">
			{#each goals as goal}
				<div
					class="-mx-[0.5px] -mt-[0.5px] -mb-px flex items-center gap-2 border border-zinc-300 bg-beige"
				>
					<div
						class={cn(
							'grid aspect-square h-full shrink-0 place-items-center border-r border-zinc-300 text-zinc-600',
							goal.achieved && 'bg-emerald-600 text-white'
						)}
					>
						<Icon icon={goal.achieved ? 'tabler:check' : 'tabler:x'} />
					</div>
					<span class="p-2 text-zinc-400">{goal.goal}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>
