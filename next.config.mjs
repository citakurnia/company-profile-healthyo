/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
            },
        ],
    },
    env: {
        CONTENTFUL_SPACE_ID: "jlgheua6mlqe",
        CONTENTFUL_ACCESS_TOKEN: "yxQKgfpKz_71Kr3J4iF121y64IrqHpSJdpZtuLr9Gps",
    },
};

export default nextConfig;
