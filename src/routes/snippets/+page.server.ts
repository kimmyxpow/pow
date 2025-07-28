import { getSnippets } from '$contents/snippets';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const searchParams = url.searchParams;
	const filters = {
		search: searchParams.get('search') || ''
	};

	const snippets = getSnippets(filters);

	return {
		filters,
		snippets
	};
};
