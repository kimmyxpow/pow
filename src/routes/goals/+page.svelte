<script lang="ts">
	import { goals, getProgress } from '$contents/goals';
	import { cn } from '$lib/cn';
	import Icon from '@iconify/svelte';

	const progress = getProgress();
</script>

<main class="border-b border-[#F0E4D3]">
	<div class="inner border-x border-[#F0E4D3] px-8 py-8 lg:py-28">
		<div
			class="mx-auto flex flex-col justify-center gap-2 lg:max-w-2xl lg:items-center lg:gap-6 lg:text-center"
		>
			<span class="font-handwriting text-2xl text-zinc-500">
				An evolving list of “maybe someday.”
			</span>
			<h1 class="text-4xl text-balance md:text-5xl">
				A lifelong collection of things I’d love to feel
			</h1>
		</div>
	</div>
</main>

<section class="border-b border-[#F0E4D3]">
	<div class="inner border-x border-[#F0E4D3]">
		<div class="flex w-full items-center justify-between px-8 py-4">
			<span class="text-zinc-500">Overall Progress</span>
			<span class="text-zinc-500">
				{progress.done}/{progress.total} ({progress.percentage}%)
			</span>
		</div>
		<div class="h-4 w-full overflow-hidden border-t border-[#F0E4D3] bg-white/30">
			<div class="h-full bg-primary" style="width: {progress.percentage}%;"></div>
		</div>
	</div>
</section>

<section class="border-b border-[#F0E4D3]">
	<div class="inner border-x border-[#F0E4D3]">
		<div class="grid md:grid-cols-2">
			{#each goals as goal}
				<div class="-m-px flex h-12 items-center gap-2 border border-[#F0E4D3] bg-beige">
					<div
						class={cn(
							'grid aspect-square h-full shrink-0 place-items-center border-r border-[#F0E4D3] text-zinc-600',
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

<div class="border-b border-[#F0E4D3]">
	<div class="inner border-x border-[#F0E4D3] py-28"></div>
</div>
