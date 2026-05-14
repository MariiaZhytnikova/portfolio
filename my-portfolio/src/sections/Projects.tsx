// src/sections/Projects.tsx
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { SubtitleText, HeadingLG, BodyText } from "../components/ui/Typography";
import { Grid, BGCategory } from "../components/ui/Grid";
import { Tag } from "../components/ui/Tag";
import { TagGroup } from "../components/ui/TagGroup";
import { ButtonContainer, AnimatedTextIconButton } from "../components/ui/Button";
import { GitHub } from "../components/data/SocialLinksData";
import { ExternalLink } from "lucide-react"
import { projects } from "../components/data/ProjectsData";

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
            <BGCategory key={project.id}>
              <div className="lines">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div className="line" key={i}></div>
                ))}
              </div>
              <SubtitleText>{project.title}</SubtitleText>
              <BodyText>{project.description}</BodyText>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginTop: "12px",
                  }}
                />
              )}
              <TagGroup>
                {project.tech.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </TagGroup>
                <ButtonContainer>
                  <AnimatedTextIconButton
                    label="GitHub"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                  >
                  <GitHub />
                  <span>GitHub</span>
                  </AnimatedTextIconButton>
                  <AnimatedTextIconButton
                    label="Live Demo"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Demo`}
                  >
                  <ExternalLink />
                  <span>Live Demo</span>
                </AnimatedTextIconButton>
              </ButtonContainer>
            </BGCategory>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
