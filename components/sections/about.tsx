"use client"

import { Beaker, Rocket, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <motion.div variants={item} className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Sobre Nosotros</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Nuestra Misión y Visión</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              El Club de Ciencia y Tecnología del Colegio Mayor Secundario Presidente del Perú (CCYT CMSPP) busca
              fomentar el interés por la investigación científica y el desarrollo tecnológico entre los estudiantes,
              preparándolos para ser los futuros líderes científicos del país.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <motion.div
            variants={item}
            className="flex flex-col items-center space-y-2 border border-blue-200 p-6 rounded-lg bg-blue-50 hover:shadow-lg transition-shadow"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-3 rounded-full bg-blue-700 text-white">
              <Beaker className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-800">Investigación</h3>
            <p className="text-center text-gray-500">
              Desarrollamos proyectos de investigación científica en diversas áreas del conocimiento.
            </p>
          </motion.div>
          <motion.div
            variants={item}
            className="flex flex-col items-center space-y-2 border border-yellow-200 p-6 rounded-lg bg-yellow-50 hover:shadow-lg transition-shadow"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-3 rounded-full bg-yellow-500 text-blue-900">
              <Rocket className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-800">Innovación</h3>
            <p className="text-center text-gray-500">
              Creamos soluciones innovadoras a problemas reales utilizando tecnología de vanguardia.
            </p>
          </motion.div>
          <motion.div
            variants={item}
            className="flex flex-col items-center space-y-2 border border-blue-200 p-6 rounded-lg bg-blue-50 hover:shadow-lg transition-shadow"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-3 rounded-full bg-blue-700 text-white">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-800">Comunidad</h3>
            <p className="text-center text-gray-500">
              Formamos una comunidad colaborativa donde compartimos conocimientos y experiencias.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
