import {
  FaShoppingBasket,
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  FaBoxes,
} from "react-icons/fa";

export const projects = [
  {
    slug: "greenbasket",
    title: "GreenBasket",
    category: "Full Stack E-Commerce",

    shortDescription:
      "Production-focused grocery e-commerce platform with complete shopping, order and admin workflows.",

    description:
      "GreenBasket is a full-stack grocery e-commerce platform built around a real shopping experience. It includes authentication, products, cart, addresses, orders, Razorpay payments, coupons, wishlist, reviews, email, invoices, delivery and admin analytics.",

    icon: FaShoppingBasket,

    image: "/image/greenbasket.png",
    video: "/video/greenbasket.mp4",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "Razorpay",
    ],

    color: "from-emerald-500 to-cyan-400",
    accent: "#34d399",

    highlights: [
      "Authentication and role-based authorization",
      "Product, category, cart and address workflows",
      "Order management with stock validation",
      "Razorpay payment integration and COD flow",
      "Coupons, wishlist and product reviews",
      "Email, invoice, delivery and admin analytics modules",
    ],

    github: "https://github.com",
    demo: "https://green-basket-v1.vercel.app/",
  },

  {
    slug: "college-placement-system",
    title: "College Placement System",
    category: "Full Stack Platform",

    shortDescription:
      "Placement management platform connecting students, recruiters and college workflows.",

    description:
      "A full-stack college placement platform designed around student profiles, company processes, placement workflows and real-time communication.",

    icon: FaGraduationCap,

    image: "/image/college-placement.png",
    video: "/video/college-placement.mp4",

    tech: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Socket.io",
    ],

    color: "from-blue-500 to-cyan-400",
    accent: "#60a5fa",

    highlights: [
      "Student and placement workflow management",
      "Company and recruitment-oriented flows",
      "Real-time communication with Socket.io",
      "MongoDB and Firebase integration",
      "Modern responsive frontend architecture",
    ],

    github: "https://github.com",
    demo: "https://placement-cell-ai-interview.vercel.app/",
  },

  {
    slug: "tradescape-risk-dashboard",
    title: "Tradescape Risk Dashboard",
    category: "Frontend Dashboard",

    shortDescription:
      "Professional trader risk dashboard focused on performance, drawdown and portfolio visibility.",

    description:
      "A polished trader risk dashboard built to make account health and trading performance easy to understand at a glance.",

    icon: FaChartLine,

    image: "/image/tradescape.png",
    video: "/video/tradescape.mp4",

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Recharts",
      "Lucide React",
    ],

    color: "from-indigo-500 to-blue-400",
    accent: "#818cf8",

    highlights: [
      "Account Overview",
      "Trading Performance",
      "Risk Monitor",
      "Drawdown and Daily Loss",
      "Equity Curve and Asset Performance",
      "Trade History and filtering",
    ],

    github: "https://github.com",
    demo: "https://tradescape-risk-dashboard-eta.vercel.app/",
  },

  {
    slug: "crm-platform",
    title: "CRM Platform",
    category: "Business Application",

    shortDescription:
      "Modern CRM experience focused on reusable UI, business workflows and REST API integration.",

    description:
      "A responsive CRM application designed around maintainable frontend architecture and practical business data workflows.",

    icon: FaUsers,

    image: "/image/crm.png",
    video: "/video/crm.mp4",

    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],

    color: "from-purple-500 to-pink-500",
    accent: "#e879f9",

    highlights: [
      "Reusable React component architecture",
      "Responsive dashboard experience",
      "REST API integration",
      "Business-focused data workflows",
      "Production deployment workflow",
    ],

    github: "https://github.com/ankitkvishwakarma/CRM.git",
    demo: "https://crm-nu-cyan.vercel.app/admin/login",
  },

  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    category: "Retail Operations",

    shortDescription:
      "Inventory management solution for product, stock and operational visibility.",

    description:
      "A practical inventory management system designed for retail operations, with a clean admin-oriented experience for managing products and stock.",

    icon: FaBoxes,

    image: "/image/inventory.png",
    video: "/video/inventory.mp4",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
    ],

    color: "from-orange-400 to-amber-300",
    accent: "#fb923c",

    highlights: [
      "Product management",
      "Stock visibility",
      "Operational workflows",
      "Responsive admin interface",
      "REST API based architecture",
    ],

    github: "https://github.com/ankitkvishwakarma/inventory-Management-system.git",
    demo: "https://inventory-management-system-alpha-taupe.vercel.app/login",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}