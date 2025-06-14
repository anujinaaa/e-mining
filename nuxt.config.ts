import { resolve } from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    alias: {
        '@': resolve(__dirname, "/"),
    },
    app: {
        head: {
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
            title: "Agon - Multipurpose Agency TailwindCSS NuxtJS Template",
            script: []
        }
    },
    css: [
        'swiper/css',
        'swiper/css/navigation',
        'swiper/css/pagination',
        'swiper/css/free-mode',
        'swiper/css/thumbs',
        "~/public/assets/styles/tailwind.min.css",
        "~/public/assets/styles/app.min.css",
       
    ],
    modules: [// "swiper"
    // "vue-youtube-embed"
    [
        "@nuxtjs/google-fonts",
        {
            families: {
                Chivo: {
                    wght: [400, 700, 900]
                },
                "Noto+Sans": {
                    wght: [400, 500, 600, 700,800]
                },
                download: true,
                inject: true
            }
        }
    ], "@nuxtjs/tailwindcss"],
})
