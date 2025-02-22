import type { Project } from './types'

const Projects: Project[] = [
  {
    title: 'X11 on iOS',
    description: 'Patched, compiled, and packaged X11 for iOS devices.',
    href: '/blog/X11',
    role: 'Creator',
    years: ['2020'],
  },
  {
    title: 'Drift',
    description:
      'A self-hostable and open-source alternative to GitHub Gist and Pastebin.',
    href: 'https://github.com/maxleiter/drift',
    role: 'Creator',
    years: ['2022', 'present'],
  },
  {
    title: 'The Lounge',
    description:
      'Self-hosted, always-on IRC client built with Node.js, Vue, and other web technologies.',
    href: 'https://github.com/thelounge/thelounge',
    role: 'Maintainer',
    years: ['2016', 'present'],
  },
  {
    title: 'SortableJS-vue3',
    description: "A TypeScript wrapper for SortableJS that's built for Vue 3.",
    href: 'https://sortablejs-vue3.maxleiter.com/',
    role: 'Creator',
    years: ['2022 - present'],
  },
  {
    title: 'KnightOS',
    description:
      'Open-source unix-like operating system for z80-based calculators written entirely in z80 asm.',
    href: 'https://github.com/knightos/knightos',
    role: 'Maintainer',
    years: ['2017', 'present'],
  },
  {
    title: 'HackSC',
    description:
      "HackSC is Southern California's largest hackathon with over 800+ attendees.",
    href: 'https://hacksc.com',
    role: 'Organizer, Vice President',
    years: ['2020', 'present'],
  },
  {
    title: 'thelounge-bot',
    description: "A helper IRC bot for The Lounge's IRC channel.",
    href: 'https://github.com/thelounge/thelounge-bot',
    role: 'Creator',
    years: ['2016', 'present'],
  },
  {
    title: 'MSHW0184 driver for Linux kernel',
    description:
      'Support for the MSHW0184 device (used in Microsoft Surfaces) in the Linux kernel.',
    href: 'blog/MSHW0184',
    role: 'Creator',
    years: ['2021'],
  },
  {
    title: 'jsonTree',
    description:
      'A 2kb JavaScript library for generating HTML trees from JSON.',
    href: 'https://github.com/maxleiter/jsontree',
    role: 'Creator',
    years: ['2015'],
  },
  {
    title: 'Annie',
    description:
      "Annie is the official app for the University of Southern California's Annenberg Media Center.",
    href: 'https://www.uscannenbergmedia.com',
    role: 'Past developer',
    years: ['2019', '2020'],
  },
  {
    title: 'BASIC visualizer',
    description:
      'A React tool for running and visualizing a fictional BASIC language for a class.',
    href: 'https://maxleiter.github.io/cs109-interpreter/',
    role: 'Creator',
    years: ['2019'],
  },
  {
    title: 'EO-tracker',
    description:
      "A quick tool for viewing recent President's executive orders.",
    href: 'https://eo-tracker.vercel.app/',
    role: 'Creator',
    years: ['2020'],
  },
  {
    title: 'easyarty.com',
    description:
      'A web app for calculating artillery distances in the video game Hell Let Loose.',
    href: 'https://easyarty.com',
    role: 'Creator',
    years: ['2021'],
  },
  {
    title: 'Vercel Raycast',
    description: 'A Raycast extension for managing Vercel via its REST API.',
    href: 'https://github.com/MaxLeiter/vercel-raycast',
    role: 'Creator',
    years: ['2022'],
  },
  {
    title: 'GitHub Activity Visualizer',
    description:
      "A React and d3.js tool for visualizing a user's GitHub activity.",
    href: 'https://git-visualizer.maxleiter.com',
    role: 'Creator',
    years: ['2022'],
  },
]

export function getProjects() {
  return Projects
}

// export default async function getProjects(): Promise<Project[]> {
// if (!process.env.GITHUB_TOKEN) {
//   throw new Error(
//     'No GITHUB_TOKEN provided. Generate a personal use token on GitHub.'
//   )
// }

//   const withStars = await Promise.all(
//     Projects.map(async (proj) => {
//       const split = proj.href.split('/')
//       //[ 'https:', '', 'github.com', 'maxleiter', 'jsontree' ]
//       if (split[2] === 'github.com') {
//         const user = split[3]
//         const repo = split[4]
//         const { stargazers_count, message } = await (
//           await fetch(`https://api.github.com/repos/${user}/${repo}`, {
//             headers: {
//               Authorization: process.env.GITHUB_TOKEN ?? '',
//             },
//           })
//         ).json()
//         // rate limited
//         if (!stargazers_count && message) {
//           return {
//             ...proj,
//             stars: 29,
//           }
//         }

//         return {
//           ...proj,
//           stars: stargazers_count,
//         }
//       } else {
//         return { ...proj, stars: -1 }
//       }
//     })
//   )

//   return withStars
// }
