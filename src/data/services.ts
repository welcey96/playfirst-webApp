export const Services: GenericType[] =
    [
        {
            id: 1,
            name: 'Occupational Therapy'
        },
        {
            id: 2,
            name: 'Physical Therapy'
        },
        {
            id: 3,
            name: 'Speech Therapy'
        },
        {
            id: 4,
            name: 'PlayGroup'
        },
        {
            id: 5,
            name: 'SPED'
        },
        {
            id: 6,
            name: 'Tele-Therapy'
        },
    ]

export const Position: GenericType[] =
    [
        {
            id: 1,
            name: 'Occupational Therapist'
        },
        {
            id: 2,
            name: 'Physical Therapist'
        },
        {
            id: 3,
            name: 'Speech Therapist'
        },
        {
            id: 4,
            name: 'PlayGroup'
        },
        {
            id: 5,
            name: 'SPED'
        },
        {
            id: 6,
            name: 'Tele-Therapy'
        },
    ]


export interface GenericType {
    id: number;
    name: string;
}