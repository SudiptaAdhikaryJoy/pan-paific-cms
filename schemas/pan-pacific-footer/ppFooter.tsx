import {CommentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'panpacificcontact',
    title: 'Pan-Pacific-Contact',
    type: 'document',
    icon: CommentIcon,
    fields: [
        defineField({
            name: 'hotelName',
            title: 'Title Name!',
            type:'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'hotelServices',
            title: 'Services',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'hotelAbout',
            title: 'About',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'hotelAddress',
            title: 'Address',
            type: 'string',
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: 'hotelPostalCode',
            title: 'Hotel Postal Code',
            type: 'string',
            validation: (Rule) => Rule.required(),
          }),
    ]
})