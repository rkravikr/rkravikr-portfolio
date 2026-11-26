import { profile, projects } from '@/data/portfolio';

export const dynamic = 'force-static';

export function GET() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '');

  const lines = [
    `# ${profile.name}`,
    '',
    `> ${profile.title} based in ${profile.location}.`,
    '',
    '## Summary',
    profile.bio[0],
    '',
    '## Education',
    `- ${profile.education.degree}, ${profile.education.institution} (Expected ${profile.education.expectedGraduation})`,
    '',
    '## Projects',
    ...projects.map(
      (p) =>
        `- **${p.title}** (${p.category}): ${p.tagline}. Repo: ${p.repo}${p.live ? ` | Live: ${p.live}` : ''}`
    ),
    '',
    '## Links',
    `- GitHub: ${profile.links.github}`,
    `- LinkedIn: ${profile.links.linkedin}`,
    `- Email: ${profile.links.email.replace('mailto:', '')}`,
    `- Resume: ${profile.links.resume}`,
    ...(siteUrl ? [`- Full context: ${siteUrl}/llms-full.txt`] : ['- Full context: /llms-full.txt']),
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
