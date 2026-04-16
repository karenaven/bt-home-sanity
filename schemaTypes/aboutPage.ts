import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'Página Quiénes Somos',
  type: 'document',
  fields: [

    // ── HERO ──────────────────────────────────────────────
    defineField({
      name: 'heroTitleEs',
      title: 'Hero — Título (Español)',
      type: 'string',
      description: 'Ej: Diseñamos experiencias que mejoran cada estadía y fortalecen tu inversión.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitleEn',
      title: 'Hero — Título (English)',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero — Foto (centrada, redondeada)',
      type: 'image',
      options: { hotspot: true },
    }),

    // ── QUIÉNES SOMOS ─────────────────────────────────────
    defineField({
      name: 'aboutTitleEs',
      title: 'Quiénes somos — Título (Español)',
      type: 'string',
      initialValue: '¿Quiénes somos?',
    }),
    defineField({
      name: 'aboutTitleEn',
      title: 'Quiénes somos — Título (English)',
      type: 'string',
      initialValue: 'About us',
    }),
    defineField({
      name: 'aboutImage',
      title: 'Quiénes somos — Foto izquierda',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aboutBodyEs',
      title: 'Quiénes somos — Texto (Español)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'aboutBodyEn',
      title: 'Quiénes somos — Texto (English)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'aboutStats',
      title: 'Quiénes somos — Stats (máx 3)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Valor', type: 'string', description: 'Ej: 7+, 150, 500+' },
          { name: 'labelEs', title: 'Etiqueta (Español)', type: 'string' },
          { name: 'labelEn', title: 'Etiqueta (English)', type: 'string' },
        ],
        preview: { select: { title: 'value', subtitle: 'labelEs' } },
      }],
      validation: (Rule) => Rule.max(3),
    }),

    // ── QUÉ HACEMOS ───────────────────────────────────────
    defineField({
      name: 'servicesTitleEs',
      title: '¿Qué hacemos? — Título (Español)',
      type: 'string',
      initialValue: '¿Qué hacemos?',
    }),
    defineField({
      name: 'servicesTitleEn',
      title: '¿Qué hacemos? — Título (English)',
      type: 'string',
      initialValue: 'What we do',
    }),
    defineField({
      name: 'servicesDescriptionEs',
      title: '¿Qué hacemos? — Descripción (Español)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'servicesDescriptionEn',
      title: '¿Qué hacemos? — Descripción (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'services',
      title: '¿Qué hacemos? — Cards de servicios',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'titleEs', title: 'Título (Español)', type: 'string' },
          { name: 'titleEn', title: 'Título (English)', type: 'string' },
          { name: 'descriptionEs', title: 'Descripción (Español)', type: 'text', rows: 2 },
          { name: 'descriptionEn', title: 'Descripción (English)', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'titleEs' } },
      }],
    }),
    defineField({
      name: 'servicesImage',
      title: '¿Qué hacemos? — Foto full-width debajo',
      type: 'image',
      options: { hotspot: true },
    }),

    // ── SECCIÓN VERDE (texto con highlights) ──────────────
    defineField({
      name: 'highlightBodyEs',
      title: 'Sección verde — Texto (Español)',
      description: 'Seleccioná palabras y aplicá "Destacado (verde lima)" para resaltarlas',
      type: 'array',
      of: [{
        type: 'block',
        marks: {
          decorators: [{ title: 'Bold', value: 'strong' }],
          annotations: [{
            name: 'highlight',
            type: 'object',
            title: 'Destacado (verde lima)',
            fields: [{ name: 'active', type: 'boolean', initialValue: true }],
          }],
        },
        styles: [{ title: 'Normal', value: 'normal' }],
        lists: [],
      }],
    }),
    defineField({
      name: 'highlightBodyEn',
      title: 'Sección verde — Texto (English)',
      type: 'array',
      of: [{
        type: 'block',
        marks: {
          decorators: [{ title: 'Bold', value: 'strong' }],
          annotations: [{
            name: 'highlight',
            type: 'object',
            title: 'Destacado (verde lima)',
            fields: [{ name: 'active', type: 'boolean', initialValue: true }],
          }],
        },
        styles: [{ title: 'Normal', value: 'normal' }],
        lists: [],
      }],
    }),

    // ── DIFERENCIAL ───────────────────────────────────────
    defineField({
      name: 'differentialEyebrowEs',
      title: 'Diferencial — Eyebrow (Español)',
      type: 'string',
      initialValue: 'Nuestro diferencial',
    }),
    defineField({
      name: 'differentialEyebrowEn',
      title: 'Diferencial — Eyebrow (English)',
      type: 'string',
      initialValue: 'Our differentiator',
    }),
    defineField({
      name: 'differentialTitleEs',
      title: 'Diferencial — Título (Español)',
      type: 'string',
    }),
    defineField({
      name: 'differentialTitleEn',
      title: 'Diferencial — Título (English)',
      type: 'string',
    }),
    defineField({
      name: 'differentialBodyEs',
      title: 'Diferencial — Texto (Español)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'differentialBodyEn',
      title: 'Diferencial — Texto (English)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'differentialImage',
      title: 'Diferencial — Foto derecha',
      type: 'image',
      options: { hotspot: true },
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
  preview: {
    select: { title: 'heroTitleEs', media: 'heroImage' },
  },
})