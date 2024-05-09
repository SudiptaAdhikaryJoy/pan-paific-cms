import {DocumentsIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'panpacificAboutUs',
  title: 'Pan Pacific About Us',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'ppHotelDescription',
      title: 'Hotel Description',
      type: 'text',
    }),
    defineField({
      name: 'ppImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
