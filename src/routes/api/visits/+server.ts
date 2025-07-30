import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { visits } from '$lib/db/schema';
import { UAParser } from 'ua-parser-js';
import { getDb } from '$lib/db/conn';

export const POST: RequestHandler = async ({ request }) => {
	const db = getDb();
	const userAgentHeader = request.headers.get('user-agent') || '';
	const ipAddress = request.headers.get('x-forwarded-for') || 'unknown';

	const { pathname } = await request.json<{ pathname: string }>();

	const ua = new UAParser(userAgentHeader);
	const browser = ua.getBrowser();
	const os = ua.getOS();
	const userAgent = ua.getResult();

	await db.insert(visits).values({
		browser: browser.name || 'unknown',
		os: os.name || 'unknown',
		userAgent: JSON.stringify(userAgent),
		route: pathname,
		ipAddress
	});

	return json({ message: 'Thanks for visiting!' });
};
