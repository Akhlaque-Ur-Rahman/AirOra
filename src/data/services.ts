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
        title: 'Turnkey HVAC Installation',
        description:
            'End-to-end execution of commercial and industrial HVAC projects, ensuring compliance with ASHRAE standards and local building codes.',
    },
    {
        icon: Thermometer,
        title: 'Precision Climate Control',
        description:
            'Advanced environmental control systems for data centers, laboratories, and pharmaceutical facilities requiring strict temperature and humidity regulation.',
    },
    {
        icon: Wrench,
        title: 'Preventive Maintenance Services',
        description:
            'Comprehensive AMC packages including vibration analysis, oil analysis, and thermal imaging to ensure uninterrupted system operation.',
    },
    {
        icon: Snowflake,
        title: 'Industrial Refrigeration',
        description:
            'Custom-engineered cold chain and process cooling solutions designed for high-efficiency heat rejection and temperature stability.',
    },
    {
        icon: Shield,
        title: 'Energy Efficiency Audits',
        description:
            'Detailed analysis of HVAC energy consumption using advanced logging tools to identify ROI-driven retrofit opportunities.',
    },
    {
        icon: Settings,
        title: 'Retrofits & Modernization',
        description:
            'Upgrading legacy equipment with modern VRF/VRV systems and smart controls to improve part-load efficiency and reduce carbon footprint.',
    },
];
