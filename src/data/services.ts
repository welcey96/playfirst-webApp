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


export interface GenericType {
    id: number;
    name: string;
}