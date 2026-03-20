// src/sections/Backstory.tsx
import { tokens} from "../theme/tokens.ts";
import { Section } from "../components/layout/Section.tsx";
import { useRef, useState } from "react";
import { Container } from "../components/ui/Container.tsx";
import HiveLogo from '../assets/hive-logo-light.svg?react';
import { SocialButtons } from "../components/ui/SosialButtons.tsx";
import { socialLinks } from "../components/data/SocialLinksData.tsx";
import { ContactList } from "../components/ui/ContactList.tsx";
import { contactInfo } from "../components/data/ContactInfoData.tsx";
import { experiences } from "../components/data/ExperienceData.tsx";
import { Card } from "../components/ui/Card.tsx";
import { Divider } from "../components/ui/Divider.tsx";
import { HeadingLG, HeadingMD, ColorfulBodyText, BodyText, BodyTextSm } from "../components/ui/Typography";
import { CenteredWrapper } from "../components/ui/CenteredWrapper.tsx";
import { PrimaryButton} from "../components/ui/Button.tsx";
import {
  ProfileImageWrapper,
  Badge,
} from "../components/ui/Profile.tsx";
import {
  TimelineGlowSharp,
  TimelineWrapper,
  TimelineLine,
  TimelineGlow,
  TimelineGradient
} from "../components/ui/TimeLine.tsx";
import {
  ColumnGrid,
  LeftColumn,
  RightColumn,
} from "../components/ui/Columns.tsx";


type AboutProps = {
  id?: string;
};

export function About({ id }: AboutProps) {
  const [mouseY, setMouseY] = useState(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      const relativeY = e.clientY - rect.top;
      setMouseY(relativeY);
    }
  };

const getLineColor = (position: number) => {
  const colors = [
    tokens.colors.orange,
    tokens.colors.purple,
    tokens.colors.blue,
    tokens.colors.purple,
    tokens.colors.orange
  ];
  const colorIndex = Math.floor((position / 100) * colors.length);
  return colors[Math.min(colorIndex, colors.length - 1)];
};

  return (
    <Section id={id ?? "about"}>
      <Container>
        <Card height="auto"> 
          <HeadingLG>About Me</HeadingLG>
          <BodyText>
            I’m a software developer student at Helsinki Hive, originally coming 
            from a scientific research background.
          </BodyText>
        </Card>
        <ColumnGrid>
          {/* Left Column: Profile Card */}
          <LeftColumn>
            <Card height="auto" $padding="0">
              <CenteredWrapper>
                <ProfileImageWrapper
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="./image.png"
                    alt="./image.png"
                  />
                </ProfileImageWrapper>
                <HeadingMD>Mariia Zhytnikova</HeadingMD>
                <Badge>
                  <a
                    href="https://www.hive.fi/about-hive/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ColorfulBodyText>Student at</ColorfulBodyText>
                    <HiveLogo />
                  </a>
                </Badge>
              <Divider />
              {/* Contact Info */}
              <ContactList items={contactInfo} />
              <SocialButtons buttons={socialLinks}/>
              <PrimaryButton as="a"  href="#contact">Get In Touch</PrimaryButton>
              </CenteredWrapper>
            </Card>
          </LeftColumn>

          {/* Right Column: Timeline */}
          <RightColumn>
            <TimelineWrapper ref={timelineRef} onMouseMove={handleMouseMove}>
              
              {/* Line */}
              <TimelineLine>
                <TimelineGradient />

                <TimelineGlow
                  style={{
                    top: mouseY - 60,
                    background: "linear-gradient(to bottom, transparent, currentColor, transparent)",
                    color: getLineColor(
                      (mouseY / (timelineRef.current?.clientHeight || 1)) * 100
                    ),
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />

                <TimelineGlowSharp
                  style={{
                    top: mouseY - 40,
                    background: "linear-gradient(to bottom, transparent, currentColor, transparent)",
                    color: getLineColor(
                      (mouseY / (timelineRef.current?.clientHeight || 1)) * 100
                    ),
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </TimelineLine>

              {/* Text */}
              {experiences.map((exp, index) => (
                <BodyTextSm as="p" key={index}>
                  {exp.content}
                </BodyTextSm>
              ))}
            </TimelineWrapper>
          </RightColumn>
        </ColumnGrid>
      </Container>
    </Section>
  );
}
