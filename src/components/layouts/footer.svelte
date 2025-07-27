<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer>
	<div class="inner rounded-t-2xl bg-zinc-900 p-12">
		<div class="grid grid-cols-6 gap-8">
			<div class="col-span-3 flex flex-col gap-4">
				<span class="text-xl text-zinc-200">Abi Noval Fauzi</span>
				<p>Thanks for scrolling this far. You’re rare.</p>
				<div class="flex gap-2">
					<a
						class="text-zinc-400 transition-all hover:text-zinc-300"
						href="asd"
						aria-label="E-Mail"
					>
						<Icon class="size-6" icon="iconoir:at-sign" />
					</a>
					<a
						class="text-zinc-400 transition-all hover:text-zinc-300"
						href="asd"
						aria-label="Instagram"
					>
						<Icon class="size-6" icon="iconoir:instagram" />
					</a>
					<a
						class="text-zinc-400 transition-all hover:text-zinc-300"
						href="asd"
						aria-label="Github"
					>
						<Icon class="size-6" icon="iconoir:github" />
					</a>
					<a
						class="text-zinc-400 transition-all hover:text-zinc-300"
						href="asd"
						aria-label="X/Twitter"
					>
						<Icon class="size-6" icon="iconoir:x" />
					</a>
					<a
						class="text-zinc-400 transition-all hover:text-zinc-300"
						href="asd"
						aria-label="LinkedIn"
					>
						<Icon class="size-6" icon="iconoir:linkedin" />
					</a>
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<span class="text-zinc-300">Explore</span>
				<nav class="flex flex-col gap-1">
					<a class="text-zinc-400 hover:text-zinc-300" href="/">Home</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="/projects">Projects</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="/articles">Articles</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="/snippets">Snippets</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="/guest-book">Guestbook</a>
				</nav>
			</div>
			<div class="flex flex-col gap-4">
				<span class="text-zinc-300">Personal</span>
				<nav class="flex flex-col gap-1">
					<a class="text-zinc-400 hover:text-zinc-300" href="/about">About</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="/goals">Goals</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="/contact">Contact Me</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="/community">Community</a>
				</nav>
			</div>
			<div class="flex flex-col gap-4">
				<span class="text-zinc-300">Meta</span>
				<nav class="flex flex-col gap-1">
					<a class="text-zinc-400 hover:text-zinc-300" href="/attribution">Attribution</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="/sitemap.xml">Sitemap</a>
					<a class="text-zinc-400 hover:text-zinc-300" href="/visits">Visits</a>
				</nav>
			</div>
		</div>
		<p class="mx-auto mt-12 max-w-max rounded-full bg-zinc-950 px-6 py-2 text-sm">
			© 2025 Abi Noval Fauzi. All rights reserved.
		</p>
	</div>
</footer>
