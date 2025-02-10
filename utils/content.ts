import { Glob } from 'bun';
import fs from 'fs';
import { parse } from 'yaml';

type ContentItem = {
    title: string;
    slug: string;
    metadata: {
        date: Date;
        excerpt: string;
        genre: string;
        image?: string;
    };
};

type ContentByLang = {
    lang: string;
    contents: ContentItem[];
};

type ContentList = {
    lang: string[];
    contents: ContentByLang[];
};

export function getContentList(type: 'stories' | 'articles'): ContentList {
    const files = Array.from(new Glob('**/*.mdx').scanSync(`./contents/${type}`));

    const langMap = files.reduce((map, file) => {
        const [lang, filename] = file.split('/');
        map.set(lang, [...(map.get(lang) || []), filename]);
        return map;
    }, new Map<string, string[]>());

    const contents = Array.from(langMap, ([lang, filenames]) => ({
        lang,
        contents: filenames.map((filename) => {
            const slug = filename.replace('.mdx', '');
            const content = fs.readFileSync(`./contents/${type}/${lang}/${filename}`, 'utf-8');

            const metadata = parse(content.match(/---\n([\s\S]*?)\n---/)?.[1] || '');
            const title = content.match(/# (.*)/)?.[1] || slug;

            return {
                title,
                slug,
                metadata: {
                    ...metadata,
                    date: new Date(metadata.date),
                },
            };
        }),
    }));

    return {
        lang: Array.from(langMap.keys()),
        contents,
    };
}
