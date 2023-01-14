import { ThemeProvider, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    primary: {
      main: "#e8615a",
    },
    secondary: {
      main: "#2be4ea",
    },
    tertiary: {
      main: "#fed33f",
    },
    bg: "#191a1e",
  },
  glow: {
    small: "0 0 5px",
    large: "0px 0px 15px",
  },
};

export const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

interface Props {
  children: JSX.Element;
}
