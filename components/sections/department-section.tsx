"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface DepartmentSectionProps {
  name: string
  description: string
  image: string
  projects: string[]
}

export default function DepartmentSection({ name, description, image, projects }: DepartmentSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col h-full overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-xl font-bold text-blue-800">{name}</h3>
        <p className="mt-2 text-gray-600 flex-1">{description}</p>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-4 text-blue-700 border-blue-700 hover:bg-blue-50">
              Ver proyectos
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Departamento de {name}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <h4 className="text-lg font-semibold mb-2">Proyectos destacados:</h4>
              <ul className="space-y-2">
                {projects.map((project, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm mr-2">
                      {index + 1}
                    </span>
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cerrar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
