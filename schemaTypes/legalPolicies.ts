// sanity-project/schemaTypes/legalPolicies.ts

import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export default defineType({
    name: 'legalPolicies',
    title: 'Politicas y terminos',
    type: 'document',
    icon: DocumentIcon,
    fields: [
        defineField({
            name: 'policyType',
            title: 'Tipo de política',
            type: 'string',
            options: {
                list: [
                    { title: 'Política de privacidad', value: 'privacy' },
                    { title: 'Términos y condiciones', value: 'terms' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'title_es',
            title: 'Titulo (Español)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'title_en',
            title: 'Titulo (English)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'content_es',
            title: 'Contenido (Español)',
            type: 'array',
            of: [
                {
                    type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Underline', value: 'underline' },
                        ],
                        annotations: [
                            {
                                title: 'Link',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url',
                                    },
                                ],
                            },
                        ],
                    },
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' },
                    ],
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'content_en',
            title: 'Contenido (English)',
            type: 'array',
            of: [
                {
                    type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Underline', value: 'underline' },
                        ],
                        annotations: [
                            {
                                title: 'Link',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url',
                                    },
                                ],
                            },
                        ],
                    },
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' },
                    ],
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'lastUpdated',
            title: 'Ultima actualización',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),

        defineField({
            name: 'active',
            title: 'Activo',
            type: 'boolean',
            description: 'Si está activo, se mostrará en el sitio web',
            initialValue: true,
        }),
    ],

    preview: {
        select: {
            policyType: 'policyType',
            title_es: 'title_es',
            active: 'active',
        },
        prepare(selection) {
            const { policyType, title_es, active } = selection
            const status = active ? '✓' : '✗'
            return {
                title: `${status} ${policyType === 'privacy' ? '🔒' : '📋'} ${title_es}`,
                subtitle: policyType === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions',
            }
        },
    },
})