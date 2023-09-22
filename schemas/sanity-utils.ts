import { createClient , groq} from "next-sanity";

export async function getBoruto() {
    const client = createClient({
        projectId: "qtb4sill",
        dataset: "production",
        apiVersion: "2023-09-21",
    });

    return client.fetch(
        groq`*[_type = "Boruto"]{
            _id, 
            name,
            "image": image.asset=>url,
            url
        }`
    )
}