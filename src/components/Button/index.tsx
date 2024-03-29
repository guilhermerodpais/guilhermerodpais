// components/Button.tsx
import styled, { css, DefaultTheme } from "styled-components";
import { IPalette } from "../../types/styled";

export type ButtonProps = {
  active?: boolean; // making this props optional
  variant: "contained" | "outlined";
  color: keyof Omit<DefaultTheme["palette"], "common">; // we use our theme to type the colors
};
export const Button = styled.button<ButtonProps>`
  /* common properties for button  */
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 4px 8px;
  :hover {
    cursor: pointer;
  }
  /* button specific props with theme */
  ${({ variant = "contained", theme, color }) => {
    const _color = theme.palette[color] as IPalette;
    // render different styles for each variant:
    switch (variant) {
      case "outlined":
        return css`
          background-color: ${_color.contrastText};
          color: ${_color.main};
          border: 1px solid ${_color.main};
        `;
      case "contained":
      default: {
        return css`
          background-color: ${_color.main};
          color: ${_color.contrastText};
          border: none;
        `;
      }
    }
  }}
`;
