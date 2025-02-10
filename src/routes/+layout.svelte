<script lang="ts">
	import '../app.css';
	import Header from '$components/Header.svelte';
	import Aside from '$components/Aside.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="author" content="Pow" />

	<title>Pow's Software Development Odyssey — Crafting Digital Experiences</title>
	<meta name="title" content="Pow's Software Development Odyssey — Crafting Digital Experiences" />
	<meta
		name="description"
		content="Explore the web development journey of Pow, a dedicated software engineer. Delve into a showcase of innovative web projects, expertise in coding, and a passion for crafting seamless online experiences. Discover the artistry of web development through Pow's portfolio."
	/>
	<meta
		name="keywords"
		content="web development, software engineer, coding expertise, digital experiences, innovative web projects, portfolio showcase, front-end development, back-end development, responsive design, programming proficiency, Noval's projects, interactive websites, user-centric design"
	/>

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.pow.kim/" />
	<meta property="og:title" content="Pow's Software Development Odyssey — Crafting Digital Experiences" />
	<meta
		property="og:description"
		content="Explore the web development journey of Pow, a dedicated software engineer. Delve into a showcase of innovative web projects, expertise in coding, and a passion for crafting seamless online experiences. Discover the artistry of web development through Pow's portfolio."
	/>
	<meta property="og:image" content="https://www.pow.kim/meta-tags.png" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.pow.kim/" />
	<meta property="twitter:title" content="Pow's Software Development Odyssey — Crafting Digital Experiences" />
	<meta
		property="twitter:description"
		content="Explore the web development journey of Pow, a dedicated software engineer. Delve into a showcase of innovative web projects, expertise in coding, and a passion for crafting seamless online experiences. Discover the artistry of web development through Pow's portfolio."
	/>
	<meta property="twitter:image" content="https://www.pow.kim/meta-tags.png" />
</svelte:head>

<div class="flex h-dvh max-h-dvh min-h-dvh flex-col overflow-hidden bg-black">
	<Header />
	<div class="relative z-0 flex h-full py-16">
		<Aside />
		<div class="prose prose-invert w-full max-w-none prose-img:rounded-xl prose-img:border prose-img:border-gray-700">
			<slot />
		</div>
	</div>
	<Footer />
</div>
