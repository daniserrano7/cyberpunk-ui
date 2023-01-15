import styled, { css, ColorVariant } from "styled-components";

export const Divider = ({ color = "primary", glow }: Props) => {
  const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${(props) => props.theme.color[color].main};
    ${() =>
      glow &&
      css`
        box-shadow: ${(props) => props.theme.glow.small}
          ${(props) => props.theme.color[color].main};
      `}
  `;
  return <Divider />;
};

interface Props {
  color?: ColorVariant;
  glow?: boolean;
}
