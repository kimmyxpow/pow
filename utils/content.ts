import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

type Metadata = {
    date: Date;
    excerpt: string;
    genre: string;
    image?: string;
};

type ContentItem = {
    title: string;
    slug: string;
    metadata: Metadata;
};

type ContentByLang = {
    lang: string;
    contents: ContentItem[];
};

type ContentList = {
    lang: string[];
    contents: ContentByLang[];
};

function parseFrontmatter(content: string): Omit<Metadata, 'date'> & { date: string } {
    const match = content.match(/---\n([\s\S]*?)\n---/);

    const result = {
        excerpt: '',
        genre: '',
        date: new Date().toISOString(),
    } as Omit<Metadata, 'date'> & { date: string };

    const lines = match?.[1].split('\n') || [];

    for (const line of lines) {
        const [key, ...valueParts] = line.split(':');
        if (!key?.trim() || !valueParts.length) continue;

        const cleanKey = key.trim() as keyof Metadata;
        const value = valueParts.join(':').trim();

        result[cleanKey] = value;
    }

    return result;
}

export function getContentList(type: string): ContentList {
    const baseDir = join(process.cwd(), 'contents', type);
    const langFolders = readdirSync(baseDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

    const contents = langFolders.map((lang) => {
        const langPath = join(baseDir, lang);
        const files = readdirSync(langPath).filter((file) => file.endsWith('.mdx'));

        const contentList = files.map((filename) => {
            const content = readFileSync(join(langPath, filename), 'utf-8');
            const slug = filename.replace('.mdx', '');

            const titleMatch = /# (.*)/.exec(content);

            const metadata = parseFrontmatter(content);
            const title = titleMatch?.[1] || slug;

            return {
                title,
                slug,
                metadata: {
                    ...metadata,
                    date: metadata.date ? new Date(metadata.date) : new Date(),
                },
            };
        });

        return {
            lang,
            contents: contentList,
        };
    });

    return {
        lang: langFolders,
        contents,
    };
}

export function getAllTypes() {
    const contentRoot = join(process.cwd(), 'contents');

    return readdirSync(contentRoot, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
}
