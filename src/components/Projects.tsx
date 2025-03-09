"use client"; // Ajoute ceci si tu es sous Next.js App Router

import { projects } from "@/datas/Projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
        Projets Réalisés
      </h2>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image du projet */}
            <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-48 object-cover" />

            {/* Contenu */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>

              {/* Stack technologique */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Liens */}
              <div className="mt-6 flex gap-4">
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-2">
                    <FaGithub /> Front
                  </a>
                )}
                {project.backendRepo && (
                  <a href={project.backendRepo} target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-2">
                    <FaGithub /> Back
                  </a>
                )}
                {project.demoLink !== "#" && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-green-600 flex items-center gap-2">
                    <FaExternalLinkAlt /> Démo
                  </a>
                )}
                {project.isPrivate && (
                  <span className="text-gray-500 flex items-center gap-2">
                    <FaLock />Privé
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
