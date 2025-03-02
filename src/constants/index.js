import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  a,
  b,
  c,
  d,
  e,
  f,
  githubb,
  linkedin,
  instagram,
  gmail,
 //xdd,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Modern UI/UX Design",
    icon: web,
  },
  {
    title: "Responsive Web Design",
    icon: mobile,
  },
  {
    title: "Custom Web Design",
    icon: backend,
  },
  {
    title: "Frontend Web Development",
    icon: creator,
  },
];


const technologies = [
  {
    name: "figma",
    icon: figma,
  },
 
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI UX Designer  ",
    company_name: "Freelancer",
    icon: figma,
    iconBg: "#383E56",
    date: "2019 - Present",
    points: [
      "Designed intuitive and visually appealing user interfaces for web and mobile applications.",
      "Created wireframes, prototypes, and high-fidelity designs to enhance user experience.",
      "Collaborated with developers to ensure seamless implementation of UI designs.",
      "Conducted user research and usability testing to refine and improve designs.",
    ],
  },
  {
    title: "UI UX Designer",
    company_name: "BOC Head Office",
    icon: figma,
    iconBg: "#383E56",
    date: "May 2024 - Oct 2024",
    points: [
      "Developed modern and responsive UI designs for internal banking systems.",
      "Improved user workflows by enhancing interface layouts and usability.",
      "Worked closely with stakeholders to align designs with business goals.",
      "Contributed to the redesign of key banking applications for better accessibility and user engagement.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "An exceptional UI/UX designer! Delivered a sleek and user-friendly interface beyond my expectations.",
    name: "Sara Lee",
    designation: "Client",
    company: "Freelancer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Highly skilled in frontend development! Created a responsive and visually stunning website for my business.",
    name: "Chris Brown",
    designation: "Client",
    company: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Great attention to detail and clean coding. Transformed our project with an intuitive and modern design!",
    name: "Lisa Wang",
    designation: "Client",
    company: "Freelancer",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const socials = [
  {
    image: linkedin,
    link: "https://www.linkedin.com/in/isuru-nayanajith-8b695a250/"
  },
  {
    image: githubb,
    link: "https://github.com/Isurunayana"
  },

  {
    image: instagram,
    link: "https://www.instagram.com/isuru_izyy?igsh=Njd6YWZsNmwweDJp"
  },
  {
    image: gmail,
    link: "mailto:isurunayanajith50@gmail.com"
  }
]

const projects = [
  {
    name: "Visitor Management Website",
    description:
      "A digital visitor tracking system for secure and efficient check-ins at institutions.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
     
    ],
    image: a,
   
  },
  {
    name: "Ecommerce Website",
    description:
      "A fully responsive online store with a seamless shopping experience and secure checkout.",
    tags: [
      {
        name: "figma",
        color: "green-text-gradient",
      },
    
    ],
    image: b,
  
  },
  {
    name: "Financial Mobile App",
    description:
      "A mobile solution for managing finances, tracking expenses, and budgeting effectively.",
    tags: [
      {
        name: "figma",
        color: "orange-text-gradient",
      },
    
    ],
    image: c,
   
  },
  {
    name: "Financial Mobile App",
    description:
      " A user-friendly app for real-time financial insights and transaction management.",
    tags: [
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: d,
    
  },

  {
    name: "Financial Dashboard ",
    description:
      "A data-driven dashboard providing financial analytics and performance tracking.",
    tags: [
      {
        name: "figma",
        color: "orange-text-gradient",
      },
    ],
    image: e,
    
  },

  {
    name: "Finance Security Application",
    description:
      "A secure platform ensuring safe financial transactions with encryption and fraud detection.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
    ],
    image: f,
    
  },
];
export { services, technologies, experiences, testimonials, projects, socials };
