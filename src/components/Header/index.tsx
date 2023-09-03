"use client"; // for nextjs 13.4
import React from "react";
import { useLocalStorage } from "usehooks-ts";

import { darkTheme } from "y/styles/themes/darkTheme";
import { defaultTheme } from "y/styles/themes/defaultTheme";
import { Button } from "../Button";
import { NavContainer, NavMenuList, NavSwitcher } from "./styles";

const Header = () => {
  const [, setTheme] = useLocalStorage("theme", defaultTheme);

  return (
    <NavContainer>
      <NavMenuList>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Let's Talk</a>
        </li>
      </NavMenuList>
      <NavSwitcher>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setTheme(defaultTheme)}
          style={{ marginRight: 8 }}
        >
          Use Default Theme
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setTheme(darkTheme)}
        >
          Use Dark Theme
        </Button>
      </NavSwitcher>
    </NavContainer>
  );
};

export default Header;
