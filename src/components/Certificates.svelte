<script lang="ts">
	import Icon from '@iconify/svelte';

	let isProfessional = true;
</script>

<div class="not-prose grid gap-8">
	<div class="grid grid-cols-2 overflow-hidden rounded-xl">
		<button
			class="flex items-center justify-center gap-1 py-4 font-bold transition-all duration-200 md:text-lg {isProfessional
				? 'bg-gray-700'
				: 'bg-gray-800 hover:bg-gray-700'}"
			on:click={() => (isProfessional = true)}
		>
			<Icon icon="ph:seal-check-bold" class="text-xl" />
			Professional
		</button>
		<button
			class="md:text-l flex items-center justify-center gap-1 py-4 font-bold transition-all duration-200 {!isProfessional
				? 'bg-gray-700'
				: 'bg-gray-800 hover:bg-gray-700'}"
			on:click={() => (isProfessional = false)}
		>
			<Icon icon="uil:check-circle" class="text-xl" />
			Others
		</button>
	</div>
	{#if isProfessional}
		<enhanced:img class="rounded-xl" src="/static/img/certificates/professional/1.webp" alt="Professional Certificate" />
	{:else}
		<div class="gap-2 space-y-2 *:block *:break-inside-avoid-column *:overflow-hidden *:rounded-xl sm:columns-2 md:columns-3">
			<enhanced:img src="/static/img/certificates/1.webp" alt="Certificate 1" />
			<enhanced:img src="/static/img/certificates/2.webp" alt="Certificate 2" />
			<enhanced:img src="/static/img/certificates/3.webp" alt="Certificate 3" />
			<enhanced:img src="/static/img/certificates/4.webp" alt="Certificate 4" />
			<enhanced:img src="/static/img/certificates/5.webp" alt="Certificate 5" />
			<enhanced:img src="/static/img/certificates/6.webp" alt="Certificate 6" />
			<enhanced:img src="/static/img/certificates/7.webp" alt="Certificate 7" />
			<enhanced:img src="/static/img/certificates/8.webp" alt="Certificate 8" />
			<enhanced:img src="/static/img/certificates/9.webp" alt="Certificate 9" />
			<enhanced:img src="/static/img/certificates/10.webp" alt="Certificate 10" />
			<enhanced:img src="/static/img/certificates/11.webp" alt="Certificate 11" />
			<enhanced:img src="/static/img/certificates/12.webp" alt="Certificate 12" />
			<enhanced:img src="/static/img/certificates/13.webp" alt="Certificate 13" />
			<enhanced:img src="/static/img/certificates/14.webp" alt="Certificate 14" />
			<enhanced:img src="/static/img/certificates/15.webp" alt="Certificate 15" />
			<enhanced:img src="/static/img/certificates/16.webp" alt="Certificate 16" />
			<enhanced:img src="/static/img/certificates/17.webp" alt="Certificate 17" />
			<enhanced:img src="/static/img/certificates/18.webp" alt="Certificate 18" />
			<enhanced:img src="/static/img/certificates/19.webp" alt="Certificate 19" />
			<enhanced:img src="/static/img/certificates/20.webp" alt="Certificate 20" />
			<enhanced:img src="/static/img/certificates/21.webp" alt="Certificate 21" />
			<enhanced:img src="/static/img/certificates/22.webp" alt="Certificate 22" />
			<enhanced:img src="/static/img/certificates/23.webp" alt="Certificate 23" />
			<enhanced:img src="/static/img/certificates/24.webp" alt="Certificate 24" />
			<enhanced:img src="/static/img/certificates/25.webp" alt="Certificate 25" />
			<enhanced:img src="/static/img/certificates/26.webp" alt="Certificate 26" />
			<enhanced:img src="/static/img/certificates/27.webp" alt="Certificate 27" />
			<enhanced:img src="/static/img/certificates/28.webp" alt="Certificate 28" />
			<enhanced:img src="/static/img/certificates/29.webp" alt="Certificate 28" />
			<enhanced:img src="/static/img/certificates/30.webp" alt="Certificate 30" />
			<enhanced:img src="/static/img/certificates/31.webp" alt="Certificate 31" />
			<enhanced:img src="/static/img/certificates/32.webp" alt="Certificate 32" />
			<enhanced:img src="/static/img/certificates/33.webp" alt="Certificate 33" />
			<enhanced:img src="/static/img/certificates/34.webp" alt="Certificate 34" />
			<enhanced:img src="/static/img/certificates/35.webp" alt="Certificate 35" />
			<enhanced:img src="/static/img/certificates/36.webp" alt="Certificate 36" />
			<enhanced:img src="/static/img/certificates/37.webp" alt="Certificate 37" />
			<enhanced:img src="/static/img/certificates/38.webp" alt="Certificate 38" />
		</div>
	{/if}
</div>
