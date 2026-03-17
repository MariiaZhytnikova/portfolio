// src/sections/About.tsx
import { theme } from "../theme/theme";
import { GradientSubtitleText } from "../components/ui/Typography";
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { Grid } from "../components/ui/Grid";
import { Category } from "../components/ui/Grid";
import { TagGroup } from "../components/ui/TagGroup";
import { Tag } from "../components/ui/Tag";
import { HeadingLG } from "../components/ui/Typography";



const skills = {
  frontend: ["React", "TypeScript", "Tailwind CSS", "Styled Components"],
  backend: ["Node.js", "Python", "Express", "Fastify", "REST APIs"],
  database: ["PostgreSQL", "MariaDB", "Redis", "SQLite", "MySQL"],
  devops: ["Docker", "Git", "CI/CD", "Linux", "Nginx"],
  systems: ["C", "C++", "POSIX", "Low-level programming"],
};

type SkillsProps = {
  id?: string;
};

export function Skills({ id }: SkillsProps) {
  return (
    <Section id={id} $bg={theme.colors.surfaceSoft}>
      <Container>
        <Card height="auto">
        <HeadingLG>Skills & Technologies</HeadingLG>
        <Grid>
          <Category>
            <GradientSubtitleText>Frontend</GradientSubtitleText>
            <TagGroup>
              {skills.frontend.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </TagGroup>
          </Category>

          <Category>
            <GradientSubtitleText>Backend</GradientSubtitleText>
            <TagGroup>
              {skills.backend.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </TagGroup>
          </Category>

          <Category>
            <GradientSubtitleText>Database</GradientSubtitleText>
            <TagGroup>
              {skills.database.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </TagGroup>
          </Category>

          <Category>
            <GradientSubtitleText>DevOps & Tools</GradientSubtitleText>
              <TagGroup>
                {skills.devops.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </TagGroup>
          </Category>

          <Category>
            <GradientSubtitleText>Systems</GradientSubtitleText>
            <TagGroup>
              {skills.systems.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </TagGroup>
          </Category>
        </Grid>
        </ Card>
      </Container>
    </Section>
  );
}
