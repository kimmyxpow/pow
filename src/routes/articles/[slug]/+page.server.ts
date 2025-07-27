import { getArticleBySlug } from '$contents/articles/utils';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {
	await parent();

	const article = await getArticleBySlug(params.slug);

	if (!article) {
		throw error(404, 'Article not found');
	}

	return {
		article
	};
};
