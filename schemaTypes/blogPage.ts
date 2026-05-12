import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPage',
  title: 'Blog — Configuración',
  type: 'document',
  fields: [
    defineField({
      name: 'titleEs',
      title: 'Título de la página (Español)',
      type: 'string',
      description: 'Insights, guías y reseñas para elevar tu estadía',
    }),
    defineField({
      name: 'titleEn',
      title: 'Título de la página (English)',
      type: 'string',
      description: 'Insights, guides and reviews to elevate your stay',
    }),
    defineField({
      name: 'descriptionEs',
      title: 'Descripción (Español)',
      type: 'string',
      description: 'Breve descripción de la página del blog',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Descripción (English)',
      type: 'string',
      description: 'Brief description of the blog page',
    })
  ],
  preview: {
    select: { title: 'titleEs' },
  },
})