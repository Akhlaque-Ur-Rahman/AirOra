import {
    Wind,
    Thermometer,
    Wrench,
    Shield,
    Snowflake,
    Settings,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const services: Service[] = [
    {
        icon: Wind,
        title: 'HVAC Installation',
        description:
            'Professional installation of heating, ventilation, and air conditioning systems for commercial and residential properties.',
    },
    {
        icon: Thermometer,
        title: 'Climate Control',
        description:
            'Advanced climate control solutions tailored to your specific needs, ensuring optimal comfort year-round.',
    },
    {
        icon: Wrench,
        title: 'Maintenance & Repair',
        description:
            'Regular maintenance and emergency repair services to keep your systems running efficiently at all times.',
    },
    {
        icon: Snowflake,
        title: 'Refrigeration Systems',
        description:
            'Industrial and commercial refrigeration solutions for cold storage, food service, and specialized applications.',
    },
    {
        icon: Shield,
        title: 'Energy Audits',
        description:
            'Comprehensive energy assessments to identify savings opportunities and improve system efficiency.',
    },
    {
        icon: Settings,
        title: 'System Upgrades',
        description:
            'Modern retrofits and system upgrades to enhance performance and reduce operational costs.',
    },
];
