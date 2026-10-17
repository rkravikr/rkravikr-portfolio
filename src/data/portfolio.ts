// ─── Portfolio Data — Source of truth for all content ───
// Based on: Ravi Kumar Verma — Master Professional Profile

export const profile = {
  name: 'Ravi Kumar Verma',
  firstName: 'Ravi',
  title: 'Full-Stack Developer & Product Engineer',
  location: 'Bengaluru, Karnataka, India',
  education: {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Atria Institute of Technology, Bengaluru',
    expectedGraduation: '2027',
  },
  headline: 'I turn ideas into things that work.',
  subheadline: 'Full-Stack Developer. Product Thinker. Builder.',
  bio: [
    'I am a Computer Science Engineering student and aspiring software engineer focused on building practical web applications and developing a deeper understanding of product engineering.',
    'My work combines frontend development, backend implementation, database integration, interface design, and deployment-oriented thinking. I enjoy exploring problems, translating requirements into application features, and making technical decisions that support usability and maintainability.',
    'Beyond implementation, I am interested in the product decisions that shape software: understanding users, defining requirements, prioritizing features, evaluating trade-offs, and improving the overall experience.',
  ],
  aspiration:
    'My goal is to join a strong engineering team, contribute to useful products, gain meaningful professional experience, and build lasting connections with people who care about technology, creativity, and solving problems.',
  links: {
    github: 'https://github.com/rkravikr',
    linkedin: 'https://linkedin.com/in/rkravikr',
    email: 'mailto:ravi292002@gmail.com',
    resume: 'https://drive.google.com/file/d/1_a2AXWUIdhtoPsD6GFsJZ1ICjhBWWYiw/view?usp=sharing',
  },
  skills: {
    frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
    databases: ['PostgreSQL', 'MongoDB', 'Supabase', 'Prisma ORM', 'Neon PostgreSQL'],
    tools: ['Git', 'GitHub', 'Vercel', 'Render', 'Cloudinary'],
    exploring: ['Docker', 'GitHub Actions', 'AI-Assisted Development'],
  },
  process: [
    {
      step: '01',
      title: 'Understand',
      description: 'Identify the problem, the users, and the requirements before writing any code.',
    },
    {
      step: '02',
      title: 'Explore',
      description: 'Research solutions, evaluate trade-offs, and make informed technical decisions.',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Structure the user experience, define component boundaries, and plan the architecture.',
    },
    {
      step: '04',
      title: 'Build',
      description: 'Implement features with clean code, responsive layouts, and meaningful interactions.',
    },
    {
      step: '05',
      title: 'Refine',
      description: 'Test, iterate, and improve based on feedback, limitations, and real-world usage.',
    },
  ],
} as const;

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  tech: string[];
  repo: string;
  live?: string;
  narrative: string;
  features: string[];
  color: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 'campus-core',
    title: 'Campus Core',
    tagline: 'Student Productivity Platform',
    description:
      'A student-focused academic workspace designed to consolidate everyday college workflows — attendance tracking, semester organization, assignment management, timetable planning, and SGPA/CGPA analysis.',
    category: 'Web Application',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    repo: 'https://github.com/rkravikr/campus-core',
    live: 'https://campus-core-jet.vercel.app/',
    narrative:
      'Demonstrates how a broad problem can be broken into related product modules and implemented as a cohesive application.',
    features: [
      'Attendance tracking',
      'Semester organization',
      'Assignment management',
      'Timetable planning',
      'SGPA/CGPA analysis',
      'Demo & local sandbox',
    ],
    color: '#B5A6FF',
    year: '2024',
  },
  {
    id: 'calcify',
    title: 'Calcify',
    tagline: 'Modular Utility Suite',
    description:
      'A utility-focused web application consolidating 33+ everyday calculations and developer tools — from currency conversion and compound-interest calculations to JSON formatting, Markdown previewing, and image compression.',
    category: 'Developer Tool',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
    repo: 'https://github.com/rkravikr/calcify-mastery',
    narrative:
      'Shows how a collection of small, focused tools can become a coherent utility product.',
    features: [
      '33+ tools',
      'Finance calculators',
      'Developer utilities',
      'Media processing',
      'Client-side processing',
      'Consistent interface',
    ],
    color: '#FF3B46',
    year: '2024',
  },
  {
    id: 'shree-bags',
    title: 'Shree Bags',
    tagline: 'Product Catalog & Ordering',
    description:
      'A product catalog website helping a bag-selling business present products online and receive orders through WhatsApp, with a customer storefront and an administrative dashboard.',
    category: 'E-Commerce',
    tech: ['React', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Cloudinary'],
    repo: 'https://github.com/rkravikr/shree-bags',
    narrative:
      'Shows how software can address a practical business need through a focused storefront and manageable product catalog.',
    features: [
      'Product browsing',
      'Category filtering',
      'WhatsApp ordering',
      'Admin dashboard',
      'Image management',
      'Full-stack architecture',
    ],
    color: '#B5A6FF',
    year: '2024',
  },
  {
    id: 'ajay-press',
    title: 'Ajay Press',
    tagline: 'Local Business Website',
    description:
      'A business website for a printing and mobile repair service in Arwal, Bihar — organized around services, business information, gallery, and customer inquiries.',
    category: 'Business Website',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repo: 'https://github.com/rkravikr/ajay-press-v2',
    narrative:
      'Demonstrates how a business website can make services easier to understand and customer contact easier to initiate.',
    features: [
      'Service listings',
      'Gallery with filtering',
      'Contact forms',
      'Location integration',
      'SEO optimized',
      'Responsive design',
    ],
    color: '#FF3B46',
    year: '2024',
  },
  {
    id: 'nisarga-grand',
    title: 'Nisarga Grand',
    tagline: 'Restaurant Website',
    description:
      'Part of restaurant-focused web development work — a React, TypeScript, and Vite project.',
    category: 'Business Website',
    tech: ['React', 'TypeScript', 'Vite'],
    repo: 'https://github.com/rkravikr/nisarga-grand',
    narrative:
      'Documents business problem-solving through web development for the restaurant industry.',
    features: [
      'Restaurant presentation',
      'Menu display',
      'Business information',
      'Responsive layout',
    ],
    color: '#B5A6FF',
    year: '2024',
  },
];

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const;
