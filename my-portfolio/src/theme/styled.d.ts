// styled.d.ts
import "styled-components";
import { tokens } from "./tokens";

type StringMap<T> = {
  [K in keyof T]: string;
};

// tell TS that DefaultTheme = tokens
declare module "styled-components" {
  export interface DefaultTheme {
    colors: StringMap<typeof tokens.colors>;
    typography: typeof tokens.typography;
    radius: StringMap<typeof tokens.radius>;
    spacing: StringMap<typeof tokens.spacing>;
    gradients: StringMap<typeof tokens.gradients>;
    button: StringMap<typeof tokens.button>;
    transitions: StringMap<typeof tokens.transitions>;
    container: StringMap<typeof tokens.container>;
    shadows: StringMap<typeof tokens.shadows>;
  }
}
