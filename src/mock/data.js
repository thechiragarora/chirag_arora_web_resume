import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chirag Arora', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Chirag Arora Web Resume', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

export const certificationData = [
  {
    name: 'MongoDB Basics',
    issuingOrganization: 'MongoDB University',
    image: '',
    description: 'Set up and Atlas cluster, query, create, and analyze your data with MongoDB. Learned about database performance basics, and discover how to get started with creating applications and visualizing your data.',
    linkOfProof: 'http://university.mongodb.com/course_completion/ec3d85cb-4b6d-44ab-ba82-6c1be50d',
  },
  {
    name: 'MongoDB Basic Cluster Administration',
    issuingOrganization: 'MongoDB University',
    image: '',
    description: 'How to start up basic MongoDB deployments, from the basic single mongod process, to replica sets and sharded clusters. Course teaches to explore and configure these deployments using the MongoDB shell',
    linkOfProof:
      'http://university.mongodb.com/course_completion/5ba0475f-1502-4203-8610-9d94de23b17b',
  },
  {
    name: 'The MongoDB Aggregation Framework',
    issuingOrganization: 'MongoDB University',
    image: '',
    description: 'Fundamentals of the powerful MongoDB Aggregation Framework: data transformation, data science, reducing data over the wire, views.',
    linkOfProof:
      'https://university.mongodb.com/course_completion/a696f45c-8b94-4b09-92fa-a05020a89ce6',
  },
  {
    name: `Javascript: The Advance Concepts`,
    issuingOrganization: 'Udemy',
    image: '',
    description: `It covers whole from basic to advance concepts of javascript, how js works internally to modern javascript.`,
    linkOfProof: 'http://ude.my/UC-48d8e3d1-a03b-48f7-8673-c2e0ba90d7ab',
  },
];

// SKILLS DATA
export const skillsData = [
  {
    name: 'Express JS',
    image: '',
  },
  {
    name: 'Node JS',
    image: '',
  },
  {
    name: 'React JS',
    image: '',
  },
  {
    name: 'MongoDB',
    image: '',
  },
  {
    name: 'GraphQL',
    image: '',
  },
  {
    name: 'Apollo GraphQL',
    image: '',
  },
  {
    name: 'React Redux',
    image: '',
  },
  {
    name: 'Gatsby',
    image: '',
  },
  {
    name: 'Javascript',
    image: '',
  },
  {
    name: 'Typescript',
    image: '',
  },
];

// ABOUT DATA
export const aboutData = {
  img: 'chirag.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Plan And Buy Manager (Dentsu, LONDON, UK)',
    tech: 'MongoDB, ExpressJS, ReactJS, NodeJS, TypeScript, Apollo GraphQL, Microservice Architecture',
    description: 'It is for having transparency and communication between clients and marketing team working on the campaign.Marketing Team can also communicate properly within the team the guided way and everything will be documented hence transparent.',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'OAuth Tactical UI (Dentsu, LONDON, UK)',
    tech: 'MongoDB, ExpressJS, ReactJS, NodeJS, TypeScript, Apollo GraphQL',
    description: 'It is a POC for handling authentication from the third party authentication providers - Google, Twitter, Facebook, OKTA etc, with different permissions.',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Retro Board',
    tech: 'MongoDB, ExpressJS, ReactJS, NodeJS, Apollo GraphQL',
    description: `It's a Simple Retrospective board used in the agile, User can perform CRUD on board depending on their permissions, select different type of boards.`,
  },
  {
    id: nanoid(),
    img: '',
    title: 'Note - Mobile App',
    tech: 'React Native',
    description: `It's simple Note keeping app for daily use, can create different type of note - plain and checklist, can perform CRUD, star the Note`,
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/thechiragarora',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/thechiragarora/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/thechiragarora',
    },
  ],
};
