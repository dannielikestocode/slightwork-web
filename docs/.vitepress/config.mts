import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SlightWork",
  description: "A developer-focused framework for building scalable apps.",
  // Dark mode toggle is enabled by default in the default theme
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/overview/introduction' },
      { text: 'Roadmap', link: '/overview/introduction' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Introduction', link: '/overview/introduction' },
          { text: 'Installation', link: '/overview/installation' },
          { text: 'Project Structure', link: '/overview/project-structure' },
          { text: 'Naming Conventions', link: '/overview/naming-conventions' }
        ]
      },
      {
        text: 'Apex',
        items: [
          { text: 'Strings', link: 'apex/strings' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dannielikestocode/slightwork' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/wewyn/' }
    ],

    footer: {
      message: 'SlightWork is part of the <a href="https://wynforce.com" target="_blank" rel="noopener">Wynforce</a> product ecosystem',
      copyright: '2026'
    }
  }
})
