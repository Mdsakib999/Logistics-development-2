import { FileText, Calculator, Globe, Shield } from "lucide-react";

export const blogData = [
  {
    id: 1,
    date: "📅 2025-07-28",
    image:
      "https://www.keystride.com/wp-content/uploads/2024/06/The-future-of-logistics-%E2%80%93-How-AI-is-revolutionizing-decision-making-2024.png",
    author: "👤 John Doe",
    blogTitle: "📝 How AI is Revolutionizing Logistics",
    description: `Artificial Intelligence (AI) is transforming the logistics industry by automating decision-making, route optimization, inventory management, and real-time tracking. Logistics companies are leveraging AI algorithms to analyze large datasets, which helps reduce operational costs, improve delivery accuracy, and forecast demand more effectively. AI-powered chatbots and predictive maintenance are also enhancing customer experience and equipment reliability. As we move forward, AI will become the backbone of a highly efficient, data-driven logistics ecosystem.`,
  },
  {
    id: 2,
    date: "📅 2025-07-21",
    image:
      "https://www.gep.com/prod/s3fs-public/blog-images/advantages-and-disadvantages-of-global-supply-chains-1920x1274.jpg",
    author: "👤 Sarah Malik",
    blogTitle: "📝 The Future of Global Supply Chains in 2025",
    description: `The global supply chain is evolving in 2025 with increased digitization, regionalization, and resilience strategies. Post-pandemic learnings have pushed companies to invest in risk assessment tools, multi-sourcing, and local manufacturing. Technologies such as blockchain, IoT, and AI are playing crucial roles in providing real-time visibility and transparency. Sustainability goals are also reshaping how supply chains operate, leading to the adoption of green logistics practices and carbon-neutral shipping.`,
  },
  {
    id: 3,
    date: "📅 2025-06-15",
    image:
      "https://dvzpv6x5302g1.cloudfront.net/AcuCustom/Sitename/DAM/137/Ship_connectivity_and_digitalisation_with_analytcs_Wartsila_.png",
    author: "👤 Carlos Mendoza",
    blogTitle: "📝 Smart Shipping: Tech Trends to Watch",
    description: `Smart shipping is integrating cutting-edge technologies such as IoT, analytics, and AI into maritime operations. This trend is focused on reducing fuel consumption, enhancing navigation safety, and improving cargo tracking. Autonomous ships and remote monitoring systems are already in use by forward-thinking companies. The adoption of these smart technologies not only increases operational efficiency but also reduces the environmental footprint of global shipping.`,
  },
  {
    id: 4,
    date: "📅 2025-05-10",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQFUkVsY-pIRrA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1710187108495?e=2147483647&v=beta&t=LCL7t-4JCpLDXPZdcRfKUdMvr-YbMAZP5JpVnI9h0yg",
    author: "👤 Aisha Rahman",
    blogTitle: "📝 Sustainable Logistics: Greener Tomorrow",
    description: `Sustainable logistics focuses on minimizing the environmental impact of transportation and warehousing. This includes electric delivery vehicles, route optimization to reduce fuel usage, recyclable packaging, and using renewable energy in warehouses. Regulatory pressure and customer expectations are pushing logistics providers to adopt green strategies. By 2030, sustainability will no longer be optional but a core component of logistics operations.`,
  },
  {
    id: 5,
    date: "📅 2025-04-01",
    image:
      "https://10web.io/blog/wp-content/uploads/sites/2/2024/11/ecommerce-delivery-platform3.png",
    author: "👤 Daniel Kim",
    blogTitle: "📝 E-Commerce Logistics: Delivering Speed at Scale",
    description: `E-commerce logistics is all about speed, accuracy, and scalability. With increasing online shopping, businesses are deploying micro-fulfillment centers, last-mile delivery drones, and automated warehouses. Same-day or next-day delivery is now a customer expectation. Advanced inventory management systems, demand forecasting, and API-integrated platforms are enabling this transformation. The focus is on creating seamless, real-time experiences from cart to customer doorstep.`,
  },
];

export const stats = [
  {
    value: 100,
    suffix: "%",
    title: "On-Time Delivery",
    desc: "We guarantee timely delivery for every shipment, ensuring your business never skips a beat.",
  },
  {
    value: 650,
    suffix: "+",
    title: "Global Clients",
    desc: "Trusted by clients worldwide who depend on us for reliable and cost-effective logistics.",
  },
  {
    value: 24,
    suffix: "/7",
    title: "Customer Support",
    desc: "Our support team is always available to help you with logistics inquiries or emergencies.",
  },
];

export const customSolutions = [
  {
    icon: Calculator,
    title: "Custom Pricing",
    description:
      "Tailored pricing solutions with volume discounts for businesses of all sizes.",
    benefit: "Save up to 40%",
    color: "from-orange-500 to-red-500",
    features: [
      "Volume discounts",
      "Flexible payment terms",
      "Custom billing cycles",
    ],
  },
  {
    icon: FileText,
    title: "API Integration",
    description:
      "Seamlessly integrate our logistics platform into your existing business applications.",
    benefit: "Full automation",
    color: "from-blue-500 to-indigo-500",
    features: ["REST API", "Webhook support", "Real-time tracking"],
  },
  {
    icon: Globe,
    title: "International Compliance",
    description:
      "Navigate global customs and regulations with our expert compliance team.",
    benefit: "Zero hassle",
    color: "from-green-500 to-teal-500",
    features: [
      "Customs documentation",
      "Duty calculation",
      "Regulatory updates",
    ],
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Advanced security protocols and insurance coverage for high-value shipments.",
    benefit: "100% secure",
    color: "from-purple-500 to-pink-500",
    features: ["Real-time monitoring", "Insurance coverage", "Secure handling"],
  },
];
