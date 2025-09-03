'use client'

import { motion } from 'framer-motion'
import { FaReact,  FaDatabase,  FaGitAlt, FaVuejs } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiTailwindcss, SiSpringboot, SiPhp, SiPostgresql,
   SiNextdotjs, SiNestjs } from 'react-icons/si'

const skills = [
  { name: 'React', icon: <FaReact size={30} className="text-cyan-400" /> },
  { name: 'VueJS', icon: <FaVuejs size={30} className="text-green-700" /> },
  { name: 'NextJS', icon: <SiNextdotjs size={30} className="text-white" /> },
  { name: 'Nestjs', icon: <SiNestjs size={30} className="text-green-600" /> },
  { name: 'Spring Boot', icon: <SiSpringboot size={30} className="text-green-500" /> },
  { name: 'Php', icon: <SiPhp size={30} className="text-cyan-500" /> },
  { name: 'TypeScript', icon: <SiTypescript size={30} className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript size={30} className="text-yellow-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={30} className="text-cyan-500" /> },
  { name: 'SQL / DB', icon: <FaDatabase size={30} className="text-cyan-600" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={30} className="text-blue-600" /> },
  { name: 'Git', icon: <FaGitAlt size={30} className="text-red-500" /> },
]

export default function CompetencesSection() {
  return (
    <div className="py-16 px-6 md:px-20 " >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-white">Mes Compétences Techniques</h2>
        <p className="text-zinc-600 dark:text-zinc-300 mt-2">Voici un aperçu des technologies que j&apos;utilise régulièrement.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center bg-white dark:bg-zinc-800 p-4 rounded-xl shadow hover:shadow-md transition"
          >
            {skill.icon}
            <span className="mt-2 text-sm text-zinc-700 dark:text-zinc-200 font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
