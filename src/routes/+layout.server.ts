import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	return {
		theme: cookies.get('theme') || 'default'
	};
};
