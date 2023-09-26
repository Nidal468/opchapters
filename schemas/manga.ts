const Mangas = {
  name: 'mangalist1',
  title: 'mangalist',
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
      name: 'to',
      title:'navigate to where?',
      type:'string'
    },
    {
      name: 'imagesUrl',
      title: 'Images',
      type: 'image'
    }
  ],
};

export default Mangas;
