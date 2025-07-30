<script lang="ts">
	import Icon from '@iconify/svelte';
	import { ScrollArea } from 'bits-ui';
	import { formatDate } from 'date-fns';
	import toast from 'svelte-french-toast';
	import { superForm } from 'sveltekit-superforms';
	import { createAuthClient } from 'better-auth/svelte';

	let { data } = $props();

	const authClient = createAuthClient();
	const session = $derived(data.session);
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

<main class="mt-38 border-y border-zinc-300">
	<div class="inner border-x border-zinc-300">
		<div class="grid divide-x divide-zinc-300 lg:grid-cols-2">
			<div class="space-y-6">
				<div class="flex flex-col gap-6 p-8">
					<span class="font-handwriting text-2xl text-zinc-500">
						Just say hi, if you feel like it
					</span>
					<h1 class="text-4xl text-balance md:text-5xl">Leave a little note before you go</h1>
					<p class="text-balance sm:text-lg">
						Just a space for kind strangers, old friends, or curious wanderers to say hello. Drop a
						message, a thought, or your favorite emoji 🪴
					</p>
				</div>
				<div class="-mx-px hidden border border-zinc-300 p-8 lg:block">
					<div class="border border-zinc-300 p-8">
						<div class="border border-zinc-300 p-8">
							<div class="border border-zinc-300 p-6">
								<span class="block text-center text-sm text-zinc-300">
									White space, i still don't know what belongs here
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<ScrollArea.Root>
					<ScrollArea.Viewport class="max-h-[calc(100vh-20rem)] overflow-y-auto p-8">
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
									<div class="mr-auto flex flex-col rounded-xl bg-white/30 p-4">
										<div class="flex items-center gap-2">
											<span class="text-sm text-zinc-500">
												{formatDate(message.guestbook.createdAt, 'dd MMM yyyy')}
											</span>
											<span class="size-0.5 rounded-full bg-primary"></span>
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
						class="flex w-2.5 touch-none rounded-full border-l border-l-transparent bg-white/60 select-none hover:w-3 data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0 data-[state=visible]:animate-in data-[state=visible]:fade-in-0"
					>
						<ScrollArea.Thumb class="flex-1 rounded-full bg-dark" />
					</ScrollArea.Scrollbar>
					<ScrollArea.Corner />
				</ScrollArea.Root>
				{#if session}
					<form use:enhance method="POST" class="flex items-center border-t border-zinc-300">
						<input
							class="h-14 w-full px-8 transition-all outline-none disabled:cursor-not-allowed disabled:bg-white"
							placeholder="Say hi, share a link, or leave a riddle. Type here..."
							type="text"
							name="message"
							disabled={$submitting}
							aria-invalid={$errors.message ? 'true' : undefined}
							bind:value={$form.message}
							{...$constraints.message}
						/>
						<button
							class="inline-flex size-14 shrink-0 items-center justify-center bg-primary text-white transition-all hover:bg-primary/90 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
						>
							<Icon icon="solar:plain-linear" class="size-6" />
						</button>
					</form>
				{:else}
					<div class="flex items-center border-t border-zinc-300">
						<p class="px-8">Please sign in first to leave a message.</p>
						<button
							onclick={() =>
								authClient.signIn.social({
									provider: 'github',
									callbackURL: '/guest-book'
								})}
							class="ml-auto inline-flex h-14 shrink-0 items-center justify-center gap-2 bg-primary px-4 text-white transition-all hover:bg-primary/90 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
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

<div class="border-b border-zinc-300">
	<div class="inner border-x border-zinc-300 py-28"></div>
</div>
