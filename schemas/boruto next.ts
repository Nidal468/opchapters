const Boruto = {
  name: 'borutonext',
  title: 'Kagura Raw Chapters',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }]
    }
  ],
};

export default Boruto;
