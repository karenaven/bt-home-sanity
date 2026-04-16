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
            type: 'string',
            description: 'Ej: Sentirse en casa, estés donde estés',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroTitleEn',
            title: 'Hero — Título (English)',
            type: 'string',
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
            name: 'heroCtaLabel',
            title: 'Hero — Botón CTA (texto)',
            type: 'string',
            description: 'Ej: Reservar',
        }),
        defineField({
            name: 'heroCtaUrl',
            title: 'Hero — Botón CTA (URL Hostify)',
            type: 'url',
            description: 'URL de Hostify para reservas',
        }),

        //--SEARCH ────────────────────────────────────────────
        defineField({
            name: 'destination',
            title: 'Destino — Placeholder',
            type: 'string',
            description: 'Ej: Destino'
        }),

        defineField({
            name: 'checkInEs',
            title: 'Check-in — Placeholder (Español)',
            type: 'string',
            description: 'Ej: Check-in'
        }),

        defineField({
            name: 'checkInEn',
            title: 'Check-in — Placeholder (English)',
            type: 'string',
            description: 'Ej: Check-in'
        }),

        defineField({
            name: 'checkOutEs',
            title: 'Check-out — Placeholder (Español)',
            type: 'string',
            description: 'Ej: Check-out'
        }),

        defineField({
            name: 'checkOutEn',
            title: 'Check-out — Placeholder (English)',
            type: 'string',
            description: 'Ej: Check-out'
        }),

        defineField({
            name: 'guestsEs',
            title: 'Huéspedes — Placeholder (Español)',
            type: 'string',
            description: 'Ej: Huéspedes'
        }),

        defineField({
            name: 'guestsEn',
            title: 'Huéspedes — Placeholder (English)',
            type: 'string',
            description: 'Ej: Guests'
        }),

        defineField({
            name: 'searchEs',
            title: 'Botón de búsqueda — Label (Español)',
            type: 'string',
            description: 'Ej: Buscar',
        }),

        defineField({
            name: 'searchEn',
            title: 'Botón de búsqueda — Label (English)',
            type: 'string',
            description: 'Ej: Search',
        }),

        // ── DESTINATIONS SECTION ──────────────────────────────
        defineField({
            name: 'destinationsEyebrowEs',
            title: 'Destinos — Eyebrow (sobre el título) (Español)',
            type: 'string',
            description: 'Texto pequeño arriba del título. Ej: Destinos',
        }),
        defineField({
            name: 'destinationsEyebrowEn',
            title: 'Destinos — Eyebrow (sobre el título) (English)',
            type: 'string',
            description: 'Texto pequeño arriba del título. Ej: Destinos',
        }),
        defineField({
            name: 'destinationsTitleEs',
            title: 'Destinos — Título sección (Español)',
            type: 'string',
            description: 'Ej: Su estadía perfecta lo espera en nuestros destinos seleccionados',
        }),
        defineField({
            name: 'destinationsTitleEn',
            title: 'Destinos — Título sección (English)',
            type: 'string',
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

        // ── FEATURED PROPERTIES ───────────────────────────────
        defineField({
            name: 'featuredEyebrowEs',
            title: 'Destacadas — Eyebrow (Español)',
            type: 'string',
            description: 'Propiedades destacadas',
        }),
        defineField({
            name: 'featuredEyebrowEn',
            title: 'Destacadas — Eyebrow (English)',
            type: 'string',
            description: 'Featured Properties',
        }),
        defineField({
            name: 'featuredReserveLabelEs',
            title: 'Destacadas — Botón reservar (Español)',
            type: 'string',
            description: 'Reservar propiedad',
        }),
        defineField({
            name: 'featuredReserveLabelEn',
            title: 'Destacadas — Botón reservar (English)',
            type: 'string',
            description: 'Reserve property',
        }),

        // ── EXPERIENCE SECTION ────────────────────────────────
        defineField({
            name: 'experienceEyebrowEs',
            title: 'Experiencia — Eyebrow (Español)',
            type: 'string',
            description: 'Experiencia BTH',
        }),
        defineField({
            name: 'experienceEyebrowEn',
            title: 'Experiencia — Eyebrow (English)',
            type: 'string',
            description: 'BTH Experience',
        }),
        defineField({
            name: 'experienceTitleEs',
            title: 'Experiencia — Título (Español)',
            type: 'string',
            description: 'Ej: Hospitalidad pensada en cada detalle',
        }),
        defineField({
            name: 'experienceTitleEn',
            title: 'Experiencia — Título (English)',
            type: 'string',
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

        // ── BOOK NOW + FOOTER ─────────────────────────────────
        defineField({
            name: 'bookNowLabelEs',
            title: 'Book Now — Texto del botón (Español)',
            type: 'string',
            description: 'BOOK NOW',
        }),
        defineField({
            name: 'bookNowLabelEn',
            title: 'Book Now — Texto del botón (English)',
            type: 'string',
            description: 'BOOK NOW',
        }),
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