import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import styled from "styled-components";

const NavWrapper = styled.nav`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

export function Navbar() {
  return (
    <NavWrapper>
      <Container>
        <h1>Antihero</h1>
        <Button>Contact</Button>
      </Container>
    </NavWrapper>
  );
}