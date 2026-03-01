// styled.d.ts
import "styled-components";
import { tokens } from "./tokens";

// tell TS that DefaultTheme = tokens
declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof tokens.colors;
    radius: typeof tokens.radius;
    spacing: typeof tokens.spacing;
    container: typeof tokens.container;
  }
}