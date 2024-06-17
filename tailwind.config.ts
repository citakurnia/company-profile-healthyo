import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            colors: {
                "blue-deep": "#66aacb",
                "blue-med": "#abdcf4",
                "blue-soft": "#cfe9f9",
                "pink-soft": "#f6dbec",
                "white-broken": "#fcfcfc",
                "pink-med": "#cda2d6",
            },
        },
    },
    plugins: [],
};
export default config;
