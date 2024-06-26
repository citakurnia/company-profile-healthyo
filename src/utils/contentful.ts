import { createClient } from "contentful"; // open connection

export const client = createClient({
    space: String(process.env.CONTENTFUL_SPACE_ID),
    accessToken: String(process.env.CONTENTFUL_ACCESS_TOKEN),
});
