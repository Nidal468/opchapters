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
      groq`*[_type == "mangalist1"] {
          _id, 
          name,
          person,
          number,
          to,
          "image": imagesUrl.asset->url
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
  export async function getLinks() {
    
    return client.fetch(
      groq`*[_type == "links"] {
          _id, 
          name,
          title,
          date,
          number
      }`
    );
  } 
  export async function getOP() {
  
    return client.fetch(
      groq`*[_type == "onep"]{
        _id, 
        title,
        "images": imagesGallery[].asset->url
    }`
  );
  }
  export async function getOPLinks() {
    
    return client.fetch(
      groq`*[_type == "oplinks"] {
          _id, 
          name,
          title,
          date,
          number
      }`
    );
  } 
  export async function getJJK() {
  
    return client.fetch(
      groq`*[_type == "jjk"]{
        _id, 
        title,
        "images": imagesGallery[].asset->url
    }`
  );
  }
  export async function getJJKLinks() {
    
    return client.fetch(
      groq`*[_type == "jjklinks"] {
          _id, 
          name,
          title,
          date,
          number
      }`
    );
  } 
  export async function getKagura() {
  
    return client.fetch(
      groq`*[_type == "kagura"]{
        _id, 
        title,
        "images": imagesGallery[].asset->url
    }`
  );
  }
  export async function getKaguraLinks() {
    
    return client.fetch(
      groq`*[_type == "Klinks"] {
          _id, 
          name,
          title,
          date,
          number
      }`
    );
  } 
  export async function getOpraw() {
  
    return client.fetch(
      groq`*[_type == "oneraw"]{
        _id, 
        title,
        "images": imagesGallery[].asset->url
    }`
  );
  }
  export async function getOprawLinks() {
    
    return client.fetch(
      groq`*[_type == "oprawlinks"] {
          _id, 
          name,
          title,
          date,
          number
      }`
    );
  } 
  export async function getOpcol() {
  
    return client.fetch(
      groq`*[_type == "onecol"]{
        _id, 
        title,
        "images": imagesGallery[].asset->url
    }`
  );
  }
  export async function getOpcolLinks() {
    
    return client.fetch(
      groq`*[_type == "opcollinks"] {
          _id, 
          name,
          title,
          date,
          number
      }`
    );
  } 
  export async function getJjkraw() {
  
    return client.fetch(
      groq`*[_type == "jjkraw"]{
        _id, 
        title,
        "images": imagesGallery[].asset->url
    }`
  );
  }
  export async function getJjkrawLinks() {
    
    return client.fetch(
      groq`*[_type == "jjkrawlinks"] {
          _id, 
          name,
          title,
          date,
          number
      }`
    );
  } 
  export async function getBorutoN() {
  
    return client.fetch(
      groq`*[_type == "borutonext"]{
        _id, 
        title,
        "images": imagesGallery[].asset->url
    }`
  );
  }
  export async function getBorutoNLinks() {
    
    return client.fetch(
      groq`*[_type == "linksnext"] {
          _id, 
          name,
          title,
          date,
          number
      }`
    );
  } 