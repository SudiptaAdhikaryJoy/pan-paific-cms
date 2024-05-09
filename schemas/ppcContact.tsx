import {EyeOpenIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'panpacificcontact',
  title: 'Pan-Pacific-Contact',
  type: 'document',
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Title Name!',
      type: 'string',
    }),
    defineField({
      name: 'tollfree',
      title: 'Toll Free Number',
      type: 'number',
    }),
    defineField({
      name: 'phonenumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'officemail',
      title: 'Office Email',
      type: 'string',
    }),
    defineField({
      name: 'hotelImage',
      title: 'Hotel Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'supportemail',
      title: 'Support Email',
      type: 'string',
    }),
    defineField({
      name: 'hotelDetails',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'adress',
      title: 'Office Address',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Website Link',
      type: 'string',
    }),
  ],
})
