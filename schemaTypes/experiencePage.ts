import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'experiencePage',
    title: 'Página Experiencia BTH',
    type: 'document',
    fields: [

        // ── HERO ──────────────────────────────────────────────
        defineField({
            name: 'heroEyebrowEs',
            title: 'Hero — Eyebrow (Español)',
            type: 'string',
            description: 'Experiencia BTH',
        }),
        defineField({
            name: 'heroEyebrowEn',
            title: 'Hero — Eyebrow (English)',
            type: 'string',
            description: 'Experience BTH',
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
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'heroSubtitleEn',
            title: 'Hero — Subtítulo (English)',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero — Foto full-width',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),

        // ── STATS ─────────────────────────────────────────────
        defineField({
            name: 'statsEyebrowEs',
            title: 'Stats — Eyebrow (Español)',
            type: 'string',
            description: 'Una experiencia pensada para sentirse en casa',
        }),
        defineField({
            name: 'statsEyebrowEn',
            title: 'Stats — Eyebrow (English)',
            type: 'string',
            description: 'An experience designed to feel like home',
        }),
        defineField({
            name: 'statsBodyEs',
            title: 'Stats — Párrafo (Español)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'statsBodyEn',
            title: 'Stats — Párrafo (English)',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'stats',
            title: 'Stats — Cards (exactamente 4)',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'value', title: 'Valor', type: 'string', description: 'Ej: +10K, 4.8/5' },
                    { name: 'labelEs', title: 'Etiqueta (Español)', type: 'string' },
                    { name: 'labelEn', title: 'Etiqueta (English)', type: 'string' },
                    {
                        name: 'icon',
                        title: 'Ícono',
                        type: 'string',
                        options: {
                            list: [
                                { title: 'Ninguno', value: 'none' },
                                { title: 'Estrella', value: 'star' },
                                { title: 'Medalla', value: 'medal' },
                            ],
                            layout: 'radio',
                        },
                        description: 'none',
                    },
                ],
                preview: {
                    select: { title: 'value', subtitle: 'labelEs' },
                },
            }],
            validation: (Rule) => Rule.max(4),
        }),
        defineField({
            name: 'statsImage',
            title: 'Stats — Foto debajo de las cards',
            type: 'image',
            options: { hotspot: true },
        }),

        // ── INCLUDES ──────────────────────────────────────────
        defineField({
            name: 'includesEyebrowEs',
            title: 'Incluye — Eyebrow (Español)',
            type: 'string',
            description: '¿Qué incluye su estadía?',
        }),
        defineField({
            name: 'includesEyebrowEn',
            title: 'Incluye — Eyebrow (English)',
            type: 'string',
            description: 'What is included in your stay?',
        }),
        defineField({
            name: 'includesTitleEs',
            title: 'Incluye — Título (Español)',
            type: 'string',
        }),
        defineField({
            name: 'includesTitleEn',
            title: 'Incluye — Título (English)',
            type: 'string',
        }),
        defineField({
            name: 'includesDescriptionEs',
            title: 'Incluye — Descripción (Español)',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'includesDescriptionEn',
            title: 'Incluye — Descripción (English)',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'includesImage',
            title: 'Incluye — Foto',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'includesItems',
            title: 'Incluye — Lista de amenities',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'textEs', title: 'Texto (Español)', type: 'string' },
                    { name: 'textEn', title: 'Texto (English)', type: 'string' },
                ],
                preview: { select: { title: 'textEs' } },
            }],
        }),

        // ── ADDITIONAL SERVICES ───────────────────────────────
        defineField({
            name: 'servicesEyebrowEs',
            title: 'Servicios — Eyebrow (Español)',
            type: 'string',
            description: 'Servicios adicionales',
        }),
        defineField({
            name: 'servicesEyebrowEn',
            title: 'Servicios — Eyebrow (English)',
            type: 'string',
            description: 'Additional services',
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
            title: 'Servicios — Items del carrusel',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'image', title: 'Foto', type: 'image', options: { hotspot: true } },
                    { name: 'titleEs', title: 'Título (Español)', type: 'string' },
                    { name: 'titleEn', title: 'Título (English)', type: 'string' },
                    { name: 'descriptionEs', title: 'Descripción (Español)', type: 'text', rows: 2 },
                    { name: 'descriptionEn', title: 'Descripción (English)', type: 'text', rows: 2 },
                ],
                preview: {
                    select: { title: 'titleEs', media: 'image' },
                },
            }],
        }),

        // ── TESTIMONIALS ──────────────────────────────────────
        defineField({
            name: 'testimonialsEyebrowEs',
            title: 'Testimonios — Eyebrow (Español)',
            type: 'string',
            description: 'Lo que dicen quienes confían en nosotros',
        }),
        defineField({
            name: 'testimonialsEyebrowEn',
            title: 'Testimonios — Eyebrow (English)',
            type: 'string',
            description: 'What they say about us',
        }),
        defineField({
            name: 'testimonialsImage',
            title: 'Testimonios — Foto full-width',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'testimonials',
            title: 'Testimonios — Lista',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'quote', title: 'Cita', type: 'text', rows: 3 },
                    { name: 'name', title: 'Nombre', type: 'string' },
                    { name: 'role', title: 'Rol / Ciudad', type: 'string', description: 'Ej: Propietario, Buenos Aires' },
                    { name: 'avatar', title: 'Foto de perfil', type: 'image', options: { hotspot: true } },
                ],
                preview: {
                    select: { title: 'name', subtitle: 'role', media: 'avatar' },
                },
            }],
        }),

        // ── PARTNERS ──────────────────────────────────────────
        defineField({
            name: 'partnersTitleEs',
            title: 'Partners — Título (Español)',
            type: 'string',
            description: 'Partners',
        }),
        defineField({
            name: 'partnersTitleEn',
            title: 'Partners — Título (English)',
            type: 'string',
            description: 'Partners',
        }),
        defineField({
            name: 'partnersDescriptionEs',
            title: 'Partners — Descripción (Español)',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'partnersDescriptionEn',
            title: 'Partners — Descripción (English)',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'partnerLogos',
            title: 'Partners — Logos',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'name', title: 'Nombre del partner', type: 'string' },
                    { name: 'logo', title: 'Logo', type: 'image' },
                    { name: 'url', title: 'URL', type: 'url' },
                ],
                preview: {
                    select: { title: 'name', media: 'logo' },
                },
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