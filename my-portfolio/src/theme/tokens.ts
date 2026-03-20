// src/theme/tokens.ts
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
    orangeLight: "#FF690033",
    purple: "#AD46FF",
    purpleLight: "#AD46FF33",
    blue: "#00d4ff",
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
    h3: {
      size: "1.5rem",
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
    bodySM: {
      size: "1rem",
      weight: 400,
    },
    tag: {
      size: "0.9rem",
      weight: 400,
    },
  },

  radius: {
    sm: "8px",      //"0.5rem"
    md: "14px",     //"0.875rem"
    lg: "20px",     //"1.25rem"
    pill: "999px",  //"62.5rem"
  },

  spacing: {
    xs: "4px",      //"0.25rem"
    sm: "8px",      //"0.5rem"
    md: "16px",     //"1rem"
    lg: "24px",     //"1.5rem"
    xl: "40px",     //"2.5rem"
    xxl: "64px",    //"4rem"
    xxxl: "96px",   //"6rem"
  },

  gradients: {
    primary: "linear-gradient(to right, #AD46FF, #FF6900)",
  },
  
  button: {
    paddingY: "14px",
    paddingX: "32px",
    iconSize: "18px",
    hoverLift: "translateY(-2px)",
    width: "175px",
    textWeightL: "600",
    textWeightM: "500",
    textSize: "0.95rem",
  },

  transitions: {
    default: "all 0.3s ease",
    fast: "all 0.2s ease",
    slow: "all 0.4s ease",
    colorDefault: "color 0.3s ease",
    colorFast: "color 0.2s ease",
    colorSlow: "color 0.4s ease",
    input: "border-color 0.2s ease-out, box-shadow 0.2s ease-out",
    fade: "opacity 0.3s ease-in-out",
  },

  container: {
    maxWidth: "1200px",
    maxLG: "992px",
    maxMD: "768px",
    maxSM: "576px",
  },

  shadows: {
    sm: "0 2px 4px rgba(0,0,0,0.1)",
    md: "0 4px 6px rgba(0,0,0,0.2)",
    lg: "0 8px 16px rgba(0,0,0,0.3)",
    glow: "0 0 0 2px #FF6900, 0 0 10px 4px #FF6900, 0 0 20px 6px #FF6900, 0 0 30px 8px #FF6900"
  },

} as const;