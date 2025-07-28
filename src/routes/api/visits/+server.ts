import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { visits } from '$lib/db/schema';
import { UAParser } from 'ua-parser-js';
import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';

export const POST: RequestHandler = async ({ request }) => {
	const client = new Pool({ connectionString: env.DATABASE_URL });
	const db = drizzle(client);

	const ua = new UAParser(request.headers.get('user-agent') || '');
	const ipAddress = request.headers.get('x-forwarded-for') || 'unknown';
	const browser = ua.getBrowser();
	const os = ua.getOS();
	const userAgent = ua.getResult();
	const route = (await request.json<{ pathname: string }>()).pathname;

	await db.insert(visits).values({
		browser: browser.name || 'unknown',
		os: os.name || 'unknown',
		userAgent: JSON.stringify(userAgent),
		route,
		ipAddress
	});

	return json({ message: 'Thanks fot visiting!' });
};
