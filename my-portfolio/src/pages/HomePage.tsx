// src/pages/HomePage.tsx
import { About } from "../sections/About";
import { Backstory } from "../sections/Backstory";
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
      <Backstory id="backstory" />
      <Projects id="projects" />
      <Contacts id="contacts" />
    </>
  );
}