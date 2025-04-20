"use client";
import { experiences } from "@/datas/Experiences";
import { motion } from "framer-motion";
import Image from "next/image";

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
        Expériences
      </h2>
      
      <div className="mt-10 space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Header Expérience */}
            <div className="flex items-center gap-4">
              <Image src={exp.logo} alt={exp.company} width={50} height={50} className="rounded-full"/>
              <div>
                <h3 className="text-2xl font-semibold">{exp.position}</h3>
                <p className="text-gray-500 dark:text-gray-300">{exp.company} - {exp.contract}</p>
                <p className="text-gray-500 dark:text-gray-300">{exp.duration} | {exp.location}</p>
              </div>
            </div>

            {/* Missions */}
            <div className="mt-4">
              {exp.missions.map((mission, idx) => (
                <div key={idx} className="mt-4">
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{mission.title}</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                    {mission.details.map((detail, i) => (
                      <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technologies utilisées */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Technologies utilisées</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
