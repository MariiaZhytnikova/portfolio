import styled from "styled-components";

export const Container = styled.div<{
  $paddingTop?: string;
  $paddingBottom?: string;
}>`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xs};
  padding-top: ${({ $paddingTop, theme }) =>
    $paddingTop ?? theme.spacing.xs};

  padding-bottom: ${({ $paddingBottom, theme }) =>
    $paddingBottom ?? theme.spacing.xs};
`;
