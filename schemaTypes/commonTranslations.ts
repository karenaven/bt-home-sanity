import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'commonTranslations',
    title: 'Traducciones y configuraciones comunes',
    type: 'document',
    fields: [
        // ── ABOUT US ──────────────────────────────────────────────────
        defineField({
            name: 'aboutUsEs',
            title: 'Quiénes Somos (Español)',
            type: 'string',
            initialValue: '¿Quiénes somos?'
        }),
        defineField({
            name: 'aboutUsEn',
            title: 'Quiénes Somos (English)',
            type: 'string',
            initialValue: 'About us'
        }),

        // ── CONTACT ─────────────────────────────────────────────
        defineField({
            name: 'contactEs',
            title: 'Contacto (Español)',
            type: 'string',
            initialValue: 'Contacto',
        }),
        defineField({
            name: 'contactEn',
            title: 'Contacto (English)',
            type: 'string',
            initialValue: 'Contact',
        }),
        defineField({
            name: 'socialEs',
            title: 'Social (Español)',
            type: 'string',
            initialValue: 'Social',
        }),
        defineField({
            name: 'socialEn',
            title: 'Social (English)',
            type: 'string',
            initialValue: 'Social',
        }),

        // ── BLOG ───────────────────────────────────────────────
        defineField({
            name: 'blogEs',
            title: 'Blog (Español)',
            type: 'string',
            initialValue: 'Blog',
        }),
        defineField({
            name: 'blogEn',
            title: 'Blog (English)',
            type: 'string',
            initialValue: 'Blog',
        }),

        // ── OUR DIFFERENTIATOR ────────────────────────────────────────
        defineField({
            name: 'ourDifferentiatorEs',
            title: 'Nuestro Diferencial (Español)',
            type: 'string',
            initialValue: 'Nuestro diferencial'
        }),
        defineField({
            name: 'ourDifferentiatorEn',
            title: 'Nuestro Diferencial (English)',
            type: 'string',
            initialValue: 'Our differentiator'
        }),

        // ── FEATURED PROPERTIES ───────────────────────────────────────
        defineField({
            name: 'featuredPropertiesEs',
            title: 'Propiedades Destacadas (Español)',
            type: 'string',
            initialValue: 'Propiedades destacadas',
        }),
        defineField({
            name: 'featuredPropertiesEn',
            title: 'Propiedades Destacadas (English)',
            type: 'string',
            initialValue: 'Featured Properties',
        }),
        defineField({
            name: 'featuredReserveLabelEs',
            title: 'Destacadas — Botón reservar (Español)',
            type: 'string',
            initialValue: 'Reservar propiedad',
        }),
        defineField({
            name: 'featuredReserveLabelEn',
            title: 'Destacadas — Botón reservar (English)',
            type: 'string',
            initialValue: 'Book property',
        }),
        defineField({
            name: 'bookLabelEs',
            title: 'Botón reservar (Español)',
            type: 'string',
            initialValue: 'Reservar',
        }),
        defineField({
            name: 'bookLabelEn',
            title: 'Botón reservar (English)',
            type: 'string',
            initialValue: 'Book',
        }),

        // ── OWNERS ────────────────────────────────────────────────────
        defineField({
            name: 'ownersEs',
            title: 'Propietarios (Español)',
            type: 'string',
            initialValue: 'Propietarios',
        }),
        defineField({
            name: 'ownersEn',
            title: 'Propietarios (English)',
            type: 'string',
            initialValue: 'Owners',
        }),

        // ── OUR PHILOSOPHY ────────────────────────────────────────────
        defineField({
            name: 'ourPhilosophyEs',
            title: 'Nuestra Filosofía (Español)',
            type: 'string',
            initialValue: 'Nuestra filosofía',
        }),
        defineField({
            name: 'ourPhilosophyEn',
            title: 'Nuestra Filosofía (English)',
            type: 'string',
            initialValue: 'Our philosophy',
        }),


        // ── ACTIVE REVENUE MANAGEMENT ─────────────────────────────────
        defineField({
            name: 'activeRevenueManagementEs',
            title: 'Revenue Management Activo (Español)',
            type: 'string',
            initialValue: 'Revenue management activo',
        }),
        defineField({
            name: 'activeRevenueManagementEn',
            title: 'Revenue Management Activo (English)',
            type: 'string',
            initialValue: 'Active revenue management',
        }),

        // ── SERVICES ──────────────────────────────────────────────────
        defineField({
            name: 'servicesEs',
            title: 'Servicios (Español)',
            type: 'string',
            initialValue: 'Servicios',
        }),
        defineField({
            name: 'servicesEn',
            title: 'Servicios (English)',
            type: 'string',
            initialValue: 'Services',
        }),
        // ── READ MORE ─────────────────────────────────────────────────
        defineField({
            name: 'readMoreEs',
            title: 'Leer Más (Español)',
            type: 'string',
            initialValue: 'Leer más',
        }),
        defineField({
            name: 'readMoreEn',
            title: 'Leer Más (English)',
            type: 'string',
            initialValue: 'Read more',
        }),

        //-DESTINATIONS ───────────────────────────────────────────────
        defineField({
            name: 'destinationsEs',
            title: 'Destinos (Español)',
            type: 'string',
            initialValue: 'Destinos',
        }),

        defineField({
            name: 'destinationsEn',
            title: 'Destinos (English)',
            type: 'string',
            initialValue: 'Destinos',
        }),

        defineField({
            name: 'destinationEs',
            title: 'Destino — Placeholder (Español)',
            type: 'string',
            initialValue: 'Destino'
        }),

        defineField({
            name: 'destinationEn',
            title: 'Destino — Placeholder (English)',
            type: 'string',
            initialValue: 'Destination'
        }),

        //--SEARCH ────────────────────────────────────────────
        defineField({
            name: 'checkInEs',
            title: 'Check-in — Placeholder (Español)',
            type: 'string',
            initialValue: 'Check-in'
        }),

        defineField({
            name: 'checkInEn',
            title: 'Check-in — Placeholder (English)',
            type: 'string',
            initialValue: 'Check-in'
        }),

        defineField({
            name: 'checkOutEs',
            title: 'Check-out — Placeholder (Español)',
            type: 'string',
            initialValue: 'Check-out'
        }),

        defineField({
            name: 'checkOutEn',
            title: 'Check-out — Placeholder (English)',
            type: 'string',
            initialValue: 'Check-out'
        }),

        defineField({
            name: 'guestsEs',
            title: 'Huéspedes — Placeholder (Español)',
            type: 'string',
            initialValue: 'Huéspedes'
        }),

        defineField({
            name: 'guestsEn',
            title: 'Huéspedes — Placeholder (English)',
            type: 'string',
            initialValue: 'Guests'
        }),

        defineField({
            name: 'searchEs',
            title: 'Botón de búsqueda — Label (Español)',
            type: 'string',
            initialValue: 'Buscar',
        }),

        defineField({
            name: 'searchEn',
            title: 'Botón de búsqueda — Label (English)',
            type: 'string',
            initialValue: 'Search',
        }),
        defineField({
            name: 'bedsEs'
            , title: 'Camas — Placeholder (Español)',
            type: 'string',
            initialValue: 'Camas'
        }),
        defineField({
            name: 'bedsEn',
            title: 'Camas — Placeholder (English)',
            type: 'string',
            initialValue: 'Beds'
        }),
        defineField({
            name: 'bathsEs',
            title: 'Baños — Placeholder (Español)',
            type: 'string',
            initialValue: 'Baños'
        }),
        defineField({
            name: 'bathsEn',
            title: 'Baños — Placeholder (English)',
            type: 'string',
            initialValue: 'Baths'
        }),
        defineField({
            name: 'nightEs',
            title: 'Noches — Placeholder (Español)',
            type: 'string',
            initialValue: 'Noches'
        }),
        defineField({
            name: 'nightEn',
            title: 'Noches — Placeholder (English)',
            type: 'string',
            initialValue: 'Nights'
        }),
        defineField({
            name: 'adultsEs',
            title: 'Adultos — Placeholder (Español)',
            type: 'string',
            initialValue: 'Adultos'
        }),
        defineField({
            name: 'adultsEn',
            title: 'Adultos — Placeholder (English)',
            type: 'string',
            initialValue: 'Adults'
        }),
        defineField({
            name: 'childrenEs',
            title: 'Niños — Placeholder (Español)',
            type: 'string',
            initialValue: 'Niños'
        }),
        defineField({
            name: 'childrenEn',
            title: 'Niños — Placeholder (English)',
            type: 'string',
            initialValue: 'Children'
        }),

        //-EXPERIENCES ───────────────────────────────────────────────
        defineField({
            name: 'experienceEs',
            title: 'Experiencia(Español)',
            type: 'string',
            initialValue: 'Experiencia BTH',
        }),
        defineField({
            name: 'experienceEn',
            title: 'Experiencia(English)',
            type: 'string',
            initialValue: 'BTH Experience',
        }),

        // ── BOOK NOW ─────────────────────────────────
        defineField({
            name: 'bookNowEs',
            title: 'Book Now (Español)',
            type: 'string',
            initialValue: 'BOOK NOW',
        }),
        defineField({
            name: 'bookNowEn',
            title: 'Book Now (English)',
            type: 'string',
            initialValue: 'BOOK NOW',
        }),
        defineField({
            name: 'hostifyBookingUrl',
            title: 'URL de Booking de Hostify',
            type: 'string',
            initialValue: 'https://bthomes.hostify.club',
            description: 'URL base para redirigir a las reservas de Hostify'
        })
    ],

    preview: {
        select: {},
        prepare() {
            return {
                title: 'Traducciones y configuraciones comunes',
                subtitle: 'Edita aquí todas las traducciones compartidas',
            }
        },
    },
})