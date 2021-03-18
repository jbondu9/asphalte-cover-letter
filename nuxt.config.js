export default {
  head: {
    title: "La Candidature Spontanée",
    htmlAttrs: {
      lang: "fr",
      amp: true
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
      { hid: "description", name: "description", content: "Ma candidature spontanée pour un poste de développeur front-end chez Asphalte" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  components: [
    {
      path: "~/components/header/"
    },
    {
      path: "~/components/footer/"
    }
  ]
}