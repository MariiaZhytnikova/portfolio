// src/sections/Projects.tsx
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { SubtitleText, HeadingLG, BodyText } from "../components/ui/Typography";
import { Grid } from "../components/ui/Grid";
import { StyledCategory } from "../components/ui/Grid";
import { Tag } from "../components/ui/Tag";
import { TagGroup } from "../components/ui/TagGroup";
import { ButtonContainer, TextIconButton } from "../components/ui/Button";
import { GitHubIcon, ExternalLinkIcon } from "../components/icons/Icons";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A full-stack web application built with modern technologies. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/MariiaZhytnikova/project-alpha",
    live: "https://project-alpha.example.com",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Mobile-first responsive design system with reusable components. Sed do eiusmod tempor incididunt ut labore.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    github: "https://github.com/MariiaZhytnikova/project-beta",
    live: "https://project-beta.example.com",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Real-time data visualization dashboard with interactive charts. Duis aute irure dolor in reprehenderit.",
    tech: ["Vue.js", "GraphQL", "MongoDB"],
    github: "https://github.com/MariiaZhytnikova/project-beta",
    live: "https://project-beta.example.com",
  },
];

type ProjectsProps = {
  id?: string;
};

export function Projects({ id }: ProjectsProps) {
  return (
    <Section id={id}>
      <Container>
        <HeadingLG>Featured Projects</HeadingLG>
        <Grid>
          {projects.map((project) => (
            <StyledCategory key={project.id}>
              <SubtitleText>{project.title}</SubtitleText>
              <BodyText>{project.description}</BodyText>
              <TagGroup>
                {project.tech.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </TagGroup>
                <ButtonContainer>
                  <TextIconButton
                    label="GitHub"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                  >
                  <GitHubIcon />
                  <span>GitHub</span>
                  </TextIconButton>
                  <TextIconButton
                    label="Live Demo"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Demo`}
                  >
                  <ExternalLinkIcon />
                  <span>Live Demo</span>
                </TextIconButton>
              </ButtonContainer>
            </StyledCategory>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
