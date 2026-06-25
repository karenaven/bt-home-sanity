import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'homePage',
    title: 'Página Home',
    type: 'document',
    fields: [
        // ── HERO ──────────────────────────────────────────────
        defineField({
            name: 'heroImage',
            title: 'Hero — Imagen de fondo',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroTitleEs',
            title: 'Hero — Título (Español)',
            type: 'text',
            rows: 3,
            description: 'Ej: Sentirse en casa, estés donde estés',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroTitleEn',
            title: 'Hero — Título (English)',
            type: 'text',
            rows: 3,
            description: 'Ej: Feel at home, wherever you are',
            validation: (Rule) => Rule.required(),
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
            name: 'heroCtaUrl',
            title: 'Hero — Botón CTA (URL Hostify)',
            type: 'url',
            description: 'URL de Hostify para reservas',
        }),

        // ── DESTINATIONS SECTION ──────────────────────────────
        defineField({
            name: 'destinationsTitleEs',
            title: 'Destinos — Título sección (Español)',
            type: 'text',
            rows: 2,
            description: 'Ej: Su estadía perfecta lo espera en nuestros destinos seleccionados',
        }),
        defineField({
            name: 'destinationsTitleEn',
            title: 'Destinos — Título sección (English)',
            type: 'text',
            rows: 2,
            description: 'Ej: Your perfect stay awaits in our selected destinations',
        }),
        defineField({
            name: 'destinationsExploreLabelEs',
            title: 'Destinos — Texto "Explorar" (Español)',
            type: 'string',
            description: 'Texto del link bajo cada card. Ej: Explorar',
        }),
        defineField({
            name: 'destinationsExploreLabelEn',
            title: 'Destinos — Texto "Explore" (English)',
            type: 'string',
            description: 'Explore',
        }),
        defineField({
            name: 'destinationsFooterLabelEs',
            title: 'Destinos — Texto debajo de las cards (Español)',
            type: 'string',
            description: 'Ej: Espacios seleccionados en destinos que inspiran, pensados para que cada estadía se viva con comodidad, diseño y el cuidado que distingue a BT Homes.',
        }),
        defineField({
            name: 'destinationsFooterLabelEn',
            title: 'Destinos — Texto debajo de las cards (English)',
            type: 'string',
            description: 'Ej: Selected spaces in destinations that inspire, designed so that every stay is experienced with comfort, design and the care that distinguishes BT Homes.',
        }),

        // ── EXPERIENCE SECTION ────────────────────────────────
        defineField({
            name: 'experienceTitleEs',
            title: 'Experiencia — Título (Español)',
            type: 'text',
            rows: 2,
            description: 'Ej: Hospitalidad pensada en cada detalle',
        }),
        defineField({
            name: 'experienceTitleEn',
            title: 'Experiencia — Título (English)',
            type: 'text',
            rows: 2,
            description: 'Ej: Hospitality crafted in every detail',
        }),
        defineField({
            name: 'experienceCells',
            title: 'Experiencia — Celdas (exactamente 6)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'experienceCell',
                    title: 'Celda',
                    fields: [
                        {
                            name: 'cellType',
                            title: 'Tipo de celda',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Foto', value: 'image' },
                                    { title: 'Texto (card verde)', value: 'text' },
                                ],
                                layout: 'radio',
                            },
                            description: 'image',
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            name: 'image',
                            title: 'Imagen',
                            type: 'image',
                            options: { hotspot: true },
                            hidden: ({ parent }: any) => parent?.cellType !== 'image',
                        },
                        {
                            name: 'titleEs',
                            title: 'Título (Español)',
                            type: 'string',
                            hidden: ({ parent }: any) => parent?.cellType !== 'text',
                        },
                        {
                            name: 'titleEn',
                            title: 'Título (English)',
                            type: 'string',
                            hidden: ({ parent }: any) => parent?.cellType !== 'text',
                        },
                        {
                            name: 'bodyEs',
                            title: 'Texto (Español)',
                            type: 'text',
                            rows: 3,
                            hidden: ({ parent }: any) => parent?.cellType !== 'text',
                        },
                        {
                            name: 'bodyEn',
                            title: 'Texto (English)',
                            type: 'text',
                            rows: 3,
                            hidden: ({ parent }: any) => parent?.cellType !== 'text',
                        },
                    ],
                    preview: {
                        select: {
                            cellType: 'cellType',
                            title: 'titleEs',
                            media: 'image',
                        },
                        prepare({ cellType, title, media }: any) {
                            return {
                                title: cellType === 'image' ? '📷 Foto' : `✏️ ${title ?? 'Texto'}`,
                                media: cellType === 'image' ? media : undefined,
                            }
                        },
                    },
                },
            ],
            validation: (Rule) => Rule.length(6).error('Debe tener exactamente 6 celdas'),
        }),

        // ── OWNERS / PROPIETARIOS SECTION ────────────────────
        defineField({
            name: 'ownersBodyEs',
            title: 'Propietarios — Texto principal (Español)',
            type: 'array',
            description: 'Seleccioná las palabras que quieras destacar en verde lima y aplicales la marca "Destacado"',
            of: [
                {
                    type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Bold', value: 'strong' },
                            { title: 'Italic', value: 'em' },
                        ],
                        annotations: [
                            {
                                name: 'highlight',
                                type: 'object',
                                title: 'Destacado (verde lima)',
                                fields: [
                                    {
                                        name: 'active',
                                        type: 'boolean',
                                        title: 'Activo',
                                        initialValue: true,
                                    },
                                ],
                            },
                        ],
                    },
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        }),
        defineField({
            name: 'ownersBodyEn',
            title: 'Propietarios — Texto principal (English)',
            type: 'array',
            of: [
                {
                    type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Bold', value: 'strong' },
                            { title: 'Italic', value: 'em' },
                        ],
                        annotations: [
                            {
                                name: 'highlight',
                                type: 'object',
                                title: 'Destacado (verde lima)',
                                fields: [
                                    {
                                        name: 'active',
                                        type: 'boolean',
                                        title: 'Activo',
                                        initialValue: true,
                                    },
                                ],
                            },
                        ],
                    },
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        }),
        defineField({
            name: 'ownersImages',
            title: 'Propietarios — Fotos del carrusel',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            description: 'Podés agregar las fotos que quieras — se muestran como carrusel',
        }),

        // ── FOOTER ─────────────────────────────────
        defineField({
            name: 'footerTaglineEs',
            title: 'Footer — Tagline (Español)',
            type: 'string',
            description: 'Ej: Alquileres temporarios y oportunidades de inversión en Argentina y México.',
        }),
        defineField({
            name: 'footerTaglineEn',
            title: 'Footer — Tagline (English)',
            type: 'string',
        }),
        defineField({
            name: 'footerEmailPrimary',
            title: 'Footer — Email principal',
            type: 'string',
            description: 'Ej: nicolas@bthomes.com.mx',
        }),
        defineField({
            name: 'footerEmailSecondary',
            title: 'Footer — Email secundario',
            type: 'string',
        }),
        defineField({
            name: 'footerPhoneArg',
            title: 'Footer — Teléfono ARG',
            type: 'string',
            description: 'Ej: +5491140447714',
        }),
        defineField({
            name: 'footerPhoneMex',
            title: 'Footer — Teléfono MEX',
            type: 'string',
        }),
        defineField({
            name: 'footerWebsite',
            title: 'Footer — Sitio web principal',
            type: 'string',
            description: 'Ej: www.bthomes.world',
        }),
        defineField({
            name: 'footerSiteArg',
            title: 'Footer — Sitio ARG',
            type: 'string',
            description: 'Ej: bthomes.arg',
        }),
        defineField({
            name: 'footerSiteMex',
            title: 'Footer — Sitio MEX',
            type: 'string',
            description: 'Ej: bthomes.mex',
        }),
        defineField({
            name: 'footerCopyrightEs',
            title: 'Footer — Copyright (Español)',
            type: 'string',
            description: '© Better Together Homes | Todos los derechos reservados.',
        }),
        defineField({
            name: 'footerCopyrightEn',
            title: 'Footer — Copyright (English)',
            type: 'string',
            description: '© Better Together Homes | All rights reserved.',
        }),

        // ── SEO ───────────────────────────────────────────────
        defineField({
            name: 'seoTitleEs',
            title: 'SEO — Título página (Español)',
            type: 'string',
        }),
        defineField({
            name: 'seoTitleEn',
            title: 'SEO — Título página (English)',
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