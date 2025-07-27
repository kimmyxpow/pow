import type { Component } from 'svelte';

export interface ArticleFrontmatter {
	title: string;
	excerpt: string;
	category: string;
	tags: string[];
	created: string;
	updated: string;
	id?: string;
	en?: string;
	thumbnail?: string;
}

export interface ArticleData extends ArticleFrontmatter {
	slug: string;
	readingTime: number;
}

export type ArticleModule = {
	metadata: ArticleFrontmatter;
	default: Component;
};

interface ArticleFilter {
	lang: 'en' | 'id';
	title?: string;
	categories?: string[];
	tags?: string[];
}

const contentModules = import.meta.glob<{ metadata: ArticleFrontmatter; default: unknown }>(
	'/src/contents/articles/*/*.svx'
);

const rawModules = import.meta.glob<string>('/src/contents/articles/*/*.svx', {
	query: '?raw',
	import: 'default'
});

export async function getArticles(filter: ArticleFilter): Promise<ArticleData[]> {
	const map = new Map<
		string,
		{ lang: 'en' | 'id'; slug: string; metadata: ArticleFrontmatter; raw: string }
	>();

	await Promise.all(
		Object.entries(contentModules).map(async ([path, loadContent]) => {
			const [mod, raw] = await Promise.all([loadContent(), rawModules[path]()]);
			const parts = path.split('/');
			const lang = parts[parts.length - 2] as 'en' | 'id';
			const slug = parts[parts.length - 1].replace('.svx', '');

			map.set(`${lang}:${slug}`, { lang, slug, metadata: mod.metadata, raw });
		})
	);

	const result: ArticleData[] = Array.from(map.values())
		.filter((article) => article.lang === filter.lang)
		.map((article) => {
			let metadata = { ...article.metadata };
			const refSlug = filter.lang === 'id' ? article.metadata.en : article.metadata.id;

			if (refSlug) {
				const refArticle = map.get(`en:${refSlug}`);
				if (refArticle) {
					metadata = { ...refArticle.metadata, ...metadata };
				}
			}

			return {
				slug: article.slug,
				readingTime: calculateReadingTime(article.raw),
				...metadata
			};
		});

	return result
		.filter((a) => !filter.title || a.title.toLowerCase().includes(filter.title.toLowerCase()))
		.filter(
			(a) =>
				!filter.categories?.length ||
				filter.categories.some((category) => a.category === category.toLowerCase())
		)
		.filter(
			(a) =>
				!filter.tags?.length ||
				filter.tags.some((tag) => a.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()))
		)
		.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());
}

export async function getArticleBySlug(
	slug: string
): Promise<(ArticleData & { lang: 'en' | 'id' }) | null> {
	const pathEntry = Object.keys(contentModules).find((path) => path.endsWith(`/${slug}.svx`));
	if (!pathEntry) return null;

	const [mod, raw] = await Promise.all([contentModules[pathEntry]!(), rawModules[pathEntry]!()]);
	const parts = pathEntry.split('/');
	const lang = parts[parts.length - 2] as 'en' | 'id';

	let metadata = { ...mod.metadata };
	const refSlug = lang === 'id' ? metadata.en : undefined;

	if (refSlug) {
		const fallback = await contentModules[`/src/contents/articles/en/${refSlug}.svx`]?.();
		if (fallback) {
			metadata = { ...fallback.metadata, ...metadata };
		}
	}

	return {
		slug,
		readingTime: calculateReadingTime(raw),
		lang,
		...metadata
	};
}

function calculateReadingTime(markdown: string): number {
	const words = markdown
		.replace(/---[\s\S]*?---/, '')
		.replace(/<[^>]*>/g, '')
		.split(/\s+/g)
		.filter(Boolean).length;

	return Math.max(1, Math.ceil(words / 200));
}

export async function getCategories() {
	const articles = await getArticles({ lang: 'en' });
	return [...new Set(articles.map((a) => a.category.toLowerCase()))].sort((a, b) =>
		a.localeCompare(b)
	);
}

export async function getTags() {
	const articles = await getArticles({ lang: 'en' });
	return [...new Set(articles.flatMap((a) => a.tags.map((tag) => tag.toLowerCase())))].sort(
		(a, b) => a.localeCompare(b)
	);
}
