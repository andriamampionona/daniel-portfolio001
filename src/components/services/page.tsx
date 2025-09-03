'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code, Smartphone, Paintbrush, Brain, Search } from 'lucide-react';

const services = [
  {
    title: 'Développement Web',
    icon: Code,
    description:
      "Je conçois et développe des applications web modernes, performantes et sécurisées avec React, NextJS, VueJS, Nest.js ou Spring Boot.",
    color: 'bg-white dark:bg-zinc-900',
  },
  {
    title: 'Développement Mobile',
    icon: Smartphone,
    description:
      "Je crée des applications mobiles multiplateformes avec VueJS ou React/NextJS (Capacitor), compatibles Android/iOS, fluides et robustes.",
    color: 'bg-white dark:bg-zinc-900',
  },
  {
    title: 'UX / UI Design',
    icon: Paintbrush,
    description:
      "Je conçois des interfaces esthétiques, ergonomiques et accessibles. Grâce à Figma, je réalise des prototypes interactifs orientés utilisateur.",
    color: 'bg-blue-100 border-blue-300 dark:bg-blue-950 dark:border-blue-700',
  },
  {
    title: 'Conseil & Architecture Logicielle',
    icon: Brain,
    description:
      "Je vous accompagne dans la conception d’architectures logicielles évolutives : Clean Architecture, DDD, REST API, base de données relationnelles ou NoSQL.",
    color: 'bg-white dark:bg-zinc-900',
  },
  {
    title: 'Freelance & Mission Dédiée',
    icon: Briefcase,
    description:
      "Disponible pour des missions freelance à court ou long terme. Je m’intègre facilement à une équipe existante ou prends en charge un projet complet de A à Z.",
    color: 'bg-white dark:bg-zinc-900',
  },
   {
      icon: Search,
      title: "SEO & Référencement",
      description: "Optimisation de la visibilité des sites web sur les moteurs de recherche pour un meilleur trafic.",
    },
];

export default function MyServices() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        🛠️ Mes Services
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map(({ title, icon: Icon, description, color }, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}

                whileHover={{
                y: -10,
                opacity: 1,
                transition: {
                    duration: 0.3,
                    ease: "easeOut",
                },
                }}

                className={`p-6 border rounded-2xl shadow-sm transition duration-300 ${color}`}
            >
                <div className="flex items-center gap-4 mb-4">
                <Icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{description}</p>
            </motion.div>
        ))}
      </div>
    </section>
  );
}
