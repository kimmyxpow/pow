import { origin } from '$lib/url';

export async function GET() {
	return new Response(
		`User-agent: *
Allow: /

Sitemap: ${origin('sitemap.xml')}`,
		{
			headers: {
				'Content-Type': 'text/plain'
			}
		}
	);
}
