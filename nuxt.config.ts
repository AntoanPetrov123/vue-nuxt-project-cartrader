// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        // we can use NuxtImg to optimise img attributes
        "@nuxt/image-edge",
        "@vueuse/nuxt",
        //database connection
        "@nuxtjs/supabase"
    ]
})
