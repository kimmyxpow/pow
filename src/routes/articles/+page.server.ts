import { getCategories, getTags, getArticles } from '$contents/articles/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, parent }) => {
	await parent();

	const searchParams = url.searchParams;
	const filters = {
		search: searchParams.get('search') || '',
		categories: searchParams.getAll('categories') || [],
		tags: searchParams.getAll('tags') || []
	};

	const articles = await getArticles({
		lang: 'en',
		...filters
	});

	const categories = await getCategories();
	const tags = await getTags();

	return {
		filters,
		articles,
		categories,
		tags
	};
};
