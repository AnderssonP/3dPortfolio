import CDON from "../assets/images/CDON.png";
import plugandtrade from "../assets/images/plugandtrade.png";

import {
    car,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    pricewise,
    react,
    tailwindcss,
    data,
    dotnet,
    java,
    springboot,
    developer,
    docker,
    azure
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: dotnet,
        name: ".Net",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Backend",
    },
    {
        imageUrl: azure,
        name: "Azure",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Backend Intern",
        company_name: "CDON",
        icon: CDON,
        iconBg: "#accbe1",
        date: "Jan 2024 - May 2024",
        points: [
            "Worked as a Backend Developer during an internship, focusing on C# programming. Utilized Azure Functions, Azure Portal, and APIs to build and maintain scalable backend solutions. Gained hands-on expertise in cloud services and serverless computing. Enhanced ability to design and implement backend systems. Increased understanding of cloud architecture and API integration. Developed skills necessary for creating high-performance applications. Contributed to the creation of seamless, scalable backend services supporting complex web applications. Demonstrated technical skills and commitment to innovation in software development"
        ],
    },
    {
        title: "Backend Intern",
        company_name: "PlugAndTrade",
        icon: plugandtrade,
        iconBg: "#fbc3bc",
        date: "Apr 2024 - May 2024",
        points: [
            "Got the chance to have 3 weeks of my internship at PlugAndTrade were i developed advanced LINQ queries for data management and optimization in .NET environments. Got experienced in implementing and maintaining Elasticsearchsolutions, as well as containerizing applications with Docker for improved deployment and scalability.",
        ],
    },
    {
        title: "CustomerService Agent",
        company_name: "CDON",
        icon: CDON,
        iconBg: "#b7e4c7",
        date: "Jun 2018 - Dec 2023",
        points: [
            "Worked as a Customer Service Representative, developing strong communication and problem-solving skills. Interacted with customers through email, phone, and live chat. Enriched software development career by fostering a user-centric approach. Enhanced ability to create intuitive interfaces and anticipate user needs. Background in customer service ensures software developed is functional and responsive to user feedback"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AnderssonP',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/pontus-andersson-273615204/',
    }
];

export const projects = [
    {
        iconUrl: data,
        theme: 'btn-back-red',
        name: 'Data search and manipulation',
        description: 'A backend program written in C# with the intention to search for data in 3 different files, manipulate it, and send it to the user.',
        link: 'https://github.com/AnderssonP/internProjectPlugAndTrade',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'Payment API',
        description: 'Payment API that sends a payment to PayPal, and when the payment goes through, you receive an email. Written with Durable Functions in Azure and C#.',
        link: 'https://github.com/AnderssonP/PayApi',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Quiz game',
        description: 'A simple quiz written for a company to play and answer questions ranging in difficulty from 1 to 5 in different categories. Written in React and JavaScript',
        link: 'https://github.com/AnderssonP/quiz',
    },
];

export const imageHome =[
    {
        name: "developer",
        image: developer
    }
]
