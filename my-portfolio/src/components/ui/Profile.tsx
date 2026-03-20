import styled from "styled-components";
import { motion } from "framer-motion";

export const ProfileImageWrapper = styled(motion.div)`
  width: 300px;
  height: auto;
  position: relative;
  display: block;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.surfaceSoft};
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};

  span {
    margin-bottom: 0;
    line-height: 1;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    transition: ${({ theme }) => theme.transitions.default};

    svg {
      height: 20px;
      width: auto;
      fill: currentColor;
      transition: ${({ theme }) => theme.transitions.default};
    }
  }

  &:hover a {
    color: ${({ theme }) => theme.colors.orange};
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.orange};
  }

  &:hover {
    transform: translateY(-2px);
  }
`;
