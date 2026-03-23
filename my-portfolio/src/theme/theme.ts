import { tokens } from "./tokens";

export const darkTheme = {
  ...tokens,
};

export const lightTheme = {
  ...tokens,
  colors: {
    ...tokens.colors,
    bg: "#f8fafc",
    surface: "#ffffff",
    surfaceSoft: "#e5e7eb80",
    text: "#0f172a",
    textSoft: "#575555",
    muted: "#242f3e",
    accent: "#0A0A0A",
  },
};

export const theme = darkTheme;

