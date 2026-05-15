// src/sections/Spotlight.tsx
import { useRef, useEffect } from "react";
import type { WordEngine } from "../engine/wordEngine";
import { useWordEngine } from "../engine/WordEngineContext";
import { Section } from "../components/layout/Section";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { SocialButtons } from "../components/ui/SosialButtons.tsx";
import { Download, socialLinks } from "../data/SocialLinksData.tsx";
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
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<WordEngine | null>(null);

  const { setEngine } = useWordEngine();

  useEffect(() => {
    let animationFrameId = 0;
    let cancelled = false;

    const initializeEngine = async () => {
      const canvasEl = canvasRef.current;
      if (!canvasEl) return;

      const { WordEngine } = await import("../engine/wordEngine");
      if (cancelled || !canvasEl.isConnected) return;

      const engine = new WordEngine(canvasEl);
      engineRef.current = engine;

      setEngine(engine);
      // engine.addWord("Hello");

      const tick = () => {
        if (cancelled) {
          return;
        }

        engine.update();
        animationFrameId = window.requestAnimationFrame(tick);
      };

      animationFrameId = window.requestAnimationFrame(tick);
    };

    void initializeEngine();

    return () => {
      cancelled = true;
      setEngine(null);

      engineRef.current?.destroy();
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  console.log("canvasRef:", canvasRef.current);

  return (
    <Section id={id}>
      <Container>
        <Card 
          // $padding="100px 32px 160px"
          height="clamp(640px, 78vh, 920px)"
          style={{
          position: "relative",
          overflow: "hidden",
        }}
        >
          {/* PIXI BACKGROUND LAYER */}
          <div
            ref={canvasRef}
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              height: "100%",
              width: "100%",
              pointerEvents: "auto",
              outline: "2px solid red",
            }}
          />
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
                href="./CV-Mariia_Zhytnikova.pdf"
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
