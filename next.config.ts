import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media1.tenor.com',
                port: '',
                pathname: '/m/**',
                search: '',
            },
        ],
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    },
});

export default withMDX(nextConfig);
