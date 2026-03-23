// src/sections/Spotlight.tsx
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { SocialButtons } from "../components/ui/SosialButtons.tsx";
import { Download, socialLinks } from "../components/data/SocialLinksData.tsx";
import { 
  PrimaryButton,
  SecondaryButton,
  ButtonContainer,
} from "../components/ui/Button";
import {
  GradientHeading,
  SubtitleText,
  BodyText,
  HoverReveal,
} from "../components/ui/Typography";

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
            I know exactly what I'm doing...
            <HoverReveal>
              But in a much more real sense, I have no idea what I'm doing.
            </HoverReveal>
          </BodyText>
          <BodyText>
            Software engineering student turning ideas into real, working software. 
            I explore systems, debug issues, and refine solutions — everything from 
            low-level programs to full-stack applications. I learn by doing, experimenting, 
            and improving along the way.
            </ BodyText>
          <ButtonContainer>
            <PrimaryButton as="a" href="#getintouch">
              Get In Touch
            </PrimaryButton>
            <SecondaryButton
                as="a"
                href={`${import.meta.env.BASE_URL}CV-Mariia_Zhytnikova.pdf`}
                download
                aria-label="Download CV as PDF"
              >
              <Download />
              Download CV
            </SecondaryButton>
          </ButtonContainer>
          <SocialButtons buttons={socialLinks}/>
        </Card>
      </Container>
    </Section>
  );
}
