import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Beaker, Rocket, Calendar, Users, BookOpen, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import DepartmentSection from "@/components/sections/department-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="CCYT CMSPP Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-blue-700">CCYT CMSPP</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-700">
              Inicio
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-blue-700">
              Nosotros
            </Link>
            <Link href="#departments" className="text-sm font-medium transition-colors hover:text-blue-700">
              Departamentos
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-blue-700">
              Proyectos
            </Link>
            <Link href="#events" className="text-sm font-medium transition-colors hover:text-blue-700">
              Eventos
            </Link>
            <Link href="#team" className="text-sm font-medium transition-colors hover:text-blue-700">
              Equipo
            </Link>
            <Link href="#resources" className="text-sm font-medium transition-colors hover:text-blue-700">
              Recursos
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-blue-700">
              Contacto
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Club de Ciencia y Tecnología
                </h1>
                <h2 className="text-xl font-semibold text-yellow-400">Colegio Mayor Secundario Presidente del Perú</h2>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Explorando el futuro a través de la ciencia, la innovación y la tecnología. Formando líderes
                  científicos para el Perú.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                    Conoce más <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Nuestros proyectos
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=550"
                  alt="Estudiantes del CCYT en laboratorio"
                  width={550}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Sobre Nosotros
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
                  Nuestra Misión y Visión
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  El Club de Ciencia y Tecnología del Colegio Mayor Secundario Presidente del Perú (CCYT CMSPP) busca
                  fomentar el interés por la investigación científica y el desarrollo tecnológico entre los estudiantes,
                  preparándolos para ser los futuros líderes científicos del país.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 border border-blue-200 p-6 rounded-lg bg-blue-50">
                <div className="p-3 rounded-full bg-blue-700 text-white">
                  <Beaker className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">Investigación</h3>
                <p className="text-center text-gray-500">
                  Desarrollamos proyectos de investigación científica en diversas áreas del conocimiento.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-yellow-200 p-6 rounded-lg bg-yellow-50">
                <div className="p-3 rounded-full bg-yellow-500 text-blue-900">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">Oportunidades</h3>
                <p className="text-center text-gray-500">
                  Brindamos oportunidades a nuestro miembros para impulsar su perfil y habilidades 
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-blue-200 p-6 rounded-lg bg-blue-50">
                <div className="p-3 rounded-full bg-blue-700 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">Comunidad</h3>
                <p className="text-center text-gray-500">
                  Formamos una comunidad colaborativa donde compartimos conocimientos y experiencias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section id="departments" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Nuestros Departamentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
                  Áreas de Especialización
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce los diferentes departamentos que conforman nuestro club y sus proyectos destacados.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Tabs defaultValue="ciencias" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="ciencias">Ciencias</TabsTrigger>
                  <TabsTrigger value="tecnologia">Otras</TabsTrigger>
                </TabsList>
                <TabsContent value="ciencias" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <DepartmentSection
                      name="Física"
                      description="Investigación en mecánica, electromagnetismo, termodinámica y física moderna."
                      image="/placeholder.svg?height=200&width=300"
                      projects={[
                        "Inserta proyecto",
                        "Inserta proyecto",
                        "Inserta proyecto",
                      ]}
                    />
                    <DepartmentSection
                      name="Química"
                      description="Experimentos y análisis en química orgánica, inorgánica y analítica."
                      image="/placeholder.svg?height=200&width=300"
                      projects={[
                        "Inserta proyecto",
                        "Inserta proyecto",
                        "Inserta proyecto",
                      ]}
                    />
                    <DepartmentSection
                      name="Biología"
                      description="Estudio de los seres vivos, ecosistemas y biotecnología"
                      image="/placeholder.svg?height=200&width=300"
                      projects={[
                        "Inserta proyecto",
                        "Inserta proyecto",
                        "Inserta proyecto",
                      ]}
                    />
                    <DepartmentSection
                      name="SAS"
                      description="Sistemas ambientales y sociedades, estudiando a profundidad los impactos medio ambientales"
                      image="/placeholder.svg?height=200&width=300"
                      projects={[
                        "Inserta proyecto",
                        "Inserta proyecto",
                        "Inserta proyecto",
                      ]}
                    />
                    <DepartmentSection
                      name="CDES"
                      description="Ciencias del Deporte, el Ejercicio y la Salud, trabajando por un estilo de vida más sano"
                      image="/placeholder.svg?height=200&width=300"
                      projects={[
                        "Inserta proyecto",
                        "Inserta proyecto",
                        "Inserta proyecto",
                      ]}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="tecnologia" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <DepartmentSection
                      name="Matemática"
                      description="Estudio y aplicación de teorías matemáticas en problemas reales."
                      image="/placeholder.svg?height=200&width=300"
                      projects={["Modelamiento matemático", "Estadística aplicada", "Olimpiadas matemáticas"]}
                    />
                    <DepartmentSection
                      name="Periodismo Científico"
                      description="Divulgación de la ciencia y tecnología a través de diferentes medios."
                      image="/placeholder.svg?height=200&width=300"
                      projects={["Revista científica escolar", "Podcast de divulgación", "Entrevistas a científicos"]}
                    />
                    <DepartmentSection
                      name="Astronomía"
                      description="Observación y estudio de cuerpos celestes y fenómenos astronómicos."
                      image="/placeholder.svg?height=200&width=300"
                      projects={["Observaciones astronómicas", "Construcción de telescopios", "Mapeo estelar"]}
                    />
                    <DepartmentSection
                      name="Ajedrez"
                      description="Desarrollo del pensamiento estratégico y lógico a través del ajedrez."
                      image="/placeholder.svg?height=200&width=300"
                      projects={["Torneos internos", "Clases para principiantes", "Análisis de estrategias"]}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm text-blue-900 font-medium">
                  Nuestros Proyectos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Innovación y Ciencia en Acción</h2>
                <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce los proyectos más destacados desarrollados por nuestros estudiantes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Proyecto de Robótica"
                  width={400}
                  height={300}
                  className="h-60 w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-xl font-bold text-white">Robótica Educativa</h3>
                    <p className="text-sm text-gray-200">Desarrollo de robots educativos para enseñanza de ciencias.</p>
                    <p className="text-xs text-yellow-400 mt-1">Departamento: Física</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Proyecto Ambiental"
                  width={400}
                  height={300}
                  className="h-60 w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-xl font-bold text-white">Monitoreo Ambiental</h3>
                    <p className="text-sm text-gray-200">
                      Sistema IoT para monitoreo de calidad del aire en zonas urbanas.
                    </p>
                    <p className="text-xs text-yellow-400 mt-1">Departamento: SAS</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Proyecto de Biotecnología"
                  width={400}
                  height={300}
                  className="h-60 w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-xl font-bold text-white">Biotecnología</h3>
                    <p className="text-sm text-gray-200">
                      Investigación en bioplásticos a partir de residuos orgánicos.
                    </p>
                    <p className="text-xs text-yellow-400 mt-1">Departamento: Biología</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">Ver todos los proyectos</Button>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Eventos</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Próximas Actividades</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mantente al día con nuestros eventos, talleres y competencias.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-4 items-start p-6 rounded-lg border border-blue-200 bg-white shadow-sm">
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-blue-700 text-white">
                  <span className="text-xl font-bold">15</span>
                  <span className="text-xs">JUN</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800">Feria de Ciencias CCYT 2023</h3>
                  <p className="text-gray-500 mt-1">
                    Presentación de proyectos científicos desarrollados por los estudiantes.
                  </p>
                  <div className="flex items-center mt-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="mt-2 text-sm font-medium text-blue-700">Encargado: Mesa Directiva</div>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 rounded-lg border border-yellow-200 bg-white shadow-sm">
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-yellow-500 text-blue-900">
                  <span className="text-xl font-bold">22</span>
                  <span className="text-xs">JUL</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800">Taller de Programación</h3>
                  <p className="text-gray-500 mt-1">
                    Aprende los fundamentos de la programación con Python y aplicaciones en ciencia.
                  </p>
                  <div className="flex items-center mt-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2:00 PM - 6:00 PM</span>
                  </div>
                  <div className="mt-2 text-sm font-medium text-blue-700">Encargado: Departamento de Matemática</div>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 rounded-lg border border-blue-200 bg-white shadow-sm">
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-blue-700 text-white">
                  <span className="text-xl font-bold">10</span>
                  <span className="text-xs">AGO</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800">Noche de Observación Astronómica</h3>
                  <p className="text-gray-500 mt-1">
                    Observación de estrellas y planetas con telescopios profesionales.
                  </p>
                  <div className="flex items-center mt-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>7:00 PM - 10:00 PM</span>
                  </div>
                  <div className="mt-2 text-sm font-medium text-blue-700">Encargado: Departamento de Astronomía</div>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 rounded-lg border border-yellow-200 bg-white shadow-sm">
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-yellow-500 text-blue-900">
                  <span className="text-xl font-bold">25</span>
                  <span className="text-xs">SEP</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800">Torneo de Ajedrez CCYT</h3>
                  <p className="text-gray-500 mt-1">Competencia interna de ajedrez con categorías por niveles.</p>
                  <div className="flex items-center mt-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="mt-2 text-sm font-medium text-blue-700">Encargado: Departamento de Ajedrez</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-800 to-blue-900 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm text-blue-900 font-medium">
                  Nuestro Equipo
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Líderes del CCYT</h2>
                <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce a los estudiantes que lideran nuestro club.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Presidente del Club"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Brissa Lopez</h3>
                <p className="text-blue-200">Presidente</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Vicepresidente del Club"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Dessiree Montenegro</h3>
                <p className="text-blue-200">Vicepresidente</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Coordinador de Proyectos"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Inserta nombre</h3>
                <p className="text-blue-200">Inserta rol</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Profesor Asesor"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Inserta nombre</h3>
                <p className="text-blue-200">Inserta rol</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Recursos</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Materiales Educativos</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Accede a recursos educativos, guías y materiales para tus proyectos científicos.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col p-6 rounded-lg border border-blue-200 bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-6 w-6 text-blue-700" />
                  <h3 className="text-xl font-bold text-blue-800">Guías de Laboratorio</h3>
                </div>
                <p className="text-gray-500 flex-1">
                  Colección de guías para experimentos de física, química y biología.
                </p>
                <Button variant="outline" className="mt-4 text-blue-700 border-blue-700 hover:bg-blue-50">
                  Descargar Guías
                </Button>
              </div>
              <div className="flex flex-col p-6 rounded-lg border border-yellow-200 bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-6 w-6 text-yellow-500" />
                  <h3 className="text-xl font-bold text-blue-800">Tutoriales de Programación</h3>
                </div>
                <p className="text-gray-500 flex-1">
                  Tutoriales de Python, Arduino y otras herramientas para hackatons, concursos o proyectos de programación y robótica.
                </p>
                <Button variant="outline" className="mt-4 text-yellow-600 border-yellow-600 hover:bg-yellow-50">
                  Ver Tutoriales
                </Button>
              </div>
              <div className="flex flex-col p-6 rounded-lg border border-blue-200 bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-6 w-6 text-blue-700" />
                  <h3 className="text-xl font-bold text-blue-800">Publicaciones Científicas</h3>
                </div>
                <p className="text-gray-500 flex-1">Artículos y publicaciones realizadas por los miembros de departamento de periodismo científico</p>
                <Button variant="outline" className="mt-4 text-blue-700 border-blue-700 hover:bg-blue-50">
                  Leer Publicaciones
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Contacto</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                  ¿Tienes alguna pregunta?
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Si tienes alguna pregunta o comentario sobre el Club de Ciencia y Tecnología, no dudes en
                  contactarnos.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-700" />
                    <span className="text-gray-500">ccyt@cmspp.edu.pe</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-blue-200 bg-white p-6 shadow-sm">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-800"
                      >
                        Nombre
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Ingresa tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-800"
                      >
                        Apellido
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Ingresa tu apellido"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-800"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="tu@ejemplo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-800"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800">Enviar Mensaje</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-blue-900 text-white py-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="CCYT CMSPP Logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span className="text-xl font-bold">CCYT CMSPP</span>
              </div>
              <p className="text-sm text-blue-200">
                Club de Ciencia y Tecnología del Colegio Mayor Secundario Presidente del Perú.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="/" className="hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#departments" className="hover:text-white">
                    Departamentos
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-white">
                    Proyectos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Recursos</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Guías de Laboratorio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tutoriales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Publicaciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Galería
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-400">Contacto</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>Av. La Arqueología cuadra 2, San Borja</li>
                <li>Lima, Perú</li>
                <li>ccyt@cmspp.edu.pe</li>
                <li>(01) 225-9999</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-blue-800 pt-4 text-center text-sm text-blue-300">
            <p>© {new Date().getFullYear()} Club de Ciencia y Tecnología - CMSPP. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
