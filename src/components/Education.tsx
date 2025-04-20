"use client"; // Ajoute ceci si tu es sous Next.js App Router

import { educationList } from "@/datas/EducationList";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
        Formations
      </h2>

      <div className="mt-10 space-y-8">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 flex items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Logo de l'établissement */}
            <Image src={edu.logo} alt={edu.school} width={60} height={60} className="rounded-full" />

            {/* Infos Formation */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{edu.school}</h3>
              <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
              <p className="text-gray-500 dark:text-gray-400">{edu.duration}</p>
            </div>

            {/* Lien vers la formation */}
            <a
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
            >
              Voir la formation <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
