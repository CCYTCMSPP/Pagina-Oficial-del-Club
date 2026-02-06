"use client"

import { Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const events = [
  {
    date: { day: "15", month: "JUN" },
    title: "Feria de Ciencias CCYT 2023",
    description: "Presentación de proyectos científicos desarrollados por los estudiantes.",
    time: "9:00 AM - 5:00 PM",
    color: "blue",
  },
  {
    date: { day: "22", month: "JUL" },
    title: "Taller de Programación",
    description: "Aprende los fundamentos de la programación con Python y aplicaciones en ciencia.",
    time: "2:00 PM - 6:00 PM",
    color: "yellow",
  },
  {
    date: { day: "10", month: "AGO" },
    title: "Hackathon CCYT",
    description: "Competencia de desarrollo de soluciones tecnológicas a problemas reales.",
    time: "Todo el día",
    color: "blue",
  },
  {
    date: { day: "25", month: "SEP" },
    title: "Visita al Laboratorio Nacional",
    description: "Visita guiada a las instalaciones del Laboratorio Nacional de Investigación.",
    time: "10:00 AM - 2:00 PM",
    color: "yellow",
  },
]

export default function Events() {
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
    <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Eventos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Próximas Actividades</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mantente al día con nuestros eventos, talleres y competencias.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`flex gap-4 items-start p-6 rounded-lg border ${
                event.color === "blue" ? "border-blue-200" : "border-yellow-200"
              } bg-white shadow-sm hover:shadow-md transition-shadow`}
            >
              <div
                className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg ${
                  event.color === "blue" ? "bg-blue-700 text-white" : "bg-yellow-500 text-blue-900"
                }`}
              >
                <span className="text-xl font-bold">{event.date.day}</span>
                <span className="text-xs">{event.date.month}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-800">{event.title}</h3>
                <p className="text-gray-500 mt-1">{event.description}</p>
                <div className="flex items-center mt-2 text-sm text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{event.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
