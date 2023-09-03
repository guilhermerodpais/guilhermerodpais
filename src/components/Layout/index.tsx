"use client";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../styles/GlobalStyles";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <GlobalStyles />
        {props.children}
      </body>
    </html>
  );
}
