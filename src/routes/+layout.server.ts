import { db } from '$lib/db/conn';
import { visits } from '$lib/db/schema';
import type { LayoutServerLoad } from './$types';
import { UAParser } from 'ua-parser-js';

export const load: LayoutServerLoad = async ({ request, url }) => {
	const ua = new UAParser(request.headers.get('user-agent') || '');
	const ipAddress = request.headers.get('x-forwarded-for') || 'unknown';
	const browser = ua.getBrowser();
	const os = ua.getOS();
	const userAgent = ua.getResult();
	const route = url.pathname;

	await db.insert(visits).values({
		browser: browser.name || 'unknown',
		os: os.name || 'unknown',
		userAgent: JSON.stringify(userAgent),
		route,
		ipAddress
	});
};
