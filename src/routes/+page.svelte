<script>
	import Wrapper from '$components/Wrapper.svelte';
</script>

<Wrapper infinite={true} wrapperClass="hide-scroll">
	<h2 class="m-0 break-all text-center text-6xl font-black uppercase sm:text-9xl">
		{#each new Array(100) as _}
			<span class="odd:text-gray-400 even:text-white">WELCOME </span>
		{/each}
	</h2>
</Wrapper>
