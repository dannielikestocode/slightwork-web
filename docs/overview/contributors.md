<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/Dannie.jpg',
    name: 'Dannie',
    title: 'Creator, Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/dannielikestocode' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/wewyn/' }
    ]
  }
]
</script>

# Contributors

Say hello to the team!

<VPTeamMembers size="medium" :members />
