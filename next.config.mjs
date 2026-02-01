import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();


/** @type {import('next').NextConfig} */
const nextConfig = {
    cacheComponents: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lknobbnnugzhxbcodema.supabase.co",
                pathname: "/storage/v1/object/public/blog-images/**"
            },
        ],
    },
};

export default withNextIntl(nextConfig);
