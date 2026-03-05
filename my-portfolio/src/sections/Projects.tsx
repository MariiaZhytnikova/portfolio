// src/sections/Projects.tsx
import styled from "styled-components";
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { HeadingLG, BodyText } from "../components/ui/Typography";

const SectionTitle = styled(HeadingLG)`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ProjectCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled(BodyText)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const TechTag = styled.span`
  padding: 4px 12px;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.purple};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: 0.875rem;
  font-weight: 500;
`;

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A full-stack web application built with modern technologies. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Mobile-first responsive design system with reusable components. Sed do eiusmod tempor incididunt ut labore.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Real-time data visualization dashboard with interactive charts. Duis aute irure dolor in reprehenderit.",
    tech: ["Vue.js", "GraphQL", "MongoDB"],
  },
];

type ProjectsProps = {
  id?: string;
};

export function Projects({ id }: ProjectsProps) {
  return (
    <Section id={id}>
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
}
