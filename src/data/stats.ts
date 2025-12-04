export interface Stat {
    value: number;
    suffix: string;
    label: string;
    duration: number;
}

export const stats: Stat[] = [
    { value: 500, suffix: '+', label: 'Industrial Projects', duration: 2 },
    { value: 350, suffix: '+', label: 'Corporate Clients', duration: 2 },
    { value: 18, suffix: '+', label: 'Years Engineering', duration: 1.5 },
    { value: 50, suffix: '+', label: 'Certified Engineers', duration: 1.5 },
];
