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
        optimizePackageImports: ['@iconify/react', 'lenis'],
        serverComponentsExternalPackages: ['pocketbase']
    }
    // serverExternalPackages: ['pocketbase']
};

export default nextConfig;
