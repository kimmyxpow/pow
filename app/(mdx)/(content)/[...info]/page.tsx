import { readdirSync } from 'fs';
import { join } from 'path';
import { getAllTypes } from '~/utils/content';

const page = async ({ params }: { params: Promise<{ info: string[] }> }) => {
    const [type, lang, slug] = (await params).info;

    const { default: Post } = await import(`~/contents/${type}/${lang}/${slug}.mdx`);
    return <Post />;
};

export async function generateStaticParams() {
    const types = getAllTypes();
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
                    info: [type, lang, file.replace('.mdx', '')],
                })),
        );
    });
}

export const dynamicParams = false;

export default page;
