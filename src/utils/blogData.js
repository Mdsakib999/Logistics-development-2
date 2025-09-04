import { FileText, Calculator, Globe, Shield } from "lucide-react";

export const blogData = [
  {
    id: 1,
    blogTitle: "The Future of Last-Mile Delivery: Trends Shaping 2025",
    author: "Sarah Johnson",
    date: "Jan 15, 2025",
    image:
      "https://www.financialexpress.com/wp-content/uploads/2024/07/Logistics-cost.png",
    category: "Last-Mile Delivery",
    readTime: "5 min read",
    excerpt:
      "In 2025, last-mile delivery is undergoing a major transformation. With the rise of autonomous delivery vehicles, drones, and AI-driven logistics, companies are finding faster and more efficient ways to reach customers. Smart lockers and contactless delivery methods are improving convenience, while data analytics helps optimize routes and reduce costs. This article explores how these innovations are shaping customer expectations and operational strategies for the future.",
  },
  {
    id: 2,
    blogTitle:
      "Sustainable Shipping: Green Logistics Solutions for Modern Businesses",
    author: "Mike Chen",
    date: "Jan 12, 2025",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    category: "Sustainability",
    readTime: "8 min read",
    excerpt:
      "As climate change becomes a global priority, businesses are turning to sustainable logistics to cut emissions and operate responsibly. From switching to electric delivery fleets and using recyclable packaging to adopting carbon-offsetting programs and route optimization software, this article dives deep into practical solutions. Learn how companies can stay competitive and environmentally conscious in today's eco-aware market.",
  },
  {
    id: 3,
    blogTitle:
      "AI-Powered Route Optimization: Maximizing Efficiency in Fleet Management",
    author: "Emma Davis",
    date: "Jan 10, 2025",
    image:
      "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=400&h=300&fit=crop",
    category: "Technology",
    readTime: "6 min read",
    excerpt:
      "Artificial Intelligence is revolutionizing how logistics teams plan and manage routes. With real-time traffic analysis, predictive maintenance alerts, and intelligent fleet scheduling, AI tools are reducing fuel costs and boosting productivity. This blog outlines how route optimization not only enhances delivery speed but also ensures safety and cost-efficiency in logistics operations.",
  },
  {
    id: 4,
    blogTitle:
      "Cold Chain Excellence: Maintaining Temperature-Sensitive Shipments",
    author: "David Wilson",
    date: "Jan 08, 2025",
    image:
      "https://www.unity-consulting.com/fileadmin/_processed_/6/f/csm_Supply_Chain_Excellence_Leistungsangebot-800997982_6b7094ed47.webp",
    category: "Cold Chain",
    readTime: "7 min read",
    excerpt:
      "Transporting temperature-sensitive goods like pharmaceuticals and perishable food requires precision and reliability. This blog covers essential cold chain logistics practices—such as real-time temperature monitoring, compliance with international standards, and proper packaging. Learn how advanced technology and process control can prevent spoilage and ensure safe delivery across long distances.",
  },
  {
    id: 5,
    blogTitle:
      "Cross-Border Shipping: Navigating International Trade Regulations",
    author: "Lisa Thompson",
    date: "Jan 05, 2025",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=300&fit=crop",
    category: "International",
    readTime: "9 min read",
    excerpt:
      "International shipping is complex, involving customs regulations, tariffs, documentation, and compliance protocols. This post offers a comprehensive guide to managing cross-border logistics effectively. From understanding Incoterms to preparing accurate shipping documents, you'll gain insights into how businesses can avoid delays, reduce costs, and ensure regulatory compliance when shipping globally.",
  },
  {
    id: 6,
    blogTitle: "Warehouse Automation: The Rise of Smart Distribution Centers",
    author: "Robert Garcia",
    date: "Jan 03, 2025",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    category: "Automation",
    readTime: "10 min read",
    excerpt:
      "Modern warehouses are becoming intelligent hubs driven by automation and robotics. This blog explores how automated picking systems, AI-powered inventory management, and Internet of Things (IoT) sensors are transforming order fulfillment. With faster processing, fewer errors, and better scalability, smart distribution centers are reshaping the future of supply chain management.",
  },
];

export const stats = [
  {
    value: 100,
    suffix: "%",
    title: "Termingerechte Lieferung",
    desc: "Wir garantieren die pünktliche Lieferung jeder Sendung, damit Ihr Geschäft keinen Takt verpasst",
  },
  {
    value: 870,
    suffix: "+",
    title: "internationale Kunden",
    desc: "Unternehmen weltweit schätzen uns für zuverlässige und kosteneffiziente Logistiklösungen.",
  },
  {
    value: 24,
    suffix: "/7",
    title: "Kundensupport rund um die Uhr",
    desc: "Tag und Nacht steht unser Team bereit, um Sie bei Fragen, Sendungen oder dringenden Logistikanliegen zu unterstützen.",
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
