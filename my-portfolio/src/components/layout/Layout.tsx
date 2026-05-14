// src/components/layout/Layout.tsx
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { WordEngineProvider } from "../../engine/WordEngineContext";

export function Layout() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Get In Touch", href: "#getintouch" },
  ];

  return (
    <WordEngineProvider>
      <Navbar 
        logoText="Maria Zhytnikova" 
        links={links} 
        showSearch={true}
        showThemeToggle={true}
      />
      <Outlet />
    </WordEngineProvider>
  );
}