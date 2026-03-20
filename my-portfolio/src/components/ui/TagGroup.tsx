// src/components/ui/TagGroup.ts
import styled from "styled-components";

export const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: auto;
`;