import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: ColorVariantTones;
      secondary: ColorVariantTones;
      tertiary: ColorVariantTones;
      bg: string;
    };

    glow: {
      small: string;
      large: string;
    };
  }

  export type ColorVariant = "primary" | "secondary" | "tertiary";
  interface ColorVariantTones {
    main: string;
  }

  export type GlowVariant = keyof DefaultTheme["glow"];
}
