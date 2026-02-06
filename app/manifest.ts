import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CCYT CMSPP - Club de Ciencia y Tecnología",
    short_name: "CCYT CMSPP",
    description: "Club de Ciencia y Tecnología del Colegio Mayor Secundario Presidente del Perú",
    start_url: "/",
    display: "standalone",
    background_color: "#1e40af",
    theme_color: "#1e40af",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
