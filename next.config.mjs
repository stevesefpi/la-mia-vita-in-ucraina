/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;
