import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import digitaltransform from "@/public/digitaltransform.png";
import aincradapi from "@/public/aincradapi.png";

export const links = [
    {
        name: "Inicio",
        hash: "#home",
    },
    {
        name: "Sobre mi",
        hash: "#about",
    },
    {
        name: "Proyectos",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiencia",
        hash: "#experience",
    },
    {
        name: "Contacto",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Tecnico Sistemas Microinformaticos en Red",
        location: "Clara del Rey",
        description:
            "Aprendi las bases en la administracion de sistemas y despliegue de aplicaciones web.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2021",
    },
    {
        title: "Tecnico superior en desarrollo de aplicaciones multiplataforma",
        location: "Clara del Rey",
        description:
            "Desarrolle conocimientos en desarrollo de aplicaciones multiplataforma como Android, iOS y Web.",
        icon: React.createElement(LuGraduationCap),
        date: "2021 - 2022",
    },
    {
        title: "Tecnico superior en desarrollo de aplicaciones web",
        location: "Clara del Rey",
        description:
            "Complete mi formacion en desarrollo de aplicaciones web con React, Next.js, TypeScript, Vue, ASP.NET & SpringBoot. Encontre trabajo nada mas terminar.",
        icon: React.createElement(LuGraduationCap),
        date: "2022 - 2023",
    },
    {
        title: "Desarrollador Full Stack",
        location: "GranSolar Group",
        description:
            "Realize proyectos de paginas web dinamicas en Next.js/ASP.NET y desarrollo de APIs on premise con alto volumen de datos",
        icon: React.createElement(CgWorkAlt),
        date: "2023 - 2025",
    },
    {
        title: "Freelancer",
        location: "ToraKode",
        description:
            "Actualmente realizo proyectos a varios clientes usando tecnologias punteras.",
        icon: React.createElement(FaReact),
        date: "2025 - present",
    },
] as const;

export const projectsData = [
    {
        title: "API: AincradAPI",
        description:
            "Una API multifuncional en ASP.NET para la gestión de Azure AD, SharePoint, Jira, despliegue en Azure y automatización con GitHub Actions.",
        tags: ["ASP.NET", "RESTful API", "Azure", "Unit Testing", "CI/CD"],
        imageUrl: aincradapi,
    },
    {
        title: "Web: Transformacion Digital",
        description:
            "Pagina web informativa para el departamento de Transformación Digital",
        tags: ["ASP.NET", "Razor", "Javascript","HTML", "CSS", "Bootstrap"],
        imageUrl: digitaltransform,
    },
    {
        title: "Torakode.com",
        description:
            "Pagina web personal con Next.js y Tailwind. Con secciones dinámicas y responsiva.",
        tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
        imageUrl: digitaltransform,
    },
] as const;

export const skillsData = [
    "Next.js",
    "React",
    "HTML",
    "CSS",
    "Firebase",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Git",
    "Tailwind",
    "Framer Motion",
    "MongoDB",
    "PostgreSQL",
    "ASP.NET",
    "C#",
    "Spring Boot",
    "Java",
    "Python",
    "Kotlin",
] as const;
