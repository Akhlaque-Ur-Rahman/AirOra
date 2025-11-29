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
        title: 'Certified Experts',
        description:
            'Our technicians are fully licensed, certified, and trained in the latest HVAC technologies.',
    },
    {
        icon: Clock,
        title: '24/7 Emergency Service',
        description:
            'Round-the-clock support for urgent repairs and maintenance needs.',
    },
    {
        icon: Users,
        title: 'Experienced Team',
        description:
            'Over 18 years of industry experience with hundreds of successful projects.',
    },
    {
        icon: CheckCircle,
        title: 'Quality Guaranteed',
        description:
            'We stand behind our work with comprehensive warranties and satisfaction guarantees.',
    },
    {
        icon: TrendingUp,
        title: 'Energy Efficient',
        description:
            'Solutions designed to reduce energy consumption and lower operational costs.',
    },
    {
        icon: HeadphonesIcon,
        title: 'Dedicated Support',
        description:
            'Personalized customer service and ongoing support for all your HVAC needs.',
    },
];
