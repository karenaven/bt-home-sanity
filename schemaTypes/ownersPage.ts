import { defineField, defineType } from 'sanity'

const highlightBlock = {
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
}

export default defineType({
  name: 'ownersPage',
  title: 'Página Propietarios',
  type: 'document',
  fields: [

    // ── HERO ──────────────────────────────────────────────
    defineField({
      name: 'heroEyebrowEs',
      title: 'Hero — Eyebrow (Español)',
      type: 'string',
      initialValue: 'Propietarios',
    }),
    defineField({
      name: 'heroEyebrowEn',
      title: 'Hero — Eyebrow (English)',
      type: 'string',
      initialValue: 'Owners',
    }),
    defineField({
      name: 'heroTitleEs',
      title: 'Hero — Título (Español)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitleEn',
      title: 'Hero — Título (English)',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitleEs',
      title: 'Hero — Subtítulo (Español)',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitleEn',
      title: 'Hero — Subtítulo (English)',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero — Foto full-width',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // ── DIFERENCIAL (grilla 01-06) ─────────────────────────
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
      name: 'differentialItems',
      title: 'Diferencial — Cards (máx 6)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'textEs', title: 'Texto (Español)', type: 'text', rows: 2 },
          { name: 'textEn', title: 'Texto (English)', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'textEs' } },
      }],
      validation: (Rule) => Rule.max(6),
    }),

    // ── SPLIT (foto izq, texto der) ────────────────────────
    defineField({
      name: 'splitImage',
      title: 'Split — Foto izquierda',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'splitTitleEs',
      title: 'Split — Título (Español)',
      type: 'string',
    }),
    defineField({
      name: 'splitTitleEn',
      title: 'Split — Título (English)',
      type: 'string',
    }),
    defineField({
      name: 'splitBodyEs',
      title: 'Split — Texto (Español)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'splitBodyEn',
      title: 'Split — Texto (English)',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    // ── FILOSOFÍA ─────────────────────────────────────────
    defineField({
      name: 'philosophyEyebrowEs',
      title: 'Filosofía — Eyebrow (Español)',
      type: 'string',
      initialValue: 'Nuestra filosofía',
    }),
    defineField({
      name: 'philosophyEyebrowEn',
      title: 'Filosofía — Eyebrow (English)',
      type: 'string',
      initialValue: 'Our philosophy',
    }),
    defineField({
      name: 'philosophyTextEs',
      title: 'Filosofía — Texto centrado (Español)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'philosophyTextEn',
      title: 'Filosofía — Texto centrado (English)',
      type: 'text',
      rows: 3,
    }),

    // ── VIDEO (debajo de filosofía) ────────────────────────
    defineField({
      name: 'philosophyVideo',
      title: 'Filosofía — Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Subí el archivo de video (mp4, webm)',
    }),

    // ── FEATURED PROPERTY (split debajo del video) ─────────
    defineField({
      name: 'featuredPropertyEyebrowEs',
      title: 'Propiedad destacada — Eyebrow (Español)',
      type: 'string',
      initialValue: 'Propiedades destacadas',
    }),
    defineField({
      name: 'featuredPropertyEyebrowEn',
      title: 'Propiedad destacada — Eyebrow (English)',
      type: 'string',
      initialValue: 'Featured Properties',
    }),
    defineField({
      name: 'featuredPropertyTitleEs',
      title: 'Propiedad destacada — Título (Español)',
      type: 'string',
    }),
    defineField({
      name: 'featuredPropertyTitleEn',
      title: 'Propiedad destacada — Título (English)',
      type: 'string',
    }),
    defineField({
      name: 'featuredPropertyDescEs',
      title: 'Propiedad destacada — Descripción (Español)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'featuredPropertyDescEn',
      title: 'Propiedad destacada — Descripción (English)',
      type: 'text',
      rows: 3,
    }),

    // ── PRICELABS ─────────────────────────────────────────
    defineField({
      name: 'pricelabsLogo',
      title: 'PriceLabs — Logo',
      type: 'image',
    }),
    defineField({
      name: 'pricelabsTitleEs',
      title: 'PriceLabs — Título (Español)',
      type: 'string',
    }),
    defineField({
      name: 'pricelabsTitleEn',
      title: 'PriceLabs — Título (English)',
      type: 'string',
    }),
    defineField({
      name: 'pricelabsFeatures',
      title: 'PriceLabs — Features (íconos + texto)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'labelEs', title: 'Label (Español)', type: 'string' },
          { name: 'labelEn', title: 'Label (English)', type: 'string' },
        ],
        preview: { select: { title: 'labelEs' } },
      }],
    }),

    // ── REVENUE MANAGEMENT ────────────────────────────────
    defineField({
      name: 'revenueEyebrowEs',
      title: 'Revenue — Eyebrow (Español)',
      type: 'string',
      initialValue: 'Revenue management activo',
    }),
    defineField({
      name: 'revenueEyebrowEn',
      title: 'Revenue — Eyebrow (English)',
      type: 'string',
      initialValue: 'Active revenue management',
    }),
    defineField({
      name: 'revenueTitleEs',
      title: 'Revenue — Título (Español)',
      type: 'string',
    }),
    defineField({
      name: 'revenueTitleEn',
      title: 'Revenue — Título (English)',
      type: 'string',
    }),
    defineField({
      name: 'revenueBodyEs',
      title: 'Revenue — Texto (Español)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'revenueBodyEn',
      title: 'Revenue — Texto (English)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'revenueImage',
      title: 'Revenue — Foto derecha',
      type: 'image',
      options: { hotspot: true },
    }),

    // ── SERVICIOS (3 cards con foto) ──────────────────────
    defineField({
      name: 'servicesEyebrowEs',
      title: 'Servicios — Eyebrow (Español)',
      type: 'string',
      initialValue: 'Servicios',
    }),
    defineField({
      name: 'servicesEyebrowEn',
      title: 'Servicios — Eyebrow (English)',
      type: 'string',
      initialValue: 'Services',
    }),
    defineField({
      name: 'servicesTitleEs',
      title: 'Servicios — Título (Español)',
      type: 'string',
    }),
    defineField({
      name: 'servicesTitleEn',
      title: 'Servicios — Título (English)',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Servicios — Cards (3)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'image', title: 'Foto', type: 'image', options: { hotspot: true } },
          { name: 'titleEs', title: 'Título (Español)', type: 'string' },
          { name: 'titleEn', title: 'Título (English)', type: 'string' },
          { name: 'subtitleEs', title: 'Subtítulo itálica (Español)', type: 'string' },
          { name: 'subtitleEn', title: 'Subtítulo itálica (English)', type: 'string' },
          { name: 'descriptionEs', title: 'Descripción (Español)', type: 'text', rows: 3 },
          { name: 'descriptionEn', title: 'Descripción (English)', type: 'text', rows: 3 },
          { name: 'readMoreLabelEs', title: 'Botón "Leer más" (Español)', type: 'string', initialValue: 'Leer más' },
          { name: 'readMoreLabelEn', title: 'Botón "Read more" (English)', type: 'string', initialValue: 'Read more' },
          { name: 'readMoreUrl', title: 'URL del botón', type: 'url' },
        ],
        preview: { select: { title: 'titleEs', media: 'image' } },
      }],
      validation: (Rule) => Rule.max(3),
    }),

    // ── SECCIÓN VERDE CON HIGHLIGHT ───────────────────────
    defineField({
      name: 'highlightBodyEs',
      title: 'Verde — Texto con destacados (Español)',
      description: 'Seleccioná palabras y aplicá "Destacado (verde lima)"',
      type: 'array',
      of: [highlightBlock],
    }),
    defineField({
      name: 'highlightBodyEn',
      title: 'Verde — Texto con destacados (English)',
      type: 'array',
      of: [highlightBlock],
    }),
    defineField({
      name: 'highlightImage',
      title: 'Verde — Foto izquierda',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'highlightDescriptionEs',
      title: 'Verde — Texto derecho pequeño (Español)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'highlightDescriptionEn',
      title: 'Verde — Texto derecho pequeño (English)',
      type: 'text',
      rows: 2,
    }),

    // ── FAQ ───────────────────────────────────────────────
    defineField({
      name: 'faqTitleEs',
      title: 'FAQ — Título (Español)',
      type: 'string',
      initialValue: 'Preguntas frecuentes',
    }),
    defineField({
      name: 'faqTitleEn',
      title: 'FAQ — Título (English)',
      type: 'string',
      initialValue: 'Frequently asked questions',
    }),
    defineField({
      name: 'faqItems',
      title: 'FAQ — Preguntas y respuestas',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'questionEs', title: 'Pregunta (Español)', type: 'string' },
          { name: 'questionEn', title: 'Pregunta (English)', type: 'string' },
          { name: 'answerEs', title: 'Respuesta (Español)', type: 'text', rows: 3 },
          { name: 'answerEn', title: 'Respuesta (English)', type: 'text', rows: 3 },
        ],
        preview: { select: { title: 'questionEs' } },
      }],
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