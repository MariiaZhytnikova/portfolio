export const tokens = {
  colors: {
    bg: "#0A0A0A",
    surface: "#262626",
    surfaceSoft: "#26262680",
    text: "#e5e7eb",
    textSoft: "#A1A1A1",
    muted: "#FAFAFA",
    accent: "#FFFFFF",
    orange: "#FF6900",
    purple: "#AD46FF",
  },

  typography: {
    h1: {
      size: "3rem",
      weight: 700,
    },
    h2: {
      size: "2rem",
      weight: 600,
    },
    subtitle: {
      size: "1.4rem",
      weight: 600,
    },
    body: {
      size: "1.2rem",
      weight: 400,
    },
    tag: {
      size: "0.9rem",
      weight: 400,
    },
  },

  radius: {
    sm: "8px",
    md: "14px",
    lg: "20px",
    pill: "999px",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
    xlTwo: "64px",
    xlThree: "96px",
  },

  gradients: {
    primary: "linear-gradient(to right, #AD46FF, #FF6900)",
  },
  
  button: {
    paddingY: "14px",
    paddingX: "32px",
    iconSize: "18px",
    transition: "all 0.2s ease",
    hoverLift: "translateY(-2px)",
  },

  container: {
    maxWidth: "1200px",
  },

  shadows: {
    sm: "0 2px 4px rgba(0,0,0,0.1)",
    md: "0 4px 6px rgba(0,0,0,0.2)",
    lg: "0 8px 16px rgba(0,0,0,0.3)",
  },

} as const;