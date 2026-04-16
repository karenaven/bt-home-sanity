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
    }), // ── PÁGINA DE DESTINO ─────────────────────────────────
    defineField({
      name: 'heroImage',
      title: 'Página — Foto hero (full-width)',
      type: 'image',
      options: { hotspot: true },
      description: 'Foto grande que aparece en el hero de la página del destino',
    }),
    defineField({
      name: 'descriptionEs',
      title: 'Página — Descripción (Español)',
      type: 'text',
      rows: 4,
      description: 'Texto descriptivo del destino que aparece debajo del título',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Página — Descripción (English)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'separatorImage',
      title: 'Página — Foto separadora (entre grilla y otros destinos)',
      type: 'image',
      options: { hotspot: true },
    }),

    // ── TEXTOS DE SECCIÓN ─────────────────────────────────
    defineField({
      name: 'propertiesTitleEs',
      title: 'Página — Título grilla propiedades (Español)',
      type: 'string',
      description: 'Ej: Encontrá la propiedad ideal en Buenos Aires',
    }),
    defineField({
      name: 'propertiesTitleEn',
      title: 'Página — Título grilla propiedades (English)',
      type: 'string',
    }),
    defineField({
      name: 'otherDestinationsTitleEs',
      title: 'Página — Título otros destinos (Español)',
      type: 'string',
      initialValue: 'Descubrí otros destinos exclusivos donde operamos',
    }),
    defineField({
      name: 'otherDestinationsTitleEn',
      title: 'Página — Título otros destinos (English)',
      type: 'string',
      initialValue: 'Discover other exclusive destinations where we operate',
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