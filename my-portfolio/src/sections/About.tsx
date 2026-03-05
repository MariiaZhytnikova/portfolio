// src/sections/About.tsx
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { HeadingLG, BodyText } from "../components/ui/Typography";

type AboutProps = {
  id?: string;
};

export function About({ id }: AboutProps) {
  return (
    <Section id={id}>
      <Container>
        <Card height="auto"> 
          <HeadingLG>About Me</HeadingLG>
          <BodyText>
            I'm a passionate software engineer with over 5 years of experience building web 
            applications and distributed systems. I love solving complex problems and turning 
            ideas into reality through clean, efficient code.
          </BodyText>
          <BodyText>
            My journey in tech started with a curiosity about how things work under the hood. 
            Today, I work with cutting-edge technologies to build products that impact millions 
            of users. I'm constantly learning and staying up-to-date with the latest industry trends.
          </BodyText>
          <BodyText>
            When I'm not coding, you'll find me contributing to open-source projects, writing 
            technical blog posts, or exploring new frameworks and tools. I believe in sharing 
            knowledge and giving back to the developer community.
          </BodyText>
        </Card>
      </Container>
    </Section>
  );
}
