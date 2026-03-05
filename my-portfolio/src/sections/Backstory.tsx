// src/sections/Backstory.tsx
import styled from "styled-components";
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { HeadingLG, BodyText } from "../components/ui/Typography";

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const TimelineItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.bg};
  border-radius: ${({ theme }) => theme.radius.md};
  border-left: 3px solid ${({ theme }) => theme.colors.purple};
`;

const Year = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purple};
  min-width: 80px;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSoft};
  line-height: 1.6;
`;

type BackstoryProps = {
  id?: string;
};

export function Backstory({ id }: BackstoryProps) {
  return (
    <Section id={id}>
      <Container>
        <Card height="auto">
          <HeadingLG>My Journey</HeadingLG>
          <BodyText>
            Every developer has a unique story. Here's mine—from curiosity to career, 
            and the pivotal moments that shaped who I am today.
          </BodyText>
          
          <Timeline>
            <TimelineItem>
              <Year>2018</Year>
              <Content>
                <Title>The Spark</Title>
                <Description>
                    For many years, I worked as a research officer in Kharkiv, 
                    diving deep into molecular dynamics simulations and studying 
                    protein–DNA interactions. I loved the thrill of solving 
                    complex problems, analyzing data, and making sense 
                    of tiny molecular movements. Around the same time, 
                    I collaborated remotely as a senior scientific consultant, 
                    reviewing literature and clinical databases to support research 
                    decisions. It was intense, challenging work—but something inside 
                    me kept nudging me toward creating rather than just analyzing.
                </Description>
              </Content>
            </TimelineItem>

            <TimelineItem>
              <Year>2020</Year>
              <Content>
                <Title>First Professional Role</Title>
                <Description>
                    In 2020, I started exploring computer science. 
                    Online courses from MIT, Stanford, and UC Berkeley opened a 
                    whole new world for me. Programming was different—it was 
                    immediate, tangible, and endlessly creative. I realized I 
                    could apply the problem-solving mindset and structured thinking 
                    I had honed in science to building software that people could actually use.
                </Description>
              </Content>
            </TimelineItem>

            <TimelineItem>
              <Year>2024</Year>
              <Content>
                <Title>Leveling Up</Title>
                <Description>
                    Then, in November 2024, I joined Hive Helsinki, a 
                    fully project-based program. There, I’ve been diving into C and C++ 
                    projects, learning low-level system programming, and collaborating 
                    with talented peers to create apps like a Booking Calendar for our 
                    school’s meeting rooms.
                </Description>
              </Content>
            </TimelineItem>

            <TimelineItem>
              <Year>2024</Year>
              <Content>
                <Title>Today</Title>
                <Description>
                    Switching careers wasn’t just about learning new skills—it was about 
                    challenging myself, adapting, and stepping into a completely new culture. 
                    My curiosity, persistence, and love for learning have guided me through 
                    this transition.
                </Description>
              </Content>
            </TimelineItem>
          </Timeline>
        </Card>
      </Container>
    </Section>
  );
}
