<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer>
	<div class="inner border-x border-zinc-300">
		<div class="grid grid-cols-2 gap-8 p-8 sm:grid-cols-3 md:grid-cols-6">
			<div class="col-span-2 flex flex-col gap-4 sm:col-span-3">
				<span class="font-serif text-xl text-dark">Pow</span>
				<p>Thanks for scrolling this far. You’re rare.</p>
				<div class="flex gap-2">
					<a
						class="text-zinc-500 transition-all hover:text-dark"
						href="mailto:abinovalf@gmail.com"
						aria-label="E-Mail"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon class="size-6" icon="iconoir:at-sign" />
					</a>
					<a
						class="text-zinc-500 transition-all hover:text-dark"
						href="https://www.instagram.com/kimmyxpow/"
						aria-label="Instagram"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon class="size-6" icon="iconoir:instagram" />
					</a>
					<a
						class="text-zinc-500 transition-all hover:text-dark"
						href="https://github.com/kimmyxpow"
						aria-label="Github"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon class="size-6" icon="iconoir:github" />
					</a>
					<a
						class="text-zinc-500 transition-all hover:text-dark"
						href="https://x.com/kimmyxpow"
						aria-label="X/Twitter"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon class="size-6" icon="iconoir:x" />
					</a>
					<a
						class="text-zinc-500 transition-all hover:text-dark"
						href="https://www.linkedin.com/in/abinovalfauzi"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon class="size-6" icon="iconoir:linkedin" />
					</a>
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<span class="font-serif text-xl text-zinc-700">Explore</span>
				<nav class="flex flex-col gap-1">
					<a class="text-zinc-500 hover:text-dark" href="/">Home</a>
					<a class="text-zinc-500 hover:text-dark" href="/projects">Projects</a>
					<a class="text-zinc-500 hover:text-dark" href="/articles">Articles</a>
					<a class="text-zinc-500 hover:text-dark" href="/snippets">Snippets</a>
					<a class="text-zinc-500 hover:text-dark" href="/guest-book">Guestbook</a>
				</nav>
			</div>
			<div class="flex flex-col gap-4">
				<span class="font-serif text-xl text-zinc-700">Personal</span>
				<nav class="flex flex-col gap-1">
					<a class="text-zinc-500 hover:text-dark" href="/about">About</a>
					<a class="text-zinc-500 hover:text-dark" href="/goals">Goals</a>
					<a class="text-zinc-500 hover:text-dark" href="/contact">Contact Me</a>
					<a
						class="text-zinc-500 hover:text-dark"
						href="https://discord.gg/ExCvJtVTu6"
						target="_blank"
						rel="noopener noreferrer"
					>
						Community
					</a>
				</nav>
			</div>
			<div class="flex flex-col gap-4">
				<span class="font-serif text-xl text-zinc-700">Meta</span>
				<nav class="flex flex-col gap-1">
					<a class="text-zinc-500 hover:text-dark" href="/attributions">Attribution</a>
					<a class="text-zinc-500 hover:text-dark" href="/sitemap.xml">Sitemap</a>
					<a class="text-zinc-500 hover:text-dark" href="/visits">Visits</a>
				</nav>
			</div>
		</div>
		<p class="border-t border-zinc-300 px-8 py-4 text-center text-sm">
			© 2025 Abi Noval Fauzi. All rights reserved.
		</p>
	</div>
</footer>
