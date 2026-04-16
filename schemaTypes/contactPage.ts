import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Página Contacto',
  type: 'document',
  fields: [

    // ── HERO / FORMULARIO ─────────────────────────────────
    defineField({
      name: 'titleEs',
      title: 'Título (Español)',
      type: 'string',
      initialValue: '¡Hablemos!',
    }),
    defineField({
      name: 'titleEn',
      title: 'Título (English)',
      type: 'string',
      initialValue: "Let's talk!",
    }),
    defineField({
      name: 'descriptionEs',
      title: 'Descripción (Español)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Descripción (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Foto lateral',
      type: 'image',
      options: { hotspot: true },
    }),

    // ── LABELS DEL FORMULARIO ─────────────────────────────
    defineField({
      name: 'nameLabelEs',
      title: 'Formulario — Label nombre (Español)',
      type: 'string',
      initialValue: 'Nombre',
    }),
    defineField({
      name: 'nameLabelEn',
      title: 'Formulario — Label nombre (English)',
      type: 'string',
      initialValue: 'Name',
    }),
    defineField({
      name: 'emailLabelEs',
      title: 'Formulario — Label email (Español)',
      type: 'string',
      initialValue: 'Email',
    }),
    defineField({
      name: 'emailLabelEn',
      title: 'Formulario — Label email (English)',
      type: 'string',
      initialValue: 'Email',
    }),
    defineField({
      name: 'messageLabelEs',
      title: 'Formulario — Label mensaje (Español)',
      type: 'string',
      initialValue: 'Mensaje',
    }),
    defineField({
      name: 'messageLabelEn',
      title: 'Formulario — Label mensaje (English)',
      type: 'string',
      initialValue: 'Message',
    }),
    defineField({
      name: 'submitLabelEs',
      title: 'Formulario — Botón enviar (Español)',
      type: 'string',
      initialValue: 'Enviar',
    }),
    defineField({
      name: 'submitLabelEn',
      title: 'Formulario — Botón enviar (English)',
      type: 'string',
      initialValue: 'Send',
    }),
    defineField({
      name: 'successMessageEs',
      title: 'Formulario — Mensaje éxito (Español)',
      type: 'string',
      initialValue: '¡Mensaje enviado! Te respondemos pronto.',
    }),
    defineField({
      name: 'successMessageEn',
      title: 'Formulario — Mensaje éxito (English)',
      type: 'string',
      initialValue: 'Message sent! We\'ll get back to you soon.',
    }),

    // ── CONFIG DE ENVÍO ───────────────────────────────────
    defineField({
      name: 'adminEmail',
      title: 'Email destino (recibe los formularios)',
      type: 'string',
      description: 'Ej: nicolas@bthomes.com.mx',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emailSubject',
      title: 'Asunto del email',
      type: 'string',
      initialValue: 'Nuevo contacto desde BT Homes',
    }),

    // ── MAPA ─────────────────────────────────────────────
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Maps — URL del embed',
      type: 'url',
      description: 'En Google Maps: Compartir → Incorporar un mapa → copiá el src del iframe',
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
  ],
  preview: {
    select: { title: 'titleEs' },
  },
})