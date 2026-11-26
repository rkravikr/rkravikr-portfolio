import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, profile } from '@/data/portfolio';
import { siteUrl } from '@/lib/site';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import ProjectDetails from '@/components/Projects/ProjectDetails';

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: `Project Not Found | ${profile.name}`,
    };
  }

  const canonicalPath = `/projects/${project.id}`;
  const pageTitle = `${project.title} — ${project.tagline} | ${profile.name}`;

  return {
    title: pageTitle,
    description: project.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: pageTitle,
      description: project.description,
      url: `${siteUrl}${canonicalPath}`,
      type: 'article',
      authors: [profile.name],
      images: [
        {
          url: project.image,
          alt: `${project.title} — ${project.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: project.description,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) {
    notFound();
  }

  const project = projects[index];
  const prevProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description,
    url: `${siteUrl}/projects/${project.id}`,
    codeRepository: project.repo,
    programmingLanguage: project.tech,
    image: `${siteUrl}${project.image}`,
    author: {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <Navigation />
      <main id="main-content">
        <ProjectDetails
          project={project}
          index={index}
          prevProject={prevProject}
          nextProject={nextProject}
        />
      </main>
      <Footer />
    </>
  );
}
