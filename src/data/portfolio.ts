// ─── Portfolio Data — Source of truth for all content ───
// Based on: Ravi Kumar Verma — Master Professional Profile & verified project repositories

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
  beyond: {
    statement: [
      'Not everything needs to be productive.',
      'Some things are simply worth experiencing. Stories that stay long after the screen fades, worlds worth getting lost in, and ideas that lead somewhere unexpected.',
      "There's more to me than what I build.",
    ],
    entries: [
      {
        index: '01',
        title: 'Anime & Stories',
        summary: 'Appreciation for storytelling, characters, and emotions.',
        detail:
          'Drawn to narratives with quiet depth, layered characters, and visual atmosphere that lingers.',
      },
      {
        index: '02',
        title: 'Gaming',
        summary: 'Strategy, exploration, and immersive worlds.',
        detail:
          'Enjoying deliberate systems, atmospheric world-building, and problem-solving under pressure.',
      },
      {
        index: '03',
        title: 'Music & Solitude',
        summary: 'A quieter, introspective space.',
        detail:
          'Late-night soundtracks that slow down the pace and leave room for clear thought.',
      },
      {
        index: '04',
        title: 'Curiosity',
        summary: 'Exploring ideas, experimenting, and learning beyond work.',
        detail:
          'Following tangential rabbit holes—from visual direction to how everyday tools are crafted.',
      },
    ],
  },
} as const;

export interface ProjectCaseStudy {
  problem: {
    summary: string;
    audience: string;
    painPoints: string[];
  };
  solution: {
    summary: string;
    designDecisions: string[];
  };
  featureGroups: {
    category: string;
    items: string[];
  }[];
  architecture: {
    overview: string;
    layers: {
      layer: string;
      stack: string;
      responsibility: string;
    }[];
    flow: string[];
  };
  contributions: string[];
  challenges: {
    title: string;
    problem: string;
    approach: string;
    outcome: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemSummary: string;
  contributionSummary: string;
  category: string;
  projectType: 'Personal Product' | 'Client-Oriented Project';
  status: 'Live & Deployed';
  role: string;
  tech: string[];
  repo: string;
  live?: string;
  image: string;
  narrative: string;
  features: string[];
  color: string;
  year: string;
  hasFullCaseStudy: boolean;
  caseStudy: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    id: 'campus-core',
    title: 'Campus Core',
    tagline: 'Student Productivity Platform',
    description:
      'A student-focused academic workspace consolidating attendance analytics, semester organization, assignment tracking, weekly timetable planning, and SGPA/CGPA analysis — complete with an offline demo sandbox.',
    problemSummary:
      'Students juggle fragmented ERPs, spreadsheets, and chat groups just to track attendance thresholds and deadlines.',
    contributionSummary:
      'Designed the modular workspace architecture, built the optimistic UI & sandbox state, and integrated Supabase auth and persistence.',
    category: 'Web Application',
    projectType: 'Personal Product',
    status: 'Live & Deployed',
    role: 'Full-Stack Developer & Product Designer',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    repo: 'https://github.com/rkravikr/campus-core',
    live: 'https://campus-core-jet.vercel.app/',
    image: '/images/campus-core.png',
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
    year: 'August 2026',
    hasFullCaseStudy: true,
    caseStudy: {
      problem: {
        summary:
          'College students routinely rely on outdated institution ERPs, manual spreadsheets, WhatsApp reminders, and scattered note apps to manage everyday academics.',
        audience: 'Undergraduate engineering and college students tracking multi-subject semesters.',
        painPoints: [
          'Calculating safe vs. critical attendance around the 75% requirement manually.',
          'Switching between disconnected tools for timetables, assignments, and GPA projections.',
          'High friction to evaluate new productivity apps when forced to sign up before seeing the workspace.',
        ],
      },
      solution: {
        summary:
          'I built Campus Core as a unified academic workspace with strict semester isolation, instant attendance analytics, and a zero-signup local sandbox mode.',
        designDecisions: [
          'Built a one-click Instant Demo mode backed by local storage so visitors can test real workflows without polluting production Supabase tables.',
          'Implemented optimistic UI updates for attendance logs and assignment toggles so actions feel immediate.',
          'Added a Cmd+K command palette and clean dark interface inspired by modern developer tools to reduce visual clutter.',
        ],
      },
      featureGroups: [
        {
          category: 'Academic Tracking',
          items: [
            'Per-subject attendance counter with 75% safe/danger/critical thresholds',
            'Safe-skip ("Bunksameter") and recovery lecture calculator',
            'SGPA & cumulative CGPA analysis across semesters',
          ],
        },
        {
          category: 'Planning & Workspace',
          items: [
            'Semester-isolated subjects, schedules, and task contexts',
            'Responsive weekly timetable grid for desktop and mobile',
            'Assignment deadline tracking and completion status',
          ],
        },
        {
          category: 'Access & Experience',
          items: [
            'Supabase authentication and protected route middleware',
            'Instant local sandbox with pre-populated mock academic data',
            'Cmd+K quick navigation command palette',
          ],
        },
      ],
      architecture: {
        overview:
          'A Next.js App Router application structured around modular services, client store state, middleware session protection, and Supabase cloud persistence.',
        layers: [
          {
            layer: 'Frontend & UI',
            stack: 'Next.js, TypeScript, App Router, Modular Components',
            responsibility: 'Responsive dashboard, weekly planner, optimistic state updates, and command palette.',
          },
          {
            layer: 'State & Sandbox',
            stack: 'Client Store + LocalStorage Sandbox',
            responsibility: 'Isolates demo-mode edits locally while synchronizing authenticated sessions with the backend.',
          },
          {
            layer: 'Auth & Persistence',
            stack: 'Supabase Auth, PostgreSQL, Next.js Middleware',
            responsibility: 'Session verification, route protection, and per-user semester/attendance data storage.',
          },
          {
            layer: 'Deployment',
            stack: 'Vercel',
            responsibility: 'Continuous deployment and edge routing for the production web application.',
          },
        ],
        flow: [
          'Browser / Student UI',
          'Next.js Middleware (Session Check)',
          'Service Layer / Optimistic Store',
          'Supabase Auth & PostgreSQL (or LocalStorage Sandbox)',
        ],
      },
      contributions: [
        'Defined the product scope and broke academic workflows into connected modules (attendance, timetable, assignments, grades).',
        'Implemented the Next.js frontend, responsive mobile/desktop layouts, and Cmd+K command palette.',
        'Integrated Supabase authentication, route middleware, and persistent database queries.',
        'Built the local sandbox fallback so recruiters and students can explore the full UI without creating an account.',
      ],
      challenges: [
        {
          title: 'Zero-Friction Demo Without Polluting Cloud Data',
          problem:
            'Visitors often leave productivity apps at the login screen, yet allowing unauthenticated writes to Supabase would clutter the database.',
          approach:
            'Separated the data-access layer so demo sessions hydrate pre-populated mock academic records into local browser storage instead of Supabase.',
          outcome:
            'Users can test attendance logging, timetable edits, and GPA math immediately while keeping authenticated Supabase tables clean.',
        },
        {
          title: 'Keeping Attendance & Semester State Synchronized',
          problem:
            'Switching semesters affects subjects, timetable slots, assignments, and GPA calculations simultaneously.',
          approach:
            'Scoped academic records under explicit semester contexts and applied optimistic UI updates before awaiting database confirmation.',
          outcome:
            'Instant visual feedback on one-tap lecture logging with clean separation between past and active semesters.',
        },
      ],
    },
  },
  {
    id: 'calcify',
    title: 'Calcify',
    tagline: 'Modular Utility Suite',
    description:
      'A unified developer and everyday utility platform consolidating 33+ client-side tools — spanning financial calculators, currency conversion, JSON formatting, Markdown previewing, QR generation, and image compression.',
    problemSummary:
      'Everyday calculations and developer conversions are spread across ad-heavy, inconsistent single-purpose websites.',
    contributionSummary:
      'Architected a unified modular component system housing 33+ privacy-first, client-side utilities under one consistent interface.',
    category: 'Developer Tool',
    projectType: 'Personal Product',
    status: 'Live & Deployed',
    role: 'Creator & Frontend Engineer',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
    repo: 'https://github.com/rkravikr/calcify-mastery',
    live: 'https://calcify-mastery.vercel.app/',
    image: '/images/calcify-mastery.png',
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
    year: 'May 2026',
    hasFullCaseStudy: true,
    caseStudy: {
      problem: {
        summary:
          'Simple tasks like formatting JSON, compressing an image, or computing SIP/GST require jumping between dozens of cluttered, ad-filled websites with inconsistent UX.',
        audience: 'Developers, students, and power users needing fast, reliable everyday utilities.',
        painPoints: [
          'Inconsistent interfaces and bloated pages for simple one-off calculations.',
          'Privacy concerns when pasting payloads or uploading images to unknown remote servers.',
          'Slow navigation when switching between multiple utility categories.',
        ],
      },
      solution: {
        summary:
          'I built Calcify as a cohesive, dark-themed suite of 33+ standalone React tool modules with static Next.js routing and client-side execution.',
        designDecisions: [
          'Executed media processing, JSON formatting, and math locally in the browser for speed and privacy.',
          'Standardized input/output patterns with shadcn/ui primitives so every tool feels part of one unified product.',
          'Used Next.js static routing and category filtering for instant transitions between tools.',
        ],
      },
      featureGroups: [
        {
          category: 'Finance & Math',
          items: [
            'Live Currency Converter (Frankfurter / ExchangeRate-API)',
            'SIP mutual fund projection & compound-interest calculators',
            'GST / tax and inflation purchasing-power calculators',
          ],
        },
        {
          category: 'Developer Productivity',
          items: [
            'JSON formatter & validator',
            'Live Markdown previewer',
            'Color format converter & encoding helpers',
          ],
        },
        {
          category: 'Media & General Utilities',
          items: [
            'Client-side image compression',
            'QR code generator',
            'Instant search and category filtering across 33+ tools',
          ],
        },
      ],
      architecture: {
        overview:
          'A modular Next.js App Router frontend where each utility lives as an isolated, lazy-routed React module backed by shared UI primitives and browser APIs.',
        layers: [
          {
            layer: 'Routing & Shell',
            stack: 'Next.js App Router, Static Pages',
            responsibility: 'Fast page transitions, category navigation, and global search filtering across tools.',
          },
          {
            layer: 'UI System',
            stack: 'React, Tailwind CSS, shadcn/ui, Framer Motion, Lucide',
            responsibility: 'Consistent dark developer aesthetic, accessible form controls, and restrained micro-interactions.',
          },
          {
            layer: 'Client Processing',
            stack: 'Browser Canvas / Web APIs + External FX API',
            responsibility: 'Local-first computation for formatting, compression, and math, plus live exchange-rate fetching.',
          },
        ],
        flow: [
          'Tool Search / Category Filter',
          'Static Next.js Tool Route',
          'Isolated Utility Component (Client-Side Processing)',
          'Instant Output / Download (or Live FX API for Currency)',
        ],
      },
      contributions: [
        'Designed the unified dark interface and standardized layout shell shared across all 33+ utilities.',
        'Implemented modular React tool components across finance, developer, and media categories.',
        'Built client-side processing logic so formatting, compression, and calculations run without unnecessary backend round-trips.',
        'Integrated live currency exchange rate fetching and deployed the suite on Vercel.',
      ],
      challenges: [
        {
          title: 'Maintaining UI Consistency Across 33+ Distinct Tools',
          problem:
            'Each utility has different inputs (sliders, textareas, file drops, currency selectors), risking a fragmented experience.',
          approach:
            'Built shared layout wrappers and standardized shadcn/ui control patterns in `components/` so every tool follows predictable spacing and feedback rules.',
          outcome:
            'Users can switch from a SIP calculator to a JSON formatter without re-learning the interface.',
        },
        {
          title: 'Client-Side Performance & Privacy',
          problem:
            'Sending user images or JSON payloads to a server adds latency, hosting cost, and privacy friction.',
          approach:
            'Kept computation in the browser using native JavaScript/Canvas APIs and isolated each tool behind Next.js routes.',
          outcome:
            'Zero-latency calculations and private client-side processing, reserving network calls only for live currency rates.',
        },
      ],
    },
  },
  {
    id: 'shree-bags',
    title: 'Shree Bags',
    tagline: 'Product Catalog & Ordering',
    description:
      'A full-stack product catalog and admin management system for a bag-selling business — pairing a responsive storefront and WhatsApp ordering flow with a PostgreSQL/Prisma backend and Cloudinary media uploads.',
    problemSummary:
      'Small retail businesses need an online catalog and inventory dashboard without the overhead of payment-gateway checkouts.',
    contributionSummary:
      'Built the React storefront, Express.js REST API, Prisma/PostgreSQL schema, JWT admin dashboard, and Cloudinary image pipeline.',
    category: 'E-Commerce',
    projectType: 'Client-Oriented Project',
    status: 'Live & Deployed',
    role: 'Full-Stack Developer',
    tech: ['React', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Cloudinary'],
    repo: 'https://github.com/rkravikr/shree-bags',
    live: 'https://shree-bags-ten.vercel.app/',
    image: '/images/shree-bags.png',
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
    year: 'March 2026',
    hasFullCaseStudy: true,
    caseStudy: {
      problem: {
        summary:
          'A local bag-selling business needed a clean way to showcase products online and update inventory without maintaining a complex payment-gateway checkout.',
        audience: 'Retail shoppers browsing bags and the business owner managing catalog inventory.',
        painPoints: [
          'Sharing static product photos in chats makes browsing categories and details disorganized.',
          'Full payment-gateway e-commerce adds unnecessary setup and transaction complexity for direct-order businesses.',
          'Business owners need a simple, authenticated dashboard to add, edit, or remove products and images.',
        ],
      },
      solution: {
        summary:
          'I built a decoupled full-stack catalog with a React + Vite customer storefront, direct WhatsApp order initiation, and a protected admin dashboard backed by Express, Prisma, Neon PostgreSQL, and Cloudinary.',
        designDecisions: [
          'Replaced multi-step checkout with pre-filled WhatsApp ordering links tailored to how the business actually closes sales.',
          'Offloaded product image storage and optimization to Cloudinary rather than storing files on an ephemeral backend server.',
          'Separated customer storefront routes from JWT-protected admin CRUD routes.',
        ],
      },
      featureGroups: [
        {
          category: 'Customer Storefront',
          items: [
            'Product catalog browsing with category filtering',
            'Dedicated product detail pages',
            'Direct WhatsApp ordering workflow',
          ],
        },
        {
          category: 'Admin Dashboard',
          items: [
            'JWT-authenticated admin login',
            'Create, update, and delete products and categories',
            'Cloudinary product image upload and management',
          ],
        },
      ],
      architecture: {
        overview:
          'Decoupled frontend and backend architecture: a React/Vite SPA on Vercel communicating over REST with an Express.js API on Render, backed by Neon PostgreSQL via Prisma ORM and Cloudinary.',
        layers: [
          {
            layer: 'Frontend SPA',
            stack: 'React, Vite, Tailwind CSS, React Router (Vercel)',
            responsibility: 'Customer catalog, category filters, product detail views, WhatsApp links, and admin UI.',
          },
          {
            layer: 'REST API Server',
            stack: 'Node.js, Express.js, JWT Auth (Render)',
            responsibility: 'Public product/category endpoints (`/api/products`, `/api/categories`) and protected admin mutations.',
          },
          {
            layer: 'Database & ORM',
            stack: 'PostgreSQL (Neon) + Prisma ORM',
            responsibility: 'Relational product and category schemas, migrations, and type-safe queries.',
          },
          {
            layer: 'Media Storage',
            stack: 'Cloudinary',
            responsibility: 'Persistent cloud hosting and delivery for product photography.',
          },
        ],
        flow: [
          'React + Vite Storefront / Admin (Vercel)',
          'Express.js REST API + JWT Middleware (Render)',
          'Prisma ORM -> Neon PostgreSQL (Catalog Data)',
          'Cloudinary (Product Images) & WhatsApp (Customer Order)',
        ],
      },
      contributions: [
        'Built the React + Vite frontend including storefront views, category filtering, and admin management pages.',
        'Implemented the Node.js / Express.js REST API with JWT-based admin authentication.',
        'Modeled the PostgreSQL database schema and migrations using Prisma ORM hosted on Neon.',
        'Integrated Cloudinary for product image uploads and deployed frontend/backend separately on Vercel and Render.',
      ],
      challenges: [
        {
          title: 'Persistent Image Storage Across Stateless Deployments',
          problem:
            'Storing uploaded product images on the Express server filesystem fails on ephemeral cloud instances like Render.',
          approach:
            'Integrated Cloudinary into the product upload pipeline so the API stores secure remote URLs in PostgreSQL instead of local files.',
          outcome:
            'Admin product uploads persist reliably across backend restarts and redeployments.',
        },
        {
          title: 'Right-Sizing the Ordering Flow',
          problem:
            'Integrating full online payments would slow delivery and add maintenance overhead the business did not want.',
          approach:
            'Implemented direct WhatsApp ordering links carrying product context straight into customer-owner conversations.',
          outcome:
            'Customers browse a structured catalog while orders land directly in the owner’s existing WhatsApp workflow.',
        },
      ],
    },
  },
  {
    id: 'ajay-press',
    title: 'Ajay Press',
    tagline: 'Local Business Website',
    description:
      'A minimalist, light-mode business website for Ajay Press — a printing and mobile/laptop repair studio in Arwal, Bihar — structured around clear service tiers, gallery filtering, and direct WhatsApp/call inquiries.',
    problemSummary:
      'Local customers needed a clear, fast way to discover printing, repair, and digital services and initiate contact immediately.',
    contributionSummary:
      'Built the Next.js TypeScript site with structured service sections, gallery filtering, location info, and direct call/WhatsApp CTAs.',
    category: 'Business Website',
    projectType: 'Client-Oriented Project',
    status: 'Live & Deployed',
    role: 'Frontend Developer',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repo: 'https://github.com/rkravikr/ajay-press-v1',
    live: 'https://ajay-press-v1.vercel.app/',
    image: '/images/ajay-press-v1.png',
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
    year: 'April 2026',
    hasFullCaseStudy: false,
    caseStudy: {
      problem: {
        summary:
          'Customers looking for printing, gadget repair, and digital form services in Arwal, Bihar lacked a clear online overview of available services and direct contact channels.',
        audience: 'Local customers and businesses seeking printing or device repair services.',
        painPoints: [
          'Unclear service breakdown across printing, hardware repair, and digital lounge offerings.',
          'Friction in reaching the shop quickly from mobile devices.',
        ],
      },
      solution: {
        summary:
          'I built a clean, high-contrast Next.js + TypeScript website organized around three service pillars with direct WhatsApp and phone call actions.',
        designDecisions: [
          'Used a light minimalist palette with alternating sections to keep service lists scannable.',
          'Placed direct WhatsApp and Call CTAs prominently for mobile-first local visitors.',
        ],
      },
      featureGroups: [
        {
          category: 'Service Presentation & Contact',
          items: [
            'Printing Hub, Repair Lab, and Digital Lounge service breakdowns',
            'Filterable work gallery',
            'Direct WhatsApp booking, phone links, contact form, and location info',
          ],
        },
      ],
      architecture: {
        overview:
          'A static-friendly Next.js + TypeScript application styled with Tailwind CSS and deployed on Vercel.',
        layers: [
          {
            layer: 'Frontend & SEO',
            stack: 'Next.js, React, TypeScript, Tailwind CSS',
            responsibility: 'Responsive service pages, gallery filtering, accessible mobile navigation, and SEO metadata.',
          },
          {
            layer: 'Hosting',
            stack: 'Vercel',
            responsibility: 'Production hosting and fast static delivery.',
          },
        ],
        flow: [
          'Customer Browser',
          'Next.js Static Pages & Service Views',
          'Direct WhatsApp / Phone / Inquiry Action',
        ],
      },
      contributions: [
        'Structured the business information, service categories, and centralized configuration.',
        'Implemented responsive layouts, mobile navigation scroll locking, gallery filtering, and direct contact links.',
      ],
      challenges: [
        {
          title: 'Presenting Diverse Local Services Clearly',
          problem:
            'Combining printing, motherboard/mobile repair, and digital services on one site can easily feel cluttered.',
          approach:
            'Separated offerings into distinct alternating bands with balanced service grids and immediate contact CTAs.',
          outcome:
            'Visitors can scan specific services and contact the studio in one tap.',
        },
      ],
    },
  },
  {
    id: 'nisarga-grand',
    title: 'Nisarga Grand',
    tagline: 'Restaurant Website',
    description:
      'A vegetarian restaurant web application for Nisarga Grand in RT Nagar, Bengaluru — featuring menu presentation, category browsing, and a documented Node.js/Express/MongoDB backend architecture.',
    problemSummary:
      'A local vegetarian restaurant needed an inviting digital menu and structured backend foundation for dishes, categories, and orders.',
    contributionSummary:
      'Built the React/TypeScript/Vite frontend and structured the Node.js/Express/MongoDB backend API and models.',
    category: 'Business Website',
    projectType: 'Client-Oriented Project',
    status: 'Live & Deployed',
    role: 'Full-Stack Developer',
    tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express.js', 'MongoDB'],
    repo: 'https://github.com/rkravikr/nisarga-grand',
    live: 'https://nisarga-grand.vercel.app/',
    image: '/images/nisarga-grand.png',
    narrative:
      'Documents business problem-solving through web development for the restaurant industry.',
    features: [
      'Restaurant presentation',
      'Menu display',
      'Business information',
      'Responsive layout',
    ],
    color: '#B5A6FF',
    year: 'April 2026',
    hasFullCaseStudy: false,
    caseStudy: {
      problem: {
        summary:
          'Customers searching for Nisarga Grand needed an accessible online menu, dish highlights, and location information before visiting or ordering.',
        audience: 'Diners in RT Nagar, Bengaluru exploring South and North Indian vegetarian offerings.',
        painPoints: [
          'Static or hard-to-read menus on mobile screens.',
          'Need for a structured API to manage dishes, categories, and availability.',
        ],
      },
      solution: {
        summary:
          'I built a responsive React + TypeScript + Vite storefront deployed on Vercel alongside an Express.js + MongoDB backend structure for dish, category, and order endpoints.',
        designDecisions: [
          'Highlighted signature dishes, pricing context, and restaurant information right on the landing view.',
          'Structured REST models (Dish, Category, Order, User) and JWT-protected admin routes in the backend directory.',
        ],
      },
      featureGroups: [
        {
          category: 'Frontend & Menu Experience',
          items: [
            'Responsive restaurant landing page and menu display',
            'Special dish highlights and business location context',
            'Gallery and customer contact sections',
          ],
        },
        {
          category: 'Backend API Structure',
          items: [
            'Express.js + Mongoose models for Dish, Category, Order, and User',
            'JWT admin authentication and case-insensitive dish search endpoint',
          ],
        },
      ],
      architecture: {
        overview:
          'A React + TypeScript + Vite frontend deployed on Vercel, paired with a Node.js / Express.js / MongoDB backend architecture in the repository.',
        layers: [
          {
            layer: 'Frontend',
            stack: 'React, TypeScript, Vite (Vercel)',
            responsibility: 'Responsive menu display, specials, gallery, and restaurant information.',
          },
          {
            layer: 'Backend API',
            stack: 'Node.js, Express.js, Mongoose, JWT, Multer',
            responsibility: 'REST endpoints for dishes, categories, orders, search, and admin auth.',
          },
        ],
        flow: [
          'Diner Browser (React + Vite)',
          'REST API (Express.js)',
          'MongoDB (Dish, Category, Order Models)',
        ],
      },
      contributions: [
        'Built the responsive React + TypeScript + Vite frontend and deployed it to Vercel.',
        'Designed and structured the Express.js + Mongoose backend controllers, models, and JWT auth routes.',
      ],
      challenges: [
        {
          title: 'Structuring Menu & Order Entities Cleanly',
          problem:
            'Restaurant menus require frequent availability toggles, category grouping, and search without breaking order references.',
          approach:
            'Modeled separate Dish, Category, and Order schemas in Mongoose with `isAvailable` flags and a dedicated search endpoint.',
          outcome:
            'A clean separation between public menu browsing and admin dish management.',
        },
      ],
    },
  },
];

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const;
