import { guestbook, user } from '$lib/db/schema';
import { desc, eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { z } from 'zod/v4';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { Pool } from '@neondatabase/serverless';
import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

const schema = z.object({
	message: z
		.string()
		.min(1, 'Please type your message :<')
		.max(255, 'Message must be at most 255 characters long')
});

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod4(schema));
	const client = new Pool({ connectionString: env.DATABASE_URL });
	const db = drizzle(client);
	const messages = await db
		.select()
		.from(guestbook)
		.innerJoin(user, eq(user.id, guestbook.userId))
		.orderBy(desc(guestbook.createdAt));

	return {
		messages,
		form
	};
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod4(schema));

		if (!form.valid) return fail(400, { form });

		const client = new Pool({ connectionString: env.DATABASE_URL });
		const db = drizzle(client);

		const auth = betterAuth({
			database: drizzleAdapter(db, {
				provider: 'pg',
				schema: { ...schema }
			}),
			socialProviders: {
				github: {
					clientId: env.GITHUB_CLIENT_ID,
					clientSecret: env.GITHUB_CLIENT_SECRET
				}
			}
		});

		const session = await auth.api.getSession({
			headers: request.headers
		});

		if (!session) return fail(401, { form, message: 'You must be logged in to post a message.' });

		await db.insert(guestbook).values({ userId: session.user.id, message: form.data.message });

		return message(form, 'Form posted successfully!');
	}
};
