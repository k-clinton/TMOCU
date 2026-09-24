import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TakeMyOnlineClassUSA",
    short_name: "TMOCU",
    description:
      "Professional online class and academic support for busy students.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B1528",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
