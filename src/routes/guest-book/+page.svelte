<script lang="ts">
	import Icon from '@iconify/svelte';
	import { ScrollArea } from 'bits-ui';
	import { formatDate } from 'date-fns';
	import toast from 'svelte-french-toast';
	import { superForm } from 'sveltekit-superforms';
	import { createAuthClient } from 'better-auth/svelte';
	import Seo from '$components/seo.svelte';
	import { origin } from '$lib/url';
	import { cn } from '$lib/cn';

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

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Guest Book | pow.kim',
		description: 'A small, welcoming space to leave a message, say hello, or simply pass through.',
		url: origin('/guest-book'),
		author: {
			'@type': 'Person',
			name: 'Abi Noval Fauzi (Pow)',
			url: origin()
		},
		comment: data.messages.slice(0, 2).map((m) => ({
			'@type': 'Comment',
			author: {
				'@type': 'Person',
				name: m.user.name
			},
			datePublished: m.guestbook.createdAt,
			text: m.guestbook.message
		}))
	};
</script>

<Seo
	title="Guest Book"
	{schema}
	description="Got something to say? Leave a short message, say hi, or just drop by. I'd love to hear from you."
	url="/guest-book"
	image="/images/banner.png"
/>

<main class="mt-38 border-y border-border">
	<div class="inner border-x border-border">
		<div class="grid divide-x divide-border lg:grid-cols-2">
			<div class="space-y-6">
				<div class="flex flex-col gap-6 p-8">
					<span class="font-handwriting text-xl text-foreground-text sm:text-2xl">
						Just say hi, if you feel like it
					</span>
					<h1 class="text-4xl text-balance md:text-5xl">Leave a little note before you go</h1>
					<p class="text-balance sm:text-lg">
						Just a space for kind strangers, old friends, or curious wanderers to say hello. Drop a
						message, a thought, or your favorite emoji 🪴
					</p>
				</div>
				<div class="-mx-px hidden border border-border p-8 lg:block" aria-hidden="true">
					<div class="border border-border p-8">
						<div class="border border-border p-8">
							<div class="border border-border p-6">
								<span class="block text-center text-sm text-border">
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
						<div class="space-y-6">
							{#each data.messages as message}
								{@const isMe = ['pow'].includes(message.user.name)}
								<div class={cn('flex gap-2', isMe && 'flex-row-reverse')}>
									<div class="size-12 shrink-0">
										<img
											class="size-full rounded-xl object-cover"
											src={message.user.image ||
												`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${message.user.name}`}
											alt="{message.user.name} profile picture"
											loading="lazy"
										/>
									</div>
									<div class="mr-auto flex flex-col space-y-2">
										<p class="rounded-xl bg-background-2/60 p-4 text-justify">
											{message.guestbook.message}
										</p>
										<div class={cn('flex items-center gap-2', isMe && 'justify-end')}>
											<span class="text-sm text-foreground-text">
												{formatDate(message.guestbook.createdAt, 'dd MMM yyyy')}
											</span>
											<span class="size-0.5 rounded-full bg-primary"></span>
											<span class="text-sm text-foreground-text">{message.user.name}</span>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</ScrollArea.Viewport>
					<ScrollArea.Scrollbar
						orientation="vertical"
						class="flex w-2.5 touch-none rounded-full border-l border-l-transparent bg-background-2/60 select-none hover:w-3 data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0 data-[state=visible]:animate-in data-[state=visible]:fade-in-0"
					>
						<ScrollArea.Thumb class="flex-1 rounded-full bg-foreground-primary" />
					</ScrollArea.Scrollbar>
					<ScrollArea.Corner />
				</ScrollArea.Root>
				{#if session}
					<form use:enhance method="POST" class="flex items-center border-t border-border">
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
					<div class="flex items-center border-t border-border">
						<p class="px-8">Please sign in first to leave a message.</p>
						<button
							onclick={() =>
								authClient.signIn.social({
									provider: 'github',
									callbackURL: '/guest-book'
								})}
							class="ml-auto inline-flex h-14 shrink-0 items-center justify-center gap-2 bg-primary px-4 font-semibold text-white transition-all hover:bg-primary/90 [&_svg]:transition-all hover:[&_svg]:-rotate-35"
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

<div class="border-b border-border">
	<div class="inner border-x border-border py-28"></div>
</div>
