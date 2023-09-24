import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "qtb4sill",
  dataset: "production",
  apiVersion: "2023-09-21",
  useCdn: false
});

export async function getBoruto() {
  
  return client.fetch(
    groq`*[_type == "boruto"]{
      _id, 
      title,
      "images": imagesGallery[].asset->url
  }`
);
}
export async function getAssets() {
    
    return client.fetch(
      groq`*[_type == "Assets"] {
          _id, 
          name,
          "images": imagesGallery.asset->url
      }`
    );
  } 
  export async function getManga() {
    
    return client.fetch(
      groq`*[_type == "mangalist"] {
          _id, 
          name,
          person,
          number,
          location,
          to
      }`
    );
  } 
  export async function getSoon() {
    
    return client.fetch(
      groq`*[_type == "soonlist"] {
          _id, 
          name,
          person,
          number,
          location
      }`
    );
  } 