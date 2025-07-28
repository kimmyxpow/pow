import { my } from '$lib/url';

export async function GET() {
	return new Response(
		`User-agent: *
Allow: /

Sitemap: ${my('sitemap.xml')}`,
		{
			headers: {
				'Content-Type': 'text/plain'
			}
		}
	);
}
