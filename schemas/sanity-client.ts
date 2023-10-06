import { createClient } from "next-sanity";

const sanitySingleton = () => {
    return createClient({
        projectId: "qtb4sill",
        dataset: "production",
        apiVersion: "2023-09-21",
        useCdn: false
    });
}

type SanityClientSingleton = ReturnType<typeof sanitySingleton>

const globalForSanity = globalThis as unknown as {
    sanity: SanityClientSingleton | undefined
}

const sanity = globalForSanity.sanity ?? sanitySingleton()

export default sanity

if (process.env.NODE_ENV !== 'production') globalForSanity.sanity = sanity

// Ref: https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices