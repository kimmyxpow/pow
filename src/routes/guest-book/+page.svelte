<script lang="ts">
	import { signIn, useSession } from '$lib/auth-client';
	import Icon from '@iconify/svelte';
	import { ScrollArea } from 'bits-ui';
	import { formatDate } from 'date-fns';
	import toast from 'svelte-french-toast';
	import { superForm } from 'sveltekit-superforms';

	let { data } = $props();

	const session = useSession();
	const { form, errors, constraints, enhance, submitting } = superForm(data.form, {
		onResult(event) {
			if (event.result.type === 'success') {
				toast.success('Message sent successfully! Thank you for your note.');
			} else if (event.result.type === 'error') {
				toast.error(event.result.error);
			}
		}
	});
</script>

<main class="pt-32 pb-26">
	<div class="inner">
		<div class="grid grid-cols-2 items-start gap-10">
			<div class="flex flex-col gap-6">
				<span class="font-handwriting text-2xl text-zinc-400">Just say hi, if you feel like it</span
				>
				<h1 class="text-5xl">Leave a little note before you go</h1>
				<p class="text-lg">
					Just a space for kind strangers, old friends, or curious wanderers to say hello. Drop a
					message, a thought, or your favorite emoji 🪴
				</p>
				<div class="rounded-xl border border-zinc-800 p-8">
					<div class="rounded-xl border border-zinc-800 p-8">
						<div class="rounded-xl border border-zinc-800 p-8">
							<div class="rounded-xl border border-zinc-800 p-8">
								<div class="rounded-xl border border-zinc-800 p-8">
									<div class="rounded-xl border border-zinc-800 p-6">
										<span class="text-center text-sm text-zinc-600">
											White (or black) space — I still don't know what belongs here
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="rounded-xl bg-zinc-900/60 p-2">
				<ScrollArea.Root class="p-4">
					<ScrollArea.Viewport class="max-h-[calc(100vh-20rem)] overflow-y-auto">
						<div class="space-y-4">
							{#each data.messages as message}
								<div class="flex gap-4">
									<div class="size-12 shrink-0">
										<img
											class="size-full rounded-xl object-cover"
											src={message.user.image}
											alt="{message.user.name} profile picture"
											loading="lazy"
										/>
									</div>
									<div class="mr-auto flex flex-col rounded-xl bg-zinc-900 p-4">
										<div class="flex items-center gap-2">
											<span class="text-sm text-zinc-500">
												{formatDate(message.guestbook.createdAt, 'dd MMM yyyy')}
											</span>
											<span class="size-0.5 rounded-full bg-cyan-500"></span>
											<span class="text-sm text-zinc-500">{message.user.name}</span>
										</div>
										<p>
											{message.guestbook.message}
										</p>
									</div>
								</div>
							{/each}
						</div>
					</ScrollArea.Viewport>
					<ScrollArea.Scrollbar
						orientation="vertical"
						class="data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0 data-[state=visible]:fade-in-0 flex w-2.5 touch-none rounded-full border-l border-l-transparent bg-zinc-900 p-px transition-all duration-200 select-none hover:w-3 hover:bg-zinc-800"
					>
						<ScrollArea.Thumb class="flex-1 rounded-full bg-zinc-600" />
					</ScrollArea.Scrollbar>
					<ScrollArea.Corner />
				</ScrollArea.Root>
				{#if $session.data}
					<form use:enhance method="POST" class="flex items-center gap-2 px-4 pb-2">
						<input
							class="h-14 w-full rounded-xl border border-zinc-600 px-4 ring-4 ring-transparent transition-all outline-none focus:border-zinc-200 focus:ring-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-800"
							placeholder="Say hi, share a link, or leave a riddle."
							type="text"
							name="message"
							disabled={$submitting}
							aria-invalid={$errors.message ? 'true' : undefined}
							bind:value={$form.message}
							{...$constraints.message}
						/>
						<button
							class="inline-flex size-14 shrink-0 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-cyan-500 px-4 text-zinc-900 transition-all hover:bg-cyan-600 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
						>
							<Icon icon="solar:plain-linear" class="size-6" />
						</button>
					</form>
				{:else}
					<div class="flex items-center gap-2 px-4 pb-2">
						<p>Please sign in first to leave a message.</p>
						<button
							onclick={() => signIn()}
							class="ml-auto inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-cyan-500 px-4 text-zinc-900 transition-all hover:bg-cyan-600 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
						>
							Sign In With
							<Icon icon="tabler:brand-github" class="size-6" />
						</button>
					</div>
				{/if}
			</div>
		</div>
	</div>
</main>
