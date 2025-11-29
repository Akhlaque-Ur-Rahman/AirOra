export interface Project {
    title: string;
    category: string;
    description: string;
    image: string;
}

export const projects: Project[] = [
    {
        title: 'Corporate Office Complex',
        category: 'Commercial HVAC',
        description:
            'Complete HVAC system installation for a 20-story office building with advanced climate control.',
        image: '/images/placeholder.jpg',
    },
    {
        title: 'Industrial Manufacturing Plant',
        category: 'Industrial Cooling',
        description:
            'Custom refrigeration and cooling system for a large-scale manufacturing facility.',
        image: '/images/placeholder.jpg',
    },
    {
        title: 'Modern Architecture Complex',
        category: 'Smart Climate Systems',
        description:
            'IoT-enabled HVAC solution with automated climate control for residential towers.',
        image: '/images/placeholder.jpg',
    },
    {
        title: 'Healthcare Facility Upgrade',
        category: 'Medical HVAC',
        description:
            'Specialized air filtration and climate control system for a major hospital.',
        image: '/images/placeholder.jpg',
    },
    {
        title: 'Retail Chain Expansion',
        category: 'Commercial Solutions',
        description:
            'Multi-location HVAC installation and maintenance program for retail stores.',
        image: '/images/placeholder.jpg',
    },
    {
        title: 'Data Center Cooling',
        category: 'Precision Cooling',
        description:
            'High-precision cooling system for a mission-critical data center facility.',
        image: '/images/placeholder.jpg',
    },
];
