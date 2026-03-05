// src/sections/About.tsx
import styled from "styled-components";
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { HeadingLG, BodyText } from "../components/ui/Typography";

const AboutCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled(HeadingLG)`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Paragraph = styled(BodyText)`
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SkillCategory = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.lg};
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillTag = styled.span`
  padding: 6px 14px;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.surface};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.purple};
    transform: translateY(-2px);
  }
`;

const skills = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Redux"],
  backend: ["Node.js", "Python", "Express", "Django", "REST APIs", "GraphQL"],
  database: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL"],
  devops: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes", "Linux"],
};

type AboutProps = {
  id?: string;
};

export function About({ id }: AboutProps) {
  return (
    <Section id={id}>
      <Container>
        <AboutCard> 
          <SectionTitle>About Me</SectionTitle>
          <Paragraph>
            I'm a passionate software engineer with over 5 years of experience building web 
            applications and distributed systems. I love solving complex problems and turning 
            ideas into reality through clean, efficient code.
          </Paragraph>
          <Paragraph>
            My journey in tech started with a curiosity about how things work under the hood. 
            Today, I work with cutting-edge technologies to build products that impact millions 
            of users. I'm constantly learning and staying up-to-date with the latest industry trends.
          </Paragraph>
          <Paragraph>
            When I'm not coding, you'll find me contributing to open-source projects, writing 
            technical blog posts, or exploring new frameworks and tools. I believe in sharing 
            knowledge and giving back to the developer community.
          </Paragraph>
        </AboutCard>

        <SectionTitle>Skills & Technologies</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <CategoryTitle>Frontend</CategoryTitle>
            <SkillTags>
              {skills.frontend.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </SkillTags>
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>Backend</CategoryTitle>
            <SkillTags>
              {skills.backend.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </SkillTags>
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>Database</CategoryTitle>
            <SkillTags>
              {skills.database.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </SkillTags>
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>DevOps & Tools</CategoryTitle>
            <SkillTags>
              {skills.devops.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </SkillTags>
          </SkillCategory>
        </SkillsGrid>
      </Container>
    </Section>
  );
}
