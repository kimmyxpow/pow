export type Project = {
	name: string;
	description: string;
	image: string;
	url: string;
	github: string;
	category: string;
	tags: string[];
};

export const projects: Project[] = [
	{
		name: 'PalettePix',
		description: 'A web app for generating and sharing color palettes.',
		image: '/images/articles/neom-YeLs9lJDx9M-unsplash.jpg',
		url: 'https://palettepix.com',
		github: 'https://github.com/abinovalfauzi/palettepix',
		category: 'Web App',
		tags: ['react.js', 'tailwindcss']
	}
];

interface Filter {
	search?: string;
	categories?: string[];
	tags?: string[];
}

export function getProjects(filter: Filter) {
	let result = projects;

	if (filter.search) {
		const searchLower = filter.search.toLowerCase();
		result = result.filter(
			(p) =>
				p.name.toLowerCase().includes(searchLower) ||
				p.description.toLowerCase().includes(searchLower)
		);
	}

	if (filter.categories && filter.categories.length > 0) {
		const categoriesLower = filter.categories.map((c) => c.toLowerCase());
		result = result.filter((p) => categoriesLower.includes(p.category.toLowerCase()));
	}

	if (filter.tags && filter.tags.length > 0) {
		const tagsLower = filter.tags.map((t) => t.toLowerCase());
		result = result.filter((p) =>
			tagsLower.every((tag) => p.tags.map((t) => t.toLowerCase()).includes(tag))
		);
	}

	return result;
}

export function getCategories(): string[] {
	const categories = projects.map((p) => p.category);
	return [...new Set(categories)].sort((a, b) => a.localeCompare(b));
}

export function getTags(): string[] {
	const allTags = projects.flatMap((p) => p.tags);
	return [...new Set(allTags)].sort((a, b) => a.localeCompare(b));
}
