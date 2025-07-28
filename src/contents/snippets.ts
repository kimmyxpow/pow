export const projects = [
	{
		name: 'CN',
		description: 'A utility function for merging class names in Tailwind CSS.',
		code: `import { clsx, type ClassValue } from 'clsx'`,
		language: 'typescript'
	}
];

interface Filter {
	search?: string;
}

export function getSnippets(filter?: Filter) {
	let result = projects;

	if (filter?.search) {
		const searchLower = filter.search.toLowerCase();
		result = result.filter(
			(p) =>
				p.name.toLowerCase().includes(searchLower) ||
				p.description.toLowerCase().includes(searchLower)
		);
	}

	return result;
}
