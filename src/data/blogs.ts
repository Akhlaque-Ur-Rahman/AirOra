export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: string;
    image: string;
}

export const blogs: BlogPost[] = [
    {
        slug: 'optimizing-chiller-efficiency',
        title: 'Optimizing Chiller Efficiency During Peak Summer Loads',
        excerpt:
            'Strategies for reducing energy consumption in commercial buildings through advanced load management and system calibration.',
        content: `
      <h2>The Challenge of Peak Summer Efficiency</h2>
      <p>As cooling demands skyrocket during Indian summers, chiller plants often operate at maximum capacity, leading to significant energy spikes. Maintaining efficiency under these conditions is critical not just for cost savings, but for equipment longevity.</p>
      
      <h2>1. Variable Speed Drives (VSDs)</h2>
      <p>Retrofitting chillers with VSDs allows the compressor motor speed to match the varying load requirements. Unlike constant speed chillers that cycle on and off, VSDs provide precise control, reducing energy consumption by up to 30% during partial load conditions.</p>
      
      <h2>2. Condenser Water Temperature Reset</h2>
      <p>lowering the condenser water entering temperature when ambient conditions allow (e.g., during cooler mornings or nights) reduces the compressor lift, thereby improving the coefficient of performance (COP).</p>
      
      <h2>3. Regular Tube Cleaning</h2>
      <p>Fouling in condenser tubes inhibits heat transfer. An automated tube cleaning system or undeniable scheduled maintenance ensures that the approach temperature remains within design limits, preventing efficiency degradation.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these strategies, facility managers can mitigate the impact of peak summer loads, ensuring steady operation and reduced utility bills.</p>
    `,
        date: 'May 15, 2025',
        author: 'Rajesh Kumar',
        category: 'Energy Efficiency',
        image: '/images/1.webp',
    },
    {
        slug: 'predictive-hvac-maintenance',
        title: 'Lifecycle Benefits of Predictive HVAC Maintenance',
        excerpt:
            'How data-driven maintenance protocols prevent critical system failures and extend asset lifespan in industrial facilities.',
        content: `
      <h2>Moving Beyond Preventive Maintenance</h2>
      <p>Traditional preventive maintenance relies on fixed schedules. Predictive maintenance, however, uses real-time data to identify anomalies before they escalate into failures.</p>
      
      <h2>Key Technologies</h2>
      <ul>
        <li><strong>Vibration Analysis:</strong> Detects misalignment or bearing wear in fans and pumps.</li>
        <li><strong>Thermal Imaging:</strong> Identifies electrical hotspots and insulation failures.</li>
        <li><strong>Oil Analysis:</strong> Monitors compressor health by checking for metal shavings or acidity.</li>
      </ul>
      
      <h2>ROI Impact</h2>
      <p>Industrial facilities adopting predictive strategies see a 25% reduction in maintenance costs and a 50% drop in unplanned downtime. Asset lifespan is significantly extended as components are replaced only when necessary, but before catastrophic failure.</p>
    `,
        date: 'April 22, 2025',
        author: 'Priya Sharma',
        category: 'Maintenance',
        image: '/images/3.webp',
    },
    {
        slug: 'vrf-vs-chilled-water',
        title: 'VRF vs. Chilled Water Systems: A Comparative Analysis',
        excerpt:
            'Evaluating the technical merits of Variable Refrigerant Flow systems versus central chillers for large-scale commercial applications.',
        content: `
      <h2>Understanding the Core Differences</h2>
      <p>Variable Refrigerant Flow (VRF) systems use refrigerant as the cooling medium, whereas Chilled Water systems use water. This fundamental difference dictates their suitability for various building types.</p>
      
      <h2>When to Choose VRF</h2>
      <p>VRF systems are ideal for:</p>
      <ul>
        <li>Buildings requiring simultaneous heating and cooling in different zones.</li>
        <li>Projects with limited mechanical room space (no large pumps or tanks needed).</li>
        <li>Retrofits where ductwork space is constrained.</li>
      </ul>
      
      <h2>When to Choose Chilled Water</h2>
      <p>Chilled Water systems excel in:</p>
      <ul>
        <li>Massive commercial complexes or campuses (> 100,000 sq ft).</li>
        <li>Facilities where refrigerant leaks in occupied spaces are a strict concern.</li>
        <li>Projects prioritizing extremely long equipment lifecycles (20-25 years).</li>
      </ul>
    `,
        date: 'March 10, 2025',
        author: 'Amit Patel',
        category: 'Technical Guides',
        image: '/images/2.webp',
    },
];
