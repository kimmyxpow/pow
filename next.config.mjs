import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pow.pockethost.io',
                port: '',
                pathname: '/api/files/**'
            }
        ]
    }
};

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
});

export default withBundleAnalyzer(nextConfig);
