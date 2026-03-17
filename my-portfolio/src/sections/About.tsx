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
            I’m a software developer in training at Helsinki Hive, originally coming 
            from a scientific research background. I enjoy figuring out how things work 
            under the hood and turning ideas into real, working applications.
          </BodyText>
          <BodyText>
            I’ve worked with TypeScript, C/C++, Python, and React, building everything 
            from low-level programs and a custom web server to web apps and small games. 
            I like solving tricky problems, debugging, and improving code until it feels 
            clean and solid.
          </BodyText>
          <BodyText>
            I’m curious by nature, not afraid to get stuck, and I usually try to understand 
            things deeply instead of just copying solutions. Right now, I’m focused on growing 
            as a developer and building projects that actually do something useful (or fun).
          </BodyText>
        </Card>
      </Container>
    </Section>
  );
}
