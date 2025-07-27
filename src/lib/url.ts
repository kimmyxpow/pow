import { page } from '$app/state';

export const appendParam = (key: string, value: string): string => {
	const url = new URL(page.url);
	const current = url.searchParams.getAll(key);

	if (!current.includes(value)) {
		url.searchParams.append(key, value);
	}

	return url.pathname + '?' + url.searchParams.toString();
};
