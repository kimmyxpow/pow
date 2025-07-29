<script>
	import { attributions } from '$contents/attributions';
</script>

<main class="pt-16 lg:pt-32">
	<div class="inner">
		<div class="mx-auto lg:max-w-2xl">
			<div class="flex flex-col justify-center gap-6 lg:items-center lg:text-center">
				<span class="font-handwriting text-2xl text-zinc-400">
					Pieces of the puzzle behind this little website
				</span>
				<h1 class="text-4xl md:text-5xl">What makes this site run</h1>
				<p class="sm:text-lg">
					This site came together thanks to tools I love using, ideas I admire, and people who
					unknowingly helped shape it.
				</p>
			</div>
		</div>
	</div>
</main>
<section class="py-8 lg:py-26">
	<div class="inner">
		{#each attributions as attribution}
			<h2 class="text-2xl">{attribution.title}</h2>
			<ul class="my-4">
				{#each attribution.items as item}
					<li class="text-lg text-zinc-400">
						<a
							class="text-cyan-500 hover:underline"
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{item.name}
						</a>
						– {item.description}
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</section>
