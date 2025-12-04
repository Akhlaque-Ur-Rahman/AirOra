import {
    Award,
    Clock,
    Users,
    CheckCircle,
    TrendingUp,
    HeadphonesIcon,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const features: Feature[] = [
    {
        icon: Award,
        title: 'Certified Engineering Team',
        description:
            'Our staff includes ISHRAE-certified engineers and technicians proficient in the latest cooling technologies.',
    },
    {
        icon: Clock,
        title: '24/7 Rapid Response',
        description:
            'Critical support infrastructure ensuring minimal downtime for mission-critical industrial cooling systems.',
    },
    {
        icon: Users,
        title: 'Decades of Expertise',
        description:
            'Over 18 years of specialized experience in handling complex commercial HVAC installations across India.',
    },
    {
        icon: CheckCircle,
        title: 'Performance Assurance',
        description:
            'We validate every installation with rigorous commissioning protocols to ensure design parameters are met.',
    },
    {
        icon: TrendingUp,
        title: 'Energy Optimization',
        description:
            'Focus on high-EER/SEER equipment and smart controls to minimize operational costs and grid dependency.',
    },
    {
        icon: HeadphonesIcon,
        title: 'Lifecycle Asset Management',
        description:
            'Long-term partnership approach focusing on total cost of ownership and sustained system performance.',
    },
];
