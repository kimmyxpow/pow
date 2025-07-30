<script>
	import { attributions } from '$contents/attributions';
</script>

<main class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 px-8 py-8 lg:py-28">
		<div
			class="mx-auto flex flex-col justify-center gap-2 lg:max-w-2xl lg:items-center lg:gap-6 lg:text-center"
		>
			<span class="font-handwriting text-2xl text-zinc-500">
				Pieces of the puzzle behind this little website
			</span>
			<h1 class="text-4xl text-balance md:text-5xl">What makes this site run</h1>
			<p class="text-balance sm:text-lg">This site came together thanks to tools I love using.</p>
		</div>
	</div>
</main>

<section class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300">
		<div class="p-8">
			{#each attributions as attribution}
				<h2 class="text-2xl">{attribution.title}</h2>
				<ul class="my-4">
					{#each attribution.items as item}
						<li class="text-lg text-zinc-500">
							<a
								class="text-primary hover:underline"
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
	</div>
</section>

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>
