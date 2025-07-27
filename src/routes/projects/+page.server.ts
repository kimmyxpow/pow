import { getCategories, getTags, getProjects } from '$contents/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, parent }) => {
	await parent();

	const searchParams = url.searchParams;
	const filters = {
		search: searchParams.get('search') || '',
		categories: searchParams.getAll('categories') || [],
		tags: searchParams.getAll('tags') || []
	};

	const projects = getProjects(filters);

	const categories = getCategories();
	const tags = getTags();

	return {
		filters,
		projects,
		categories,
		tags
	};
};
