"use client"

import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const resources = [
  {
    title: "Guías de Laboratorio",
    description: "Colección de guías para experimentos de física, química y biología.",
    icon: BookOpen,
    color: "blue",
    buttonText: "Descargar Guías",
  },
  {
    title: "Tutoriales de Programación",
    description: "Tutoriales de Python, Arduino y otras herramientas para proyectos científicos.",
    icon: BookOpen,
    color: "yellow",
    buttonText: "Ver Tutoriales",
  },
  {
    title: "Publicaciones Científicas",
    description: "Artículos y publicaciones realizadas por miembros del club.",
    icon: BookOpen,
    color: "blue",
    buttonText: "Leer Publicaciones",
  },
]

export default function Resources() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="resources" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Recursos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Materiales Educativos</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Accede a recursos educativos, guías y materiales para tus proyectos científicos.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`flex flex-col p-6 rounded-lg border ${
                resource.color === "blue" ? "border-blue-200" : "border-yellow-200"
              } bg-white shadow-sm hover:shadow-lg transition-all`}
            >
              <div className="flex items-center gap-2 mb-4">
                <resource.icon
                  className={`h-6 w-6 ${resource.color === "blue" ? "text-blue-700" : "text-yellow-500"}`}
                />
                <h3 className="text-xl font-bold text-blue-800">{resource.title}</h3>
              </div>
              <p className="text-gray-500 flex-1">{resource.description}</p>
              <Button
                variant="outline"
                className={`mt-4 ${
                  resource.color === "blue"
                    ? "text-blue-700 border-blue-700 hover:bg-blue-50"
                    : "text-yellow-600 border-yellow-600 hover:bg-yellow-50"
                }`}
              >
                {resource.buttonText}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
