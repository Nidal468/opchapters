const Boruto = {
  name: 'manga',
  title: 'Boruto',
  type:'document',
  fields:[
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url'
    }
  ]
}

export default Boruto

