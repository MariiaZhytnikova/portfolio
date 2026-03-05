// src/pages/HomePage.tsx
import { About } from "../sections/About";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { Contacts } from "../sections/Contacts";
import { Spotlight } from "../sections/Spotlight";

export function HomePage() {
  return (
    <>
      <Spotlight id="spotlight" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contacts id="contacts" />
    </>
  );
}