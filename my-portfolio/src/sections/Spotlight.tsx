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
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../components/icons/Icons";

type SpotlightProps = {
  id?: string;
};

  export function Spotlight({ id }: SpotlightProps) {
  return (
    <Section id={id}>
      <Container>
        <Card $padding="100px 32px">
          <GradientHeading>Hi, I'm Maria</GradientHeading>
          <SubtitleText>Software Engineer</SubtitleText>
          <BodyText>
            Software engineering student turning ideas into real, working software. 
            I explore systems, debug issues, and refine solutions — everything from 
            low-level programs to full-stack applications. I learn by doing, experimenting, 
            and improving along the way.
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
              <DownloadIcon />
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