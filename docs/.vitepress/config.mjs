import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // base: '/vitepressblog/',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '指南', link: '/guide/',activeMatch: '/guide/' } //指南
    ],

    sidebar: {
      "/":
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      "/guide/":{
        // text: '指南',
        items: [
          { 
            text: '指南', 
            items:
            [
              { text: '测试页面', link: '/guide/测试' },
              { text: '测试页面2', link: '/guide/测试2' }
            ],
            collapsed: false,
          },
          { 
            text: '写作', 
            items:
            [
              { text: '测试页面3', link: '/guide/测试3' },
              { text: '测试页面4', link: '/guide/测试4' }
            ],
            collapsed: true,
          },
        ]
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
