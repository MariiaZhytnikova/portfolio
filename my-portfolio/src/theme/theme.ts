import { tokens } from "./tokens";

export const darkTheme = {
  ...tokens,
};

export const lightTheme = {
  ...tokens,
  colors: {
    bg: "#f8fafc",
    surface: "#ffffff",
    text: "#0f172a",
    muted: "#64748b",
    accent: "#4f46e5",
    accentSoft: "#6366f1",
  },
};

export const theme = darkTheme;