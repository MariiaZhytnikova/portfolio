// src/sections/Contacts.tsx
import styled from "styled-components";
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { HeadingLG, BodyText } from "../components/ui/Typography";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/icons/Icons";

const ContactCard = styled(Card)`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const SectionTitle = styled(HeadingLG)`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Description = styled(BodyText)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SocialLink = styled.a`
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.surface};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.purple};
    transform: translateY(-4px);
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.text};
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 14px 32px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(173, 70, 255, 0.4);
  }
`;

type ContactsProps = {
  id?: string;
};

export function Contacts({ id }: ContactsProps) {
  return (
    <Section id={id}>
      <Container>
        <ContactCard>
          <SectionTitle>Get In Touch</SectionTitle>
          <Description>
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </Description>
          <SocialLinks>
            <SocialLink
              href="https://github.com/MariiaZhytnikova"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <GitHubIcon />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon />
            </SocialLink>
            <SocialLink
              href="mailto:your.email@example.com"
              aria-label="Send Email"
            >
              <MailIcon />
            </SocialLink>
          </SocialLinks>
          <ContactButton href="mailto:your.email@example.com">
            Send Me An Email
          </ContactButton>
        </ContactCard>
      </Container>
    </Section>
  );
}
