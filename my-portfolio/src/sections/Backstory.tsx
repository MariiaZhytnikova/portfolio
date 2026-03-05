// src/sections/Backstory.tsx
import styled from "styled-components";
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { HeadingLG, BodyText } from "../components/ui/Typography";

const BackstoryCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
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

type BackstoryProps = {
  id?: string;
};

export function Backstory({ id }: BackstoryProps) {
  return (
    <Section id={id}>
      <Container>
        <BackstoryCard>
          <SectionTitle>My Backstory</SectionTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris.
          </Paragraph>
          <Paragraph>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
          <Paragraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Paragraph>
        </BackstoryCard>
      </Container>
    </Section>
  );
}