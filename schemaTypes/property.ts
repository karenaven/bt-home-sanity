import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'property',
  title: 'Propiedades',
  type: 'document',
  fields: [
    defineField({
      name: 'nameEs',
      title: 'Nombre (Español)',
      type: 'string',
      description: 'Ej: Conesa 3470, Buenos Aires',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nameEn',
      title: 'Nombre (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'nameEs', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'destination',
      title: 'Destino',
      type: 'reference',
      to: [{ type: 'destination' }],
      description: 'Ciudad donde está la propiedad',
    }),
    defineField({
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'La primera imagen es la principal',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'descriptionEs',
      title: 'Descripción (Español)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Descripción (English)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'hostifyUrl',
      title: 'URL de Hostify',
      type: 'url',
      description: 'URL directa a esta propiedad en Hostify',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: '¿Propiedad destacada?',
      type: 'boolean',
      description: 'Aparece en el carrusel de la home',
      initialValue: false,
    }),
    defineField({
      name: 'featuredOrder',
      title: 'Orden en carrusel destacadas',
      type: 'number',
      description: 'Solo aplica si es propiedad destacada (1, 2, 3...)',
      hidden: ({ document }) => !document?.featured,
    }),
  ],
  orderings: [
    {
      title: 'Orden destacadas',
      name: 'featuredOrderAsc',
      by: [{ field: 'featuredOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'nameEs',
      subtitle: 'destination.nameEs',
      media: 'images.0',
      featured: 'featured',
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: `${featured ? '⭐ ' : ''}${title}`,
        subtitle: subtitle ?? 'Sin destino asignado',
        media,
      }
    },
  },
})