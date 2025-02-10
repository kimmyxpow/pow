import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ info: string[] }> }) {
    const [type, lang, slug, ...rest] = (await params).info;

    if (rest.length > 0) notFound();

    const Post = await import(`~/contents/${type}/${lang}/${slug}.mdx`).catch(() => notFound());

    return <Post.default />;
}
