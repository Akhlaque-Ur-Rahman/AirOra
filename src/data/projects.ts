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
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    },
    {
        title: 'Industrial Manufacturing Plant',
        category: 'Industrial Cooling',
        description:
            'Custom refrigeration and cooling system for a large-scale manufacturing facility.',
        image: 'https://images.unsplash.com/photo-1597004899795-4d19bdf45c54?auto=format&fit=crop&w=1600&q=80',
    },
    {
        title: 'Modern Architecture Complex',
        category: 'Smart Climate Systems',
        description:
            'IoT-enabled HVAC solution with automated climate control for residential towers.',
        image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80',
    },
    {
        title: 'Healthcare Facility Upgrade',
        category: 'Medical HVAC',
        description:
            'Specialized air filtration and climate control system for a major hospital.',
        image: 'https://images.unsplash.com/photo-1606399752566-13228cf5aa8d?auto=format&fit=crop&w=1600&q=80',
    },
    {
        title: 'Retail Chain Expansion',
        category: 'Commercial Solutions',
        description:
            'Multi-location HVAC installation and maintenance program for retail stores.',
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80',
    },
    {
        title: 'Data Center Cooling',
        category: 'Precision Cooling',
        description:
            'High-precision cooling system for a mission-critical data center facility.',
        image: 'https://images.unsplash.com/photo-1581092580494-7c8a7e1f7a6f?auto=format&fit=crop&w=1600&q=80',
    },
];
