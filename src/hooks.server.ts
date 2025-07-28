import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import * as schema from '$lib/db/schema';
import { env } from '$env/dynamic/private';
import { Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

export async function handle({ event, resolve }) {
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

	return svelteKitHandler({ event, resolve, auth, building });
}
