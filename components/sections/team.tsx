"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const teamMembers = [
  {
    name: "Carlos Mendoza",
    role: "Presidente",
    image: "/team-president.png",
  },
  {
    name: "Ana Sánchez",
    role: "Vicepresidente",
    image: "/team-vicepresident.png",
  },
  {
    name: "Miguel Torres",
    role: "Coordinador de Proyectos",
    image: "/team-coordinator.png",
  },
  {
    name: "Dra. Laura Vega",
    role: "Profesora Asesora",
    image: "/team-advisor.png",
  },
]

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="team"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-800 to-blue-900 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:left-1/2 sm:top-0 sm:translate-x-0 lg:left-full lg:-translate-x-1/2 lg:translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
          </svg>
          <svg
            className="absolute left-0 transform -translate-y-3/4 -translate-x-1/4 sm:left-0 sm:top-0 sm:translate-x-0 lg:left-0 lg:-translate-x-1/2 lg:translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="e229dbec-10e9-49ee-8ec3-0286ca089edf-2"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf-2)" />
          </svg>
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm text-blue-900 font-medium">
              Nuestro Equipo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Líderes del CCYT</h2>
            <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conoce a los estudiantes y profesores que lideran nuestro club.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center space-y-2 group"
            >
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-full"></div>
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-blue-200">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
