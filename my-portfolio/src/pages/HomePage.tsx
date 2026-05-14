// src/pages/HomePage.tsx
import { About } from "../sections/About";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { GetInTouch } from "../sections/GetInTouch";
import { Spotlight } from "../sections/Spotlight";

export function HomePage() {
  return (
    <>
      <Spotlight id="spotlight" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <GetInTouch id="getintouch" />
    </>
  );
}