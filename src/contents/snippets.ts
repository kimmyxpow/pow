export const snippets = [
	{
		name: 'cn',
		description:
			'A utility function to merge Tailwind CSS class names using clsx and tailwind-merge.',
		code: `import { clsx, type ClassValue } from 'clsx'
	import { twMerge } from 'tailwind-merge'

	export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}`,
		language: 'typescript'
	},
	{
		name: 'Prisma Instance',
		description:
			'A singleton instance of Prisma Client to prevent multiple database connections in non-serverless environments.',
		code: `import { PrismaClient } from '@prisma/client';
	
const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClient | undefined;
};

export const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log: ['query', 'error', 'warn'],
	});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;`,
		language: 'typescript'
	}
];

interface Filter {
	search?: string;
}

export function getSnippets(filter?: Filter) {
	let result = snippets;

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
