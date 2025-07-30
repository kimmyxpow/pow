import type { Component } from 'svelte';

export interface ArticleFrontmatter {
	title: string;
	excerpt: string;
	keywords?: string;
	category: string;
	tags: string[];
	created: string;
	updated: string;
	id?: string;
	en?: string;
	thumbnail: string;
	readingTime: number;
}

export interface ArticleData extends ArticleFrontmatter {
	slug: string;
}

export type ArticleModule = {
	metadata: ArticleFrontmatter;
	default: Component;
};

interface ArticleFilter {
	lang: 'en' | 'id';
	search?: string;
	categories?: string[];
	tags?: string[];
}

const contentModules = import.meta.glob<ArticleModule>('/src/contents/articles/*/*.svx', {
	eager: true
});

export function getArticles(filter?: ArticleFilter): ArticleData[] {
	const map = new Map<string, { lang: 'en' | 'id'; slug: string; metadata: ArticleFrontmatter }>();

	for (const path in contentModules) {
		const mod = contentModules[path];
		const parts = path.split('/');
		const lang = parts[parts.length - 2] as 'en' | 'id';
		const slug = parts[parts.length - 1].replace('.svx', '');

		map.set(`${lang}:${slug}`, { lang, slug, metadata: mod.metadata });
	}

	const result: ArticleData[] = Array.from(map.values())
		.filter((article) => article.lang === filter?.lang)
		.map((article) => {
			let metadata = { ...article.metadata };
			const refSlug = filter?.lang === 'id' ? metadata.en : metadata.id;

			if (refSlug) {
				const fallback = map.get(`en:${refSlug}`);
				if (fallback) {
					metadata = { ...fallback.metadata, ...metadata };
				}
			}

			return {
				slug: article.slug,
				...metadata
			};
		})
		.filter((a) => !filter?.search || a.title.toLowerCase().includes(filter?.search.toLowerCase()))
		.filter(
			(a) =>
				!filter?.categories?.length ||
				filter?.categories.some((category) => a.category === category.toLowerCase())
		)
		.filter(
			(a) =>
				!filter?.tags?.length ||
				filter?.tags.some((tag) => a.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()))
		)
		.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());

	return result;
}

export function getArticleBySlug(slug: string): (ArticleData & { lang: 'en' | 'id' }) | null {
	const pathEntry = Object.keys(contentModules).find((path) => path.endsWith(`/${slug}.svx`));
	if (!pathEntry) return null;

	const mod = contentModules[pathEntry];
	const parts = pathEntry.split('/');
	const lang = parts[parts.length - 2] as 'en' | 'id';

	let metadata = { ...mod.metadata };
	const refSlug = lang === 'id' ? metadata.en : undefined;

	if (refSlug) {
		const fallback = contentModules[`/src/contents/articles/en/${refSlug}.svx`];
		if (fallback) {
			metadata = { ...fallback.metadata, ...metadata };
		}
	}

	return {
		slug,
		lang,
		...metadata
	};
}

export function getCategories() {
	const articles = getArticles({ lang: 'en' });
	return [...new Set(articles.map((a) => a.category.toLowerCase()))].sort((a, b) =>
		a.localeCompare(b)
	);
}

export function getTags() {
	const articles = getArticles({ lang: 'en' });
	return [...new Set(articles.flatMap((a) => a.tags.map((tag) => tag.toLowerCase())))].sort(
		(a, b) => a.localeCompare(b)
	);
}
