const OP = {
  name: 'kagura',
  title: 'kagura bachi chapters',
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

export default OP;
