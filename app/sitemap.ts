import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://pow.kim';

type SitemapEntry = {
    url: string;
    lastModified: string;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
};

function getLastModified(filePath: string): string {
    const stats = statSync(filePath);
    return stats.mtime.toISOString();
}

function getPriorityByDepth(depth: number): number {
    return Math.max(0.1, 1 - depth * 0.2);
}

function getChangeFrequency(type: string, lastMod: string): SitemapEntry['changeFrequency'] {
    const daysSinceModified = Math.floor((Date.now() - new Date(lastMod).getTime()) / (1000 * 60 * 60 * 24));

    if (type === 'articles') {
        if (daysSinceModified < 7) return 'daily';
        if (daysSinceModified < 30) return 'weekly';
        return 'monthly';
    }

    if (type === 'stories') {
        if (daysSinceModified < 30) return 'weekly';
        return 'monthly';
    }

    return 'monthly';
}

export default async function sitemap(): Promise<SitemapEntry[]> {
    const contentRoot = join(process.cwd(), 'contents');

    const contentTypes = readdirSync(contentRoot, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

    const staticPaths: SitemapEntry[] = [
        {
            url: BASE_URL,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        ...contentTypes.map((type) => ({
            url: `${BASE_URL}/${type}`,
            lastModified: getLastModified(join(contentRoot, type)),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        })),
    ];

    const contentPaths = contentTypes.flatMap((type) => {
        const typePath = join(contentRoot, type);
        const langs = readdirSync(typePath, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);

        return langs.flatMap((lang) => {
            const langPath = join(typePath, lang);
            return readdirSync(langPath)
                .filter((file) => file.endsWith('.mdx'))
                .map((file) => {
                    const filePath = join(langPath, file);
                    const lastMod = getLastModified(filePath);
                    const urlPath = `${BASE_URL}/${type}/${lang}/${file.replace('.mdx', '')}`;

                    return {
                        url: urlPath,
                        lastModified: lastMod,
                        changeFrequency: getChangeFrequency(type, lastMod),
                        priority: getPriorityByDepth(urlPath.split('/').length - 2),
                    };
                });
        });
    });

    return [...staticPaths, ...contentPaths].map((entry) => ({
        ...entry,
        url: entry.url.replace(/\/$/, ''),
    }));
}

export const dynamic = 'force-static';
