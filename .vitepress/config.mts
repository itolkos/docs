import { defineConfig } from 'vitepress'

base: "/docs"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.svg" }]],// 地址栏logo
  title: "CS知识库",
  description: "A easy docs.",
  themeConfig: {
    logo: '/logo.svg',
    footer: {
      message: 'Message实例',
      copyright: 'Copyright © 2019-present Evan You'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '案例', link: '/markdown-examples' }
    ],

    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/docs/git/': [
        {
          text: 'git',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'git', link: '/docs/git/git.md' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/docs/vim/': [
        {
          text: 'vim好',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
