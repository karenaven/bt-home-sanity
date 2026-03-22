import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'destination',
  title: 'Destinos',
  type: 'document',
  fields: [
    defineField({
      name: 'nameEs',
      title: 'Nombre (Español)',
      type: 'string',
      description: 'Ej: Buenos Aires',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nameEn',
      title: 'Nombre (English)',
      type: 'string',
      description: 'Ej: Buenos Aires',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'Se genera automáticamente desde el nombre en español',
      options: { source: 'nameEs', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cityId',
      title: 'City ID de Hostify',
      type: 'string',
      description: 'El city_id que usa Hostify en la URL. Ej: 3684',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen de la card',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número para ordenar (1, 2, 3...)',
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: 'Orden de aparición',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'nameEs', subtitle: 'cityId', media: 'image' },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: `city_id: ${subtitle}`, media }
    },
  },
})