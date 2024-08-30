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
    },
    experimental: {
        optimizePackageImports: ['@iconify/react', 'lenis', 'framer-motion'],
        serverComponentsExternalPackages: ['pocketbase']
    }
};

export default nextConfig;
