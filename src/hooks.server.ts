import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';
import { auth } from '$lib/auth';
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';

export const base: Handle = async ({ event, resolve }) => {
	const theme = event.cookies.get('theme');

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			if (theme) {
				html = html.replace(/<html(.*?)>/, `<html$1 class="${theme}">`);
			}
			return html;
		}
	});

	return response;
};

export const handle = sequence(
	({ event, resolve }) => svelteKitHandler({ event, resolve, auth: auth(), building }),
	base
);
