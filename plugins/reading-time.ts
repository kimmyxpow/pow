import type { Plugin } from 'vite';

export function svxReadingTime(): Plugin {
	return {
		name: 'mdsvex-reading-time',
		transform(code, id) {
			if (!id.endsWith('.svx')) return;

			const readingTime = calculateReadingTime(normalizeContent(code));

			return {
				code: code.replace(/export const metadata = (\{[\s\S]*?\});/, (_, metadataStr) => {
					const metadata = JSON.parse(metadataStr);
					metadata.readingTime = readingTime;
					return `export const metadata = ${JSON.stringify(metadata, null, 2)};`;
				}),
				map: null
			};
		}
	};
}

function normalizeContent(code: string): string {
	return code
		.replace(/<script[\s\S]*?<\/script>/gi, '')
		.replace(/<style[\s\S]*?<\/style>/gi, '')

		.replace(/export const metadata = (\{[\s\S]*?\});/, '')

		.replace(/<\/?[\w-]+\s*[^>]*>/g, '')

		.replace(/\s+/g, ' ')
		.trim();
}

function calculateReadingTime(text: string): number {
	const words = text.split(/\s+/g).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / 200));
}
