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
  deeplearning,
  blockchain,
  jangipurschool,
  ramkrishnaschool,
  nitdgplogo,
  Clan,
  jupiternotebook,
  redis
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Competitive Coder",
    icon: web,
  },
  {
    title:"Deep Learning Enthusiast",
    icon: deeplearning,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Blockchain Enthusiast",
    icon: blockchain,
  },
];

const technologies = [
  {
    name:"C/C++",
    icon: Clan,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name:"Jupiter Notebook",
    icon: jupiternotebook,
  },
  {
    name:"Redis",
    icon: redis,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "B.Tech in Computer Science and Engineering",
    company_name: "NIT Durgapur",
    icon: nitdgplogo,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - present",
    points: [
      "Mahatma Gandhi Rd, A-Zone, Durgapur, West Bengal 713209",
      "CGPA : 9.62/10.0"
    ],
  },
  
  {
    title: "Higher Secondary Exam class(12th)",
    company_name: "Jangipur High School",
    // company_name: "Tesla",
    icon: jangipurschool,
    iconBg: "#383E56",
    date: "April 2021 - April 2023",
    points: [
      "Chhota kalia, Jangipur, West Bengal 742213",
      "Precentage : 91.2 %"
    ],
  },
  {
    title: "Secondary Exam class(10th)",
    company_name: "Sri Ramkrishna Siksha Niketan",
    icon: ramkrishnaschool,
    iconBg: "#383E56",
    date: "Jan 2020 - April 2021",
    points: [
      "Haridasnagar,Murshidabad,West Bengal,742225",
      "percentage : 99.2 %"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "School Management System",
    description:
      "The project is a comprehensive website for Sri Ramkrishna Siksha Niketan (SRSN), developed to provide an interactive and informative platform for students, teachers, alumni, and visitors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name:"redis",
        color: "white-text-gradient",
      }
    ],
    image: "https://i.ibb.co/212g4Gmj/1730994894696.jpg",
    source_code_link: "https://sriramkrishnasikshaniketan.me/source",
  },
  {
    name: "Centrality Detection using Deep Learning ",
    description:
      "This project focuses on analyzing social networks using Graph Convolutional Networks (GCN) to determine centrality measures in complex networks. It leverages deep learning to improve the accuracy of identifying influential nodes in a network.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "keras",
        color: "pink-text-gradient",
      }
    ],
    image: "https://www.networkpages.nl/wp-content/uploads/2023/05/Closeness.png",
    source_code_link: "https://github.com/sandipto729/Social-Network",
  },
  {
    name: "Hospital Management System",
    description:
      "Built a hospital management system where patients can find nearby hospitals, book appointments, and make payments.Integrated video calling using Jitsi for remote consultations and payment processing via Razorpay and Stripe",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: "https://slchc.edu/wp-content/uploads/2022/07/hospital-manager-with-nurse-min-scaled-2560x1280.jpeg",
    source_code_link: "https://medmanages.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
