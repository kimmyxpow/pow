import { readdirSync } from 'fs';
import { join } from 'path';
import { getAllTypes } from '~/utils/content';
import Link from 'next/link';
import Divider from '~/components/divider';
import { format, formatDistance } from 'date-fns';

const Page = async ({ params }: { params: Promise<{ info: string[] }> }) => {
    const [type, lang, slug] = (await params).info;

    const { default: Post, frontmatter } = await import(`~/contents/${type}/${lang}/${slug}.mdx`);
    return (
        <article className="prose prose-p:text-justify prose-pre:text-inherit prose-pre:rounded-none prose-pre:p-6 prose-pre:bg-primary-150 max-w-none py-8">
            <header className="space-y-8">
                <div className="not-prose flex items-center gap-4 text-sm">
                    <Link href="/" className="hocus:underline">
                        home
                    </Link>
                    <span>/</span>
                    <Link href={`/${type}`} className="hocus:underline">
                        {type}
                    </Link>
                    <span>/</span>
                    <span>{lang}</span>
                    <span>/</span>
                    <Link href={`/${type}/${lang}/${slug}`} className="hocus:underline">
                        {slug}
                    </Link>
                </div>
                <Divider className="not-prose" />
                <h1>{frontmatter.title}</h1>
                <Divider className="not-prose" />
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div className="flex gap-1">
                        <span className="bg-primary-300 px-4 py-1 text-sm">{frontmatter.genre}</span>
                    </div>
                    <time dateTime={frontmatter.date.toString()} className="text-primary-600 text-sm lowercase">
                        {formatDistance(frontmatter.date, new Date(), { addSuffix: true })} (
                        {format(frontmatter.date, 'yyyy-MM-dd')})
                    </time>
                </div>
                <Divider className="not-prose" />
            </header>
            <Post />
        </article>
    );
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
export const dynamic = 'force-static';

export default Page;
