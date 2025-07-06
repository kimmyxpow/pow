import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media1.tenor.com',
                port: '',
                pathname: '/m/**',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
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

initOpenNextCloudflareForDev();