import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const SearchInput = styled.input`
  height: 38px;
  min-width: 200px;
  padding: 0 ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.surface};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSoft};
  outline: none;
  transition: ${({ theme }) => theme.transitions.input};

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.bg};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.bg};
  }
`;

export const MagnifierIcon = styled.span`
  position: absolute;
  right: ${({ theme }) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%) scale(1);
  font-size: 16px;
  color: ${({ theme }) => theme.colors.muted};
  transition: ${({ theme }) => theme.transitions.input};

  ${SearchWrapper}:hover & {
    transform: translateY(-50%) scale(1.2);
    color: ${({ theme }) => theme.colors.bg};
  }
`;