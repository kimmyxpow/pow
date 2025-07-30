import { page } from '$app/state';
import { env } from '$env/dynamic/public';

export const appendParam = (key: string, value: string): string => {
	const url = new URL(page.url);
	const current = url.searchParams.getAll(key);

	if (!current.includes(value)) {
		url.searchParams.append(key, value);
	}

	return url.pathname + '?' + url.searchParams.toString();
};

export function origin(path?: string): string {
	const baseUrl = env.PUBLIC_SITE_URL || '';
	const cleanBase = baseUrl.replace(/\/$/, '');
	const cleanPath = path ? (path.startsWith('/') ? path : '/' + path) : '';
	return `${cleanBase}${cleanPath}`;
}
