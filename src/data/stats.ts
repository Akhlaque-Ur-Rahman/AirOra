export interface Stat {
    value: number;
    suffix: string;
    label: string;
    duration: number;
}

export const stats: Stat[] = [
    { value: 500, suffix: '+', label: 'Projects Completed', duration: 2 },
    { value: 350, suffix: '+', label: 'Happy Clients', duration: 2 },
    { value: 18, suffix: '+', label: 'Years Experience', duration: 1.5 },
    { value: 50, suffix: '+', label: 'Expert Technicians', duration: 1.5 },
];
