"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function About() {
    const {ref} = useSectionInView("Sobre mi");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
            id="about"
        >
            <SectionHeading>Sobre mi</SectionHeading>
            <p className="mb-3">
                Soy un desarrollador web enfocado en <span className="underline">JavaScript moderno</span>, con
                experiencia en <span className="underline">React, Next.js, y ASP.NET</span>. Me dedico al desarrollo
                <span className="font-medium"> full-stack</span>,
                creando aplicaciones web dinámicas y escalables, con integración a bases de datos y/o APIs como
                <span className="underline"> FSirebase, Prisma o MongoDb</span>
                <span className="italic"> Disfruto realizar proyectos complejos</span> y siempre estoy <span
                className="italic">perfeccionando mi conocimiento en desarrollo web</span> para mejorar la experiencia del usuario
                y la eficiencia de mis proyectos.
            </p>

            <p>
                <span className="italic">En mi tiempo libre</span>, me gusta experimentar con proyectos
                personales experimentando con nuevas tecnologias y explorar nuevas librerías y frameworks.
                También me interesa <span className="font-medium">la optimización de rendimiento y buenas prácticas de desarrollo</span> para
                entregar productos de alta calidad.
            </p>
        </motion.section>
    );
}
