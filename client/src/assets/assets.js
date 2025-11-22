import logo from "./logo.png";
import top_banner_1 from "./top_banner_1.png";
import top_banner_2 from "./top_banner_2.png";
import top_banner_3 from "./top_banner_3.png";
import scan from "./scan.png";
import solutions from "./solutions.png";
import about from "./about.png";
import case_studies from "./case_studies.png";
import donation from "./donation.png";
import resources from "./resources.png";
import remove_icon from "./remove_icon.svg";
import dashboard from "./dashboard.svg";
import document_list from "./document_list.svg";
import admin_list from "./admin_list.svg";
import user_list from "./user_list.svg";
import contact_list from "./contact_list.svg"
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import contact from "./top_banner_2.png";
// import webdev from "./webdev.png";
// import appdev from "./appdev.png";
// import uiux from "./uiux.png";
// import branding from "./branding.png";
// import digitalmarketing from "./digitalmarketing.png";
// import cybersecurity from "./cybersecurity.png";
// import cloud from "./cloud.png";
// import software from "./software.png";
// import ecommerce from "./ecommerce.png";
// import consulting from "./consulting.png";
// import maintenance from "./maintenance.png";


export const assets = {
  logo,
  scan,
  solutions,
  about,
  case_studies,
  resources,
  donation,
  remove_icon,
  dashboard,
  document_list,
  user_list,
  admin_list,
  contact_list,
  upload_area,
  profile_icon,
  menu_icon,
  contact,
  // webdev,
  // appdev,
  // uiux,
  // branding,
  // digitalmarketing,
  // cybersecurity,
  // cloud,
  // software,
  // ecommerce,
  // consulting,
  // maintenance,
};

export const tools = [
  {
    image: scan,
    title: "Brain Tumor Detection",
    description:
      "Upload MRI scans to detect and classify brain tumors using our advanced deep learning model.",
    link: "brain-tumor-detection",
  },
];

export const sliderImages = [
  top_banner_1,
  top_banner_2,
  top_banner_3,
];

export const blogs = [
  {
    title: "Understanding Brain Tumor Detection Using Deep Learning",
    date: "March 15, 2025",
    description:
      "The integration of deep learning with medical imaging has revolutionized early detection systems. This article explains how CNNs analyze MRI scans to detect brain tumors with high precision.",
    link: "./pages/news/news3.html",
  },
  {
    title: "Building Our Brain Tumor Detection Model",
    date: "March 25, 2025",
    description:
      "This blog dives into the technical foundation of our system.",
    link: "./pages/news/news3.html",
  },
  {
    title: "How Artificial Intelligence is Revolutionizing Medical Diagnosis",
    date: "April 2, 2025",
    description:
      "This article explores the global impact of AI in healthcare.",
    link: "./pages/news/news3.html",
  },
  {
    title: "From MRI Image to Diagnosis",
    date: "April 10, 2025",
    description:
      "This post follows a real-world case study using our model.",
    link: "./pages/news/news3.html",
  },
];

export const services = [
  {
    img: "webdev.png",
    title: "Web Development",
    description:
      "We build modern, responsive, and high-performance websites tailored for startups, businesses, and individuals.",
    helps: [
      "Custom business websites, landing pages, and portfolios.",
      "E-commerce stores, admin dashboards, and CMS platforms.",
      "API development, backend integration, and secure architecture.",
      "SEO-optimized, mobile-friendly, and scalable web solutions.",
    ],
  },
  {
    img: "appdev.png",
    title: "App Development",
    description:
      "We create user-friendly, secure, and scalable mobile applications for Android, iOS, and cross-platform devices.",
    helps: [
      "Android, iOS, and cross-platform apps using React Native / Flutter.",
      "Seamless user flows with modern UI components.",
      "Secure login, payments, push notifications, and real-time features.",
      "Backend development, APIs, and cloud integration.",
    ],
  },
  {
    img: "uiux.png",
    title: "UI/UX Design",
    description:
      "We design clean, intuitive, and high-converting digital experiences for websites, apps, and dashboards.",
    helps: [
      "Wireframes, prototypes, and high-fidelity mockups.",
      "UI/UX for websites, mobile apps, and software systems.",
      "Branding-focused and conversion-optimized layouts.",
      "User research, journey mapping, and usability improvements.",
    ],
  },
  {
    img: "branding.png",
    title: "Branding & Creative Design",
    description:
      "We build brand identities that create strong recognition and help businesses stand out in the digital world.",
    helps: [
      "Logo design, typography, colors, and style guides.",
      "Social media creatives, posters, brochures, and banners.",
      "Pitch deck design, business cards, and marketing assets.",
      "Full brand identity system and strategy.",
    ],
  },
  {
    img: "digitalmarketing.png",
    title: "Digital Marketing",
    description:
      "We help brands grow online with performance-driven marketing strategies that attract and convert users.",
    helps: [
      "SEO optimization for ranking and organic traffic.",
      "Social media growth, content strategy, and paid ads.",
      "Google Ads, Meta Ads, email campaigns, and retargeting.",
      "Analytics, reporting, and performance monitoring.",
    ],
  },
  {
    img: "cybersecurity.png",
    title: "Cybersecurity Solutions",
    description:
      "We protect businesses by implementing strong digital security systems, tools, and best practices.",
    helps: [
      "Vulnerability assessment & penetration testing (VAPT).",
      "Security audits, compliance, and risk assessment.",
      "Malware protection, firewall setup, and threat monitoring.",
      "Data security, backups, and secure hosting configurations.",
    ],
  },
  {
    img: "cloud.png",
    title: "Cloud & DevOps",
    description:
      "We deploy, manage, and optimize cloud infrastructure to ensure scalability, speed, and reliability.",
    helps: [
      "AWS, Google Cloud, and Azure deployment.",
      "CI/CD pipelines, DevOps automation, and containerization.",
      "Database tuning, load balancing, and server management.",
      "High-availability and scalable cloud architectures.",
    ],
  },
  {
    img: "software.png",
    title: "Custom Software Development",
    description:
      "We build powerful software solutions tailored to automate business operations and enhance productivity.",
    helps: [
      "CRM/ERP systems and business automation tools.",
      "Custom dashboards, SaaS products, and internal tools.",
      "AI-integrated solutions and workflow automation.",
      "High-performance backend systems and APIs.",
    ],
  },
  {
    img: "ecommerce.png",
    title: "E-commerce Solutions",
    description:
      "We develop complete e-commerce systems that help businesses sell products effortlessly online.",
    helps: [
      "Custom e-commerce websites with secure checkout.",
      "Inventory, orders, vendors, and delivery management.",
      "Payment gateway integration & wallet systems.",
      "User-friendly product catalog and dashboard management.",
    ],
  },
  {
    img: "consulting.png",
    title: "IT & Startup Consulting",
    description:
      "We guide startups and businesses with technology planning, product strategy, and digital transformation.",
    helps: [
      "Tech stack consultation and project planning.",
      "Product architecture and MVP roadmap.",
      "Business automation & workflow optimization.",
      "Cost-effective solutions tailored for startups.",
    ],
  },
  {
    img: "maintenance.png",
    title: "Maintenance & Support",
    description:
      "We provide long-term support to ensure your digital products perform smoothly and stay up-to-date.",
    helps: [
      "Bug fixes, updates, security patches.",
      "Website and app performance optimization.",
      "Feature upgrades and system improvements.",
      "Continuous monitoring and automated backups.",
    ],
  },
];
