import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ShopCart",
  description: "pinia-typescript",
  base: '/shopcart/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'CaribesTic', link: 'https://caribestic.github.io/' },
      { text: 'The Enjoyable Vue Store', link: 'https://vueschool.io/courses/pinia-the-enjoyable-vue-store/' },      
      { text: 'Nuxt', link: 'https://nuxt.com/' },
      { text: 'Pinia', link: 'https://pinia.vuejs.org/' },     
      { text: 'TailwindCss', link: 'https://tailwindcss.com/' },
      { text: 'TypeScript', link: 'https://www.typescriptlang.org/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CaribesTIC/shopcart' }
    ]
  }
})
