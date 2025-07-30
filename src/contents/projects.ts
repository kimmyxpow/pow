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
		name: 'Open Series',
		description:
			'A comprehensive Math & Physics cheatsheet website. I contributed by developing the website.',
		image: '/images/projects/openseries.png',
		url: 'https://openseries.pages.dev/',
		github: 'https://github.com/bellshade/OpenSeriesWeb',
		category: 'Web App',
		tags: ['next.js', 'tailwindcss', 'python']
	},
	{
		name: 'HTML-CSS by Bellshade',
		description:
			'An open-source repository for learning HTML and CSS in Indonesian, specifically for beginners. I contribute as a maintainer.',
		image: '/images/projects/htmlcss.png',
		url: 'https://github.com/bellshade/HTML-CSS',
		github: 'https://github.com/bellshade/HTML-CSS',
		category: 'Other',
		tags: ['html-css']
	},
	{
		name: 'Nametopia',
		description: 'A simple and fast name generator for various countries and genders.',
		image: '/images/projects/nametopia.png',
		url: 'https://nametopia.pow.kim/',
		github: 'https://github.com/kimmyxpow/nametopia',
		category: 'Web App',
		tags: ['react.js', 'tailwindcss']
	},
	{
		name: 'PalettePix',
		description: 'A website that extracts color palettes from uploaded photos.',
		image: '/images/projects/palettepix.png',
		url: 'https://palettepix.pow.kim/',
		github: 'https://github.com/kimmyxpow/palettepix',
		category: 'Web App',
		tags: ['react.js', 'tailwindcss']
	},
	{
		name: 'BagiSkrip',
		description:
			'A code snippet sharing service with URL sharing, password protection, and visibility settings.',
		image: 'https://placehold.co/600x400/png',
		url: 'https://github.com/kimmyxpow/bagiskrip',
		github: 'https://github.com/kimmyxpow/bagiskrip',
		category: 'Web App',
		tags: ['laravel', 'tailwindcss']
	},
	{
		name: 'Hollux',
		description:
			'A hotel management web app with landing page, admin dashboard, content management, and reservation features.',
		image: '/images/projects/hollux.png',
		url: 'https://github.com/kimmyxpow/hollux',
		github: 'https://github.com/kimmyxpow/hollux',
		category: 'Web App',
		tags: ['laravel', 'livewire', 'tailwindcss', 'alpine.js']
	}
];

interface Filter {
	search?: string;
	categories?: string[];
	tags?: string[];
}

export function getProjects(filter?: Filter) {
	let result = projects;

	if (filter?.search) {
		const searchLower = filter.search.toLowerCase();
		result = result.filter(
			(p) =>
				p.name.toLowerCase().includes(searchLower) ||
				p.description.toLowerCase().includes(searchLower)
		);
	}

	if (filter?.categories && filter.categories.length > 0) {
		const categoriesLower = filter.categories.map((c) => c.toLowerCase());
		result = result.filter((p) => categoriesLower.includes(p.category.toLowerCase()));
	}

	if (filter?.tags && filter.tags.length > 0) {
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
