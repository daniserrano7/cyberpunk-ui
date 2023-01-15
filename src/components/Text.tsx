import React from "react";
import styled, { css, ColorVariant } from "styled-components";

export const Text = ({
  color = "primary",
  glow,
  size = "1rem",
  children,
  style,
}: Props) => {
  const Styled = styled.p`
    color: ${(props) => props.theme.color[color].main};
    font-size: ${size}
      ${glow &&
      css`
        text-shadow: ${(props) => props.theme.glow.small}
          ${(props) => props.theme.color[color].main};
      `};
  `;
  return <Styled style={style}>{children}</Styled>;
};

type Unit = "%" | "px" | "rem";
type SizeProp = `${number}${Unit}`;

interface Props {
  color?: ColorVariant;
  glow?: boolean;
  size?: SizeProp;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
