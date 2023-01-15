import styled, { css, ColorVariant } from "styled-components";

const OuterBar = styled.div<{ color: ColorVariant }>`
  height: 10px;
  display: flex;
  border: 2px solid ${(props) => props.theme.color[props.color].main};
  /* transition: 400ms ease-in-out; */
`;

const InnerBar = styled.div<{
  color: ColorVariant;
  value: number;
  glow?: boolean;
}>`
  background-color: ${(props) => props.theme.color[props.color].main};
  width: ${(props) => props.value}%;
  transition: 500ms ease-in-out;
  ${(props) =>
    props.glow &&
    css`
      box-shadow: ${props.theme.glow.large}
        ${props.theme.color[props.color].main};
    `}
`;

export const ProgressBarGlow = ({ color = "primary", value, glow }: Props) => {
  return (
    <OuterBar color={color}>
      <InnerBar color={color} value={value} glow={glow} />
    </OuterBar>
  );
};

interface Props {
  color?: ColorVariant;
  value: number;
  glow?: boolean;
}
