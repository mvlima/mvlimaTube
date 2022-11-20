import React from "react";
import { ThemeProvider } from "styled-components";
import AddVideo from "../src/components/AddVideo";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, {
  ColorModeContext,
} from "../src/components/Menu/components/ColorMode";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    backgroundLevel3: "#6B728E",
    borderBase: "#e5e5e5",
    textColorBase: "#1c1c1c",
  },
  dark: {
    backgroundBase: "#474E68",
    backgroundLevel1: "#404258",
    backgroundLevel2: "#50577A",
    backgroundLevel3: "#6B728E",
    borderBase: "#404258",
    textColorBase: "#FAFAFA",
  },
};

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={"dark"}>{props.children}</ColorModeProvider>
  );
}

function MyApp({ Component, pageProps }) {
  const context = React.useContext(ColorModeContext);

  return (
    <ThemeProvider theme={theme[context.mode]}>
      <CSSReset />
      <Component {...pageProps} />
      <AddVideo />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}
