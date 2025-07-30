import { getArticleBySlug } from '$contents/articles/utils';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const article = getArticleBySlug(params.slug);

	if (!article) throw error(404, 'Article not found');

	return {
		article
	};
};
