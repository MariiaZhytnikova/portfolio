// src/sections/Spotlight.tsx
// import styled from "styled-components";
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { 
  PrimaryButton,
  SecondaryButton,
  IconButton,
  ButtonContainer,
} from "../components/ui/Button";
import {
  GradientHeading,
  SubtitleText,
  BodyText,
} from "../components/ui/Typography";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/icons/Icons";

type SpotlightProps = {
  id?: string;
};

  export function Spotlight({ id }: SpotlightProps) {
  return (
    <Section id={id}>
      <Container>
        <Card padding="100px 32px">
          <GradientHeading>Hi, I'm Maria</GradientHeading>
          <SubtitleText>Software Engineer</SubtitleText>
          <BodyText>
            I build exceptional digital experiences with modern web technologies.
            Specialized in full-stack development, cloud architecture, and creating
            scalable solutions that make a difference.
          </BodyText>
          <ButtonContainer>
            <PrimaryButton href="#contacts">
              Get In Touch
            </PrimaryButton>
            <SecondaryButton
                href="/cv.pdf"
                download
                aria-label="Download CV as PDF"
              >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </SecondaryButton>
          </ButtonContainer>
          <ButtonContainer>
            <IconButton
              href="https://github.com/MariiaZhytnikova"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="mailto:your.email@example.com"
              aria-label="Send Email"
            >
              <MailIcon />
            </IconButton>
          </ButtonContainer>
        </Card>
      </Container>
    </Section>
  );
}