import { notFound } from 'next/navigation';
import { readdirSync } from 'fs';
import { join } from 'path';

const page = async ({ params }: { params: Promise<{ info: string[] }> }) => {
    const [type, lang, slug, ...rest] = (await params).info;

    if (rest.length > 0) notFound();

    try {
        const { default: Post } = await import(`~/contents/${type}/${lang}/${slug}.mdx`);
        return <Post />;
    } catch {
        notFound();
    }
};

export async function generateStaticParams() {
    const types = ['stories', 'articles'];
    const contentRoot = join(process.cwd(), 'contents');

    return types.flatMap((type) => {
        const typePath = join(contentRoot, type);

        const langs = readdirSync(typePath, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);

        return langs.flatMap((lang) =>
            readdirSync(join(typePath, lang))
                .filter((file) => file.endsWith('.mdx'))
                .map((file) => ({
                    slug: file.replace('.mdx', ''),
                    type,
                    lang,
                })),
        );
    });
}

export const dynamicParams = false;

export default page;
