// En tu proyecto de Sanity: schemaTypes/amenities.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'amenities',
  title: 'Amenities (Comodidades)',
  type: 'document',
  fields: [
    defineField({
      name: 'hostifyId',
      title: 'Hostify ID',
      type: 'string',
      description: 'El ID del amenity en Hostify (obligatorio para vincular)',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'name_en',
      title: 'Nombre en Inglés',
      type: 'string',
      description: 'Nombre del amenity en inglés (como viene de Hostify)',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'name_es',
      title: 'Nombre en Español',
      type: 'string',
      description: 'Nombre del amenity traducido al español',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description_en',
      title: 'Descripción en Inglés',
      type: 'text',
      description: 'Descripción adicional (opcional)',
    }),

    defineField({
      name: 'description_es',
      title: 'Descripción en Español',
      type: 'text',
      description: 'Descripción adicional en español (opcional)',
    }),

    defineField({
      name: 'icon',
      title: 'Icono/Emoji',
      type: 'string',
      description: 'Emoji o icono para representar el amenity (ej: 🏊, 🍽️)',
    }),

    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Cocina', value: 'kitchen' },
          { title: 'Baño', value: 'bathroom' },
          { title: 'Dormitorio', value: 'bedroom' },
          { title: 'Entretenimiento', value: 'entertainment' },
          { title: 'Exterior', value: 'outdoor' },
          { title: 'Seguridad', value: 'safety' },
        ],
      },
      description: 'Para organizar amenities por categoría (opcional)',
    }),

    defineField({
      name: 'active',
      title: 'Activo',
      type: 'boolean',
      description: 'Si está marcado, aparecerá en la web',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'name_es',
      subtitle: 'name_en',
      icon: 'icon',
    },
    prepare(selection) {
      const { title, subtitle, icon } = selection
      return {
        title: `${icon || '✓'} ${title}`,
        subtitle: `(${subtitle})`,
      }
    },
  },
})