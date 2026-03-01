import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentSoft};
    transform: translateY(-1px);
  }
`;