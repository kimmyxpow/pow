<script lang="ts">
	import Icon from '@iconify/svelte';

	const onCat = () => {
		prompt('you clicked the cat, please enter the password');
		alert('wrong password');
	};
</script>

<div class="fixed inset-x-0 bottom-0 flex h-16 items-center bg-black">
	<div class="relative flex h-full w-full flex-wrap items-center justify-between border-t-2 border-gray-800 px-8">
		<p class="text-gray-400">&copy; 2024 - {new Date().getFullYear()} Pow</p>
		<p class="flex items-center gap-1 text-gray-400">
			btw, he likes <button on:click={onCat}><Icon icon="solar:cat-linear" class="text-xl" /> <span class="sr-only">cat</span></button>
		</p>
	</div>
</div>
