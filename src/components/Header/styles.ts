import { styled } from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export const NavMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 4px;
  padding-left: 10px;
  width: 100%;

  li {
    list-style-type: none;
    a {
      color: ${({ theme }) => theme.palette.primary.contrastText};
    }
  }
`;

export const NavSwitcher = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
