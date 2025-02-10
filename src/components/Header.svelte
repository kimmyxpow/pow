<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { setContext } from 'svelte';

	let marquee: HTMLDivElement;
	let marqueeContent: HTMLDivElement;

	onMount(() => {
		const marqueeContentClone = marqueeContent.cloneNode(true);

		marquee.append(marqueeContentClone);

		let tween: gsap.core.Tween;

		const playMarquee = () => {
			let progress = tween ? tween.progress() : 0;

			tween && tween.progress(0).kill();

			const width = marqueeContent.offsetWidth;

			const gap = parseInt(getComputedStyle(marqueeContent).getPropertyValue('gap'), 10);

			const distanceToTranslate = -1 * (gap + width);

			tween = gsap.fromTo(marquee.children, { x: 0 }, { x: distanceToTranslate, duration: 20, ease: 'none', repeat: -1 });

			tween.progress(progress);
		};

		playMarquee();

		function debounce(func: () => void) {
			let timer: number;

			return function (e: Event) {
				if (timer) clearTimeout(timer);
				timer = setTimeout(() => func(), 500, e);
			};
		}

		window.addEventListener('resize', debounce(playMarquee));
	});
</script>

<div class="fixed inset-x-0 top-0 z-10 flex h-16 items-center justify-center border-b-2 border-gray-800 bg-black">
	<a href="/">
		<span class="sr-only">Home</span>
		<svg class="ml-8 h-4 shrink-0 sm:h-6" viewBox="0 0 573 197" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="21" y="73" width="47" height="124" class="fill-white" />
			<path
				d="M99.8 151.2C88.4667 151.2 77.9333 149.4 68.2 145.8C58.6 142.2 50.2667 137.133 43.2 130.6C36.1333 123.933 30.6 116.133 26.6 107.2C22.7333 98.2667 20.8 88.5333 20.8 78C20.8 67.3333 22.7333 57.6 26.6 48.8C30.6 39.8667 36.1333 32.1333 43.2 25.6C50.2667 18.9333 58.6 13.8 68.2 10.2C77.9333 6.60001 88.4667 4.80001 99.8 4.80001C111.267 4.80001 121.8 6.60001 131.4 10.2C141 13.8 149.333 18.9333 156.4 25.6C163.467 32.1333 168.933 39.8667 172.8 48.8C176.8 57.6 178.8 67.3333 178.8 78C178.8 88.5333 176.8 98.2667 172.8 107.2C168.933 116.133 163.467 123.933 156.4 130.6C149.333 137.133 141 142.2 131.4 145.8C121.8 149.4 111.267 151.2 99.8 151.2ZM99.8 113C104.2 113 108.267 112.2 112 110.6C115.867 109 119.2 106.733 122 103.8C124.933 100.733 127.2 97.0667 128.8 92.8C130.4 88.4 131.2 83.4667 131.2 78C131.2 72.5333 130.4 67.6667 128.8 63.4C127.2 59 124.933 55.3333 122 52.4C119.2 49.3333 115.867 47 112 45.4C108.267 43.8 104.2 43 99.8 43C95.4 43 91.2667 43.8 87.4 45.4C83.6667 47 80.3333 49.3333 77.4 52.4C74.6 55.3333 72.4 59 70.8 63.4C69.2 67.6667 68.4 72.5333 68.4 78C68.4 83.4667 69.2 88.4 70.8 92.8C72.4 97.0667 74.6 100.733 77.4 103.8C80.3333 106.733 83.6667 109 87.4 110.6C91.2667 112.2 95.4 113 99.8 113Z"
				class="fill-white"
			/>
			<path d="M48 140L0 0H4.4L51.2 136.8H49L97 0H101L149 136.8H147L193.8 0H198L150 140H146L98.6 4.4H99.4L52 140H48Z" class="fill-black" />
			<path
				d="M258.904 153.376C243.241 153.376 229.339 150.208 217.196 143.873C205.053 137.537 195.462 128.826 188.422 117.739C181.559 106.476 178.127 93.6294 178.127 79.1988C178.127 64.7681 181.559 52.0093 188.422 40.9224C195.462 29.8354 205.053 21.2122 217.196 15.0528C229.339 8.7174 243.241 5.5497 258.904 5.5497C274.566 5.5497 288.469 8.7174 300.612 15.0528C312.931 21.2122 322.522 29.8354 329.385 40.9224C336.248 52.0093 339.68 64.7681 339.68 79.1988C339.68 93.6294 336.248 106.476 329.385 117.739C322.522 128.826 312.931 137.537 300.612 143.873C288.469 150.208 274.566 153.376 258.904 153.376ZM258.904 113.516C264.711 113.516 269.815 112.196 274.214 109.556C278.79 106.916 282.398 103.045 285.037 97.941C287.677 92.6615 288.997 86.4141 288.997 79.1988C288.997 71.9834 287.677 65.912 285.037 60.9845C282.398 55.881 278.79 52.0093 274.214 49.3696C269.815 46.7298 264.711 45.4099 258.904 45.4099C253.272 45.4099 248.169 46.7298 243.593 49.3696C239.194 52.0093 235.586 55.881 232.77 60.9845C230.13 65.912 228.811 71.9834 228.811 79.1988C228.811 86.4141 230.13 92.6615 232.77 97.941C235.586 103.045 239.194 106.916 243.593 109.556C248.169 112.196 253.272 113.516 258.904 113.516ZM369.342 151L318.395 7.92547H365.911L406.299 127.506H383.597L425.569 7.92547H468.333L508.721 127.506H486.547L528.255 7.92547H572.339L521.392 151H472.82L438.504 52.0093H453.286L417.914 151H369.342Z"
				class="fill-white"
			/>
		</svg>
	</a>
	<div class="relative overflow-hidden">
		<div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-full max-w-10 border-none bg-gradient-to-r from-transparent to-black sm:max-w-32" />
		<div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-full max-w-10 border-none bg-gradient-to-r from-black to-transparent sm:max-w-32" />
		<div class="flex gap-10 px-8" bind:this={marquee}>
			<div class="flex shrink-0 items-center gap-4 sm:gap-10" bind:this={marqueeContent}>
				<Icon icon="mingcute:star-fill" class="shrink-0 text-xl text-accent-600 sm:text-2xl" />
				<span class="whitespace-nowrap font-bold text-white sm:text-lg">Open for Oportunity</span>
				<Icon icon="mingcute:star-fill" class="shrink-0 text-xl text-accent-600 sm:text-2xl" />
				<span class="whitespace-nowrap font-bold text-white sm:text-lg">Software Engineer</span>
				<Icon icon="mingcute:star-fill" class="shrink-0 text-xl text-accent-600 sm:text-2xl" />
				<span class="whitespace-nowrap font-bold text-white sm:text-lg">Frontend Developer</span>
				<Icon icon="mingcute:star-fill" class="shrink-0 text-xl text-accent-600 sm:text-2xl" />
				<span class="whitespace-nowrap font-bold text-white sm:text-lg">Web Developer</span>
				<Icon icon="mingcute:star-fill" class="shrink-0 text-xl text-accent-600 sm:text-2xl" />
				<span class="whitespace-nowrap font-bold text-white sm:text-lg">Open for Oportunity</span>
				<Icon icon="mingcute:star-fill" class="shrink-0 text-xl text-accent-600 sm:text-2xl" />
				<span class="whitespace-nowrap font-bold text-white sm:text-lg">Software Engineer</span>
				<Icon icon="mingcute:star-fill" class="shrink-0 text-xl text-accent-600 sm:text-2xl" />
				<span class="whitespace-nowrap font-bold text-white sm:text-lg">Frontend Developer</span>
				<Icon icon="mingcute:star-fill" class="shrink-0 text-xl text-accent-600 sm:text-2xl" />
				<span class="whitespace-nowrap font-bold text-white sm:text-lg">Web Developer</span>
			</div>
		</div>
	</div>
	<a href="/">
		<span class="sr-only">Home</span>
		<svg class="mr-8 h-4 shrink-0 -scale-x-100 sm:h-6" viewBox="0 0 573 197" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="21" y="73" width="47" height="124" class="fill-white" />
			<path
				d="M99.8 151.2C88.4667 151.2 77.9333 149.4 68.2 145.8C58.6 142.2 50.2667 137.133 43.2 130.6C36.1333 123.933 30.6 116.133 26.6 107.2C22.7333 98.2667 20.8 88.5333 20.8 78C20.8 67.3333 22.7333 57.6 26.6 48.8C30.6 39.8667 36.1333 32.1333 43.2 25.6C50.2667 18.9333 58.6 13.8 68.2 10.2C77.9333 6.60001 88.4667 4.80001 99.8 4.80001C111.267 4.80001 121.8 6.60001 131.4 10.2C141 13.8 149.333 18.9333 156.4 25.6C163.467 32.1333 168.933 39.8667 172.8 48.8C176.8 57.6 178.8 67.3333 178.8 78C178.8 88.5333 176.8 98.2667 172.8 107.2C168.933 116.133 163.467 123.933 156.4 130.6C149.333 137.133 141 142.2 131.4 145.8C121.8 149.4 111.267 151.2 99.8 151.2ZM99.8 113C104.2 113 108.267 112.2 112 110.6C115.867 109 119.2 106.733 122 103.8C124.933 100.733 127.2 97.0667 128.8 92.8C130.4 88.4 131.2 83.4667 131.2 78C131.2 72.5333 130.4 67.6667 128.8 63.4C127.2 59 124.933 55.3333 122 52.4C119.2 49.3333 115.867 47 112 45.4C108.267 43.8 104.2 43 99.8 43C95.4 43 91.2667 43.8 87.4 45.4C83.6667 47 80.3333 49.3333 77.4 52.4C74.6 55.3333 72.4 59 70.8 63.4C69.2 67.6667 68.4 72.5333 68.4 78C68.4 83.4667 69.2 88.4 70.8 92.8C72.4 97.0667 74.6 100.733 77.4 103.8C80.3333 106.733 83.6667 109 87.4 110.6C91.2667 112.2 95.4 113 99.8 113Z"
				class="fill-white"
			/>
			<path d="M48 140L0 0H4.4L51.2 136.8H49L97 0H101L149 136.8H147L193.8 0H198L150 140H146L98.6 4.4H99.4L52 140H48Z" class="fill-black" />
			<path
				d="M258.904 153.376C243.241 153.376 229.339 150.208 217.196 143.873C205.053 137.537 195.462 128.826 188.422 117.739C181.559 106.476 178.127 93.6294 178.127 79.1988C178.127 64.7681 181.559 52.0093 188.422 40.9224C195.462 29.8354 205.053 21.2122 217.196 15.0528C229.339 8.7174 243.241 5.5497 258.904 5.5497C274.566 5.5497 288.469 8.7174 300.612 15.0528C312.931 21.2122 322.522 29.8354 329.385 40.9224C336.248 52.0093 339.68 64.7681 339.68 79.1988C339.68 93.6294 336.248 106.476 329.385 117.739C322.522 128.826 312.931 137.537 300.612 143.873C288.469 150.208 274.566 153.376 258.904 153.376ZM258.904 113.516C264.711 113.516 269.815 112.196 274.214 109.556C278.79 106.916 282.398 103.045 285.037 97.941C287.677 92.6615 288.997 86.4141 288.997 79.1988C288.997 71.9834 287.677 65.912 285.037 60.9845C282.398 55.881 278.79 52.0093 274.214 49.3696C269.815 46.7298 264.711 45.4099 258.904 45.4099C253.272 45.4099 248.169 46.7298 243.593 49.3696C239.194 52.0093 235.586 55.881 232.77 60.9845C230.13 65.912 228.811 71.9834 228.811 79.1988C228.811 86.4141 230.13 92.6615 232.77 97.941C235.586 103.045 239.194 106.916 243.593 109.556C248.169 112.196 253.272 113.516 258.904 113.516ZM369.342 151L318.395 7.92547H365.911L406.299 127.506H383.597L425.569 7.92547H468.333L508.721 127.506H486.547L528.255 7.92547H572.339L521.392 151H472.82L438.504 52.0093H453.286L417.914 151H369.342Z"
				class="fill-white"
			/>
		</svg>
	</a>
</div>
