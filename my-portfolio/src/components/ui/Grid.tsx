// src/components/ui/Grid.ts
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Category = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg};

  /* animated border layer */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;

    padding: 2px; /* border thickness */
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.surface},
      ${({ theme }) => theme.colors.surface},
      ${({ theme }) => theme.colors.orange},
      ${({ theme }) => theme.colors.purple},
      ${({ theme }) => theme.colors.blue},
      ${({ theme }) => theme.colors.purple},
      ${({ theme }) => theme.colors.orange},
      ${({ theme }) => theme.colors.surface},
      ${({ theme }) => theme.colors.surface}
    );
    background-size: 200% 100%;

    /* mask to show ONLY border */
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
    animation: borderRun 2s linear infinite;
  }

  &:hover * {
    opacity: 1;
    animation: borderRun 2s linear infinite;
  }

  @keyframes borderRun {
    from {
      background-position: 200% 50%;
    }
    to {
      background-position: 0% 50%;
    }
  }
`;

export const BGCategory = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};

  & > * {
    position: relative;
    z-index: 1; /* content above lines */
  }

  /* hover lines container */
  .lines {
    position: absolute;
    inset: ${({ theme }) => theme.spacing.md};
    display: flex;
    justify-content: space-between;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    z-index: 0;
  }

  &:hover .lines {
    opacity: 1;
  }

  .line {
    position: relative;
    width: 1px; /* line thickness */
    height: 100%;
    overflow: hidden;
  }

  /* the animated tail for each line */
  .line::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 30px; /* tail length, same as full-page */
    top: -50%;
    left: 0;
    background: linear-gradient(
      to bottom,
    rgba(255,255,255,0) 0%, /* start invisible */
    #FF4500 50%,            /* solid color at halfway */
    #FF4500 100%
    );
    animation: drop 7s cubic-bezier(0.4, 0.26, 0, 0.97) infinite;
    animation-fill-mode: forwards;
  }

  /* staggered colors and delays */
  .line:nth-child(1)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #8A2BE2 75%, #8A2BE2 100%); animation-delay: 2.5s; }
  .line:nth-child(2)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #DC143C 75%, #DC143C 100%); animation-delay: 3.5s; }
  .line:nth-child(3)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FF4500 75%, #FF4500 100%); animation-delay: 0.5s; }
  .line:nth-child(4)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FF6900 75%, #FF6900 100%); animation-delay: 4.5s; }
  .line:nth-child(5)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FFD700 75%, #FFD700 100%); animation-delay: 2s; }
  .line:nth-child(6)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FFD700 75%, #FFD700 100%); animation-delay: 3.5s; }
  .line:nth-child(7)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #00FA9A 75%, #00FA9A 100%); animation-delay: 4s; }
  .line:nth-child(8)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #32CD32 75%, #32CD32 100%); animation-delay: 1s; }
  .line:nth-child(9)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #20B2AA 75%, #20B2AA 100%); animation-delay: 3s; }
  .line:nth-child(10)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #00BFFF 75%, #00BFFF 100%); animation-delay: 5s; }
  .line:nth-child(11)::after { background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #1E90FF 75%, #1E90FF 100%); animation-delay: 1.5s; }

  @keyframes drop {
    0% { top: -50%; }
    100% { top: 110%; }
  }

  /* Border glow and lift on hover */

  // &:hover {
  //   animation: borderGlow 3s ease-in-out infinite;
  //   transform: translateY(-4px);
  // }

  // @keyframes borderGlow {
  //   0% {
  //     box-shadow:
  //       0 0 0 2px #FF6900,
  //       0 0 10px #FF6900;
  //   }
  //   50% {
  //     box-shadow:
  //       0 0 0 2px #AD46FF,
  //       0 0 20px #AD46FF,
  //       0 0 30px #AD46FF;
  //   }
  //   100% {
  //     box-shadow:
  //       0 0 0 2px #FF6900,
  //       0 0 10px #FF6900;
  //   }
  // }
`;