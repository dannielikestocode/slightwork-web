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
      { text: 'Roadmap', link: 'https://github.com/users/dannielikestocode/projects/4/views/3' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Introduction', link: '/overview/introduction' },
          { text: 'Project Structure', link: '/overview/project-structure' },
          { text: 'Deployment', link: '/overview/deployment' },
          { text: 'Contributors', link: '/overview/contributors' }
        ]
      },
      {
        text: 'Apex',
        items: [
          { text: 'Base', link: 'apex/base' },
          { text: 'Strings', link: 'apex/strings' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dannielikestocode/slightwork' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/wewyn/' }
    ],

    footer: {
      message: 'SlightWork is part of the <a href="" target="_blank" rel="noopener">Wynforce</a> ecosystem'
    }
  }
})
