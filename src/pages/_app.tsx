// pages/_app.tsx
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from "usehooks-ts";
import { defaultTheme } from "../styles/themes/defaultTheme";
import GlobalStyle from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useLocalStorage("theme", defaultTheme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
