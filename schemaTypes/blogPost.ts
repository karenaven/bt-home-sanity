import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog',
  type: 'document',
  fields: [

    // ── CONTENIDO ─────────────────────────────────────────
    defineField({
      name: 'titleEs',
      title: 'Título (Español)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Título (English)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'titleEs', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryEs',
      title: 'Categoría (Español)',
      type: 'string',
      description: 'Ej: Guías, Lifestyle, Inversiones',
      options: {
        list: [
          { title: 'Guías', value: 'Guías' },
          { title: 'Lifestyle', value: 'Lifestyle' },
          { title: 'Inversiones', value: 'Inversiones' },
          { title: 'Destinos', value: 'Destinos' },
          { title: 'Noticias', value: 'Noticias' },
        ],
      },
    }),
    defineField({
      name: 'categoryEn',
      title: 'Categoría (English)',
      type: 'string',
      options: {
        list: [
          { title: 'Guides', value: 'Guides' },
          { title: 'Lifestyle', value: 'Lifestyle' },
          { title: 'Investments', value: 'Investments' },
          { title: 'Destinations', value: 'Destinations' },
          { title: 'News', value: 'News' },
        ],
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagen de portada',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerptEs',
      title: 'Extracto (Español)',
      type: 'text',
      rows: 3,
      description: 'Resumen corto que aparece en las cards del listado',
    }),
    defineField({
      name: 'excerptEn',
      title: 'Extracto (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bodyEs',
      title: 'Contenido completo (Español)',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Epígrafe',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'bodyEn',
      title: 'Contenido completo (English)',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: '¿Artículo destacado?',
      type: 'boolean',
      description: 'Aparece grande en la parte superior del blog',
      initialValue: false,
    }),

    // ── SEO ───────────────────────────────────────────────
    defineField({
      name: 'seoTitleEs',
      title: 'SEO — Título (Español)',
      type: 'string',
    }),
    defineField({
      name: 'seoTitleEn',
      title: 'SEO — Título (English)',
      type: 'string',
    }),
    defineField({
      name: 'seoDescriptionEs',
      title: 'SEO — Descripción (Español)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'seoDescriptionEn',
      title: 'SEO — Descripción (English)',
      type: 'text',
      rows: 2,
    }),
  ],
  orderings: [
    {
      title: 'Más recientes primero',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'titleEs',
      subtitle: 'categoryEs',
      media: 'coverImage',
      featured: 'featured',
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: `${featured ? '⭐ ' : ''}${title}`,
        subtitle: subtitle ?? 'Sin categoría',
        media,
      }
    },
  },
})