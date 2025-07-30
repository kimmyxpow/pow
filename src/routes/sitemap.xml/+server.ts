import { getArticles } from '$contents/articles/utils';
import { env } from '$env/dynamic/public';

export async function GET() {
	const domain = env.PUBLIC_SITE_URL;

	const staticPages = [
		{ path: '/', changefreq: 'daily', priority: '1.0' },
		{ path: '/projects', changefreq: 'weekly', priority: '0.8' },
		{ path: '/articles', changefreq: 'weekly', priority: '0.9' },
		{ path: '/snippets', changefreq: 'monthly', priority: '0.7' },
		{ path: '/guest-book', changefreq: 'monthly', priority: '0.6' },
		{ path: '/about', changefreq: 'yearly', priority: '0.5' },
		{ path: '/goals', changefreq: 'yearly', priority: '0.5' },
		{ path: '/attributions', changefreq: 'yearly', priority: '0.3' },
		{ path: '/visits', changefreq: 'yearly', priority: '0.2' }
	];

	const articles = [...getArticles({ lang: 'en' }), ...getArticles({ lang: 'id' })];

	const allUrls = [
		...staticPages.map(
			({ path, changefreq, priority }) => `
            <url>
                <loc>${domain}${path}</loc>
                <changefreq>${changefreq}</changefreq>
                <priority>${priority}</priority>
            </url>`
		),
		...articles.map(
			(article) => `
            <url>
              <loc>${domain}/articles/${article.slug}</loc>
              <lastmod>${article.updated}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.7</priority>
            </url>
          `
		)
	].join('');

	const xml = `
	<?xml version="1.0" encoding="UTF-8" ?>
	<urlset
		xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:xhtml="https://www.w3.org/1999/xhtml"
		xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
		xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
		xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	>
	${allUrls}
	</urlset>`.trim();

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
