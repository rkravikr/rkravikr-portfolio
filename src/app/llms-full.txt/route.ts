import { profile, projects } from '@/data/portfolio';

export const dynamic = 'force-static';

export function GET() {
  const lines = [
    `# ${profile.name} — Full Portfolio Context`,
    '',
    `**Role:** ${profile.title}`,
    `**Location:** ${profile.location}`,
    `**Education:** ${profile.education.degree} at ${profile.education.institution} (Expected Graduation: ${profile.education.expectedGraduation})`,
    '',
    '## Biography',
    ...profile.bio.map((p) => `${p}\n`),
    '## Aspiration',
    profile.aspiration,
    '',
    '## Technical Profile',
    `- **Frontend:** ${profile.skills.frontend.join(', ')}`,
    `- **Backend:** ${profile.skills.backend.join(', ')}`,
    `- **Databases & ORM:** ${profile.skills.databases.join(', ')}`,
    `- **Tools & Deployment:** ${profile.skills.tools.join(', ')}`,
    `- **Exploring:** ${profile.skills.exploring.join(', ')}`,
    '',
    '## Development Process',
    ...profile.process.map((step) => `- **${step.step}. ${step.title}:** ${step.description}`),
    '',
    '## Projects',
    ...projects.flatMap((p) => [
      `### ${p.title} — ${p.tagline} (${p.year})`,
      `- **Category:** ${p.category}`,
      `- **Tech Stack:** ${p.tech.join(', ')}`,
      `- **Description:** ${p.description}`,
      `- **Engineering Narrative:** ${p.narrative}`,
      `- **Key Features:** ${p.features.join(', ')}`,
      `- **Repository:** ${p.repo}`,
      ...(p.live ? [`- **Live URL:** ${p.live}`] : []),
      '',
    ]),
    '## Contact & Links',
    `- **GitHub:** ${profile.links.github}`,
    `- **LinkedIn:** ${profile.links.linkedin}`,
    `- **Email:** ${profile.links.email.replace('mailto:', '')}`,
    `- **Resume:** ${profile.links.resume}`,
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
