// src/components/layout/Layout.tsx
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Layout() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Backstory", href: "#backstory" },
    { label: "Projects", href: "#projects" },
    { label: "Contacts", href: "#contacts" },
  ];

  return (
    <>
      <Navbar 
        logoText="Maria Zhytnikova" 
        links={links} 
        showSearch={true}
        showThemeToggle={true}
      />
      <Outlet />
    </>
  );
}