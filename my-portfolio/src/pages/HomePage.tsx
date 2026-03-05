// src/pages/HomePage.tsx
import { About } from "../sections/About";
import { Backstory } from "../sections/Backstory";
import { Projects } from "../sections/Projects";
import { Contacts } from "../sections/Contacts";
import { Spotlight } from "../sections/Spotlight";

export function HomePage() {
  return (
    <>
      <Spotlight id="spotlight" />
      <About id="about" />
      <Backstory id="backstory" />
      <Projects id="projects" />
      <Contacts id="contacts" />
    </>
  );
}