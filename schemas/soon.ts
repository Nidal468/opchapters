const Soon = {
    name: 'soonlist',
    title: 'soonlist',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Manga name',
        type: 'string',
      },
      {
        name: 'person',
        title:'author',
        type:'string'
      },
      {
        name: 'number',
        title:'total page number',
        type:'string'
      },
      {
        name: 'location',
        title:'url of the image',
        type:'string'
      },
      {
        name: 'imagesUrl',
        title: 'Images',
        type: 'image'
      }
    ],
  };
  
  export default Soon;
  