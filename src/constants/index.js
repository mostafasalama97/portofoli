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
    itqan,
    tesla,
    shopify,
    carrent,
    sms,
    jobit,
    tripguide,
    threejs,
    voice,
    expense
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "IoT Developer",
      icon: backend,
    },
    {
      title: "AI Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "IoT Developer",
      company_name: "Smart City",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2022",
      points: [
        "Designed and implemented a fully automated smart city system, enhancing urban living through IoT-based automation and control.",
        "Developed monitoring systems for elderly care and tracking solutions for babies and equipment, ensuring real-time safety and asset management.",
        "Integrated various IoT platforms, including MoT, Akenza, and ThingsBoard, for comprehensive device management and data visualization.",
        "Collaborated with cross-functional teams to optimize IoT solutions, ensuring scalable architecture and seamless interoperability across platforms.",
      ],
    },    
    {
      title: "AI Developer",
      company_name: "Itqan Systems",
      icon: itqan,
      iconBg: "#E6DEDD",
      date: "April 2023 - until now",
      points: [
        "Developed and integrated diverse AI models to create an AI-driven voice chat application, utilizing Retrieval-Augmented Generation (RAG) for enhanced information retrieval.",
        "Enabled the AI to interact with knowledge bases, including PDF files and databases, allowing it to query and provide accurate responses based on structured and unstructured data sources.",
        "Implemented database query capabilities within the AI voice chat, enabling real-time responses to user questions and dynamic interaction with stored data.",
        "Collaborated closely with cross-functional teams to optimize AI integration, ensuring scalability and efficient handling of knowledge bases.",
      ],
    },
    
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Full Stack Developer",
      company_name: "Itqan Systems",
      icon: itqan,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Built and maintained scalable systems, including an SMS management system and a Governance, Risk, and Compliance (GRC) system, enhancing operational efficiency and data management.",
        "Architected and implemented solutions using microservices to ensure modularity, scalability, and ease of maintenance.",
        "Utilized modern frameworks such as NestJS and Next.js to create robust, high-performance backend and frontend solutions.",
        "Integrated with various external systems, ensuring seamless data flow and compatibility across platforms.",
        "Collaborated with cross-functional teams, including designers and product managers, to deliver high-quality, responsive applications tailored to business requirements.",
      ],
    },    
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
      name: "SMS System",
      description:
        "Web-based platform that allows users to send and receive SMS messages through different way Http and Smpp protocols and also allow to send email or whatsapp messages. It provides a user-friendly interface .",
      tags: [
        {
          name: "nestjs",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
      ],
      image: sms,
      source_code_link: "https://github.com/mostafasalama97?tab=repositories",
    },
    {
      name: "Ai Voice Chat",
      description:
      "AI voice chat application that allows users to interact with AI Assistant using text-to-speech and speech-to-text. It provides a unique and personalized experience for users.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "RAG",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
      ],
      image: voice,
      source_code_link: "https://github.com/mostafasalama97/NextJS_ai_chat",
    },
    {
      name: "Expense Tracker App",
      description:
        "Expense tracker app that allows users to track their expenses and categorize them based on their categories. It provides a user-friendly interface. ",
      tags: [
        {
          name: "expressjs",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: expense,
      source_code_link: "https://github.com/mostafasalama97/mern-app-graphql-expense-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };