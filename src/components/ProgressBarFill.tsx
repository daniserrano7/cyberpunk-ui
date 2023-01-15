import styled, { ColorVariant } from "styled-components";

// Extracted to apply transition.
const OuterBar = styled.div<{ color: ColorVariant }>`
  height: 10px;
  display: flex;
  padding: 2px;
  border: 1px solid ${(props) => props.theme.color[props.color].main};
`;

const InnerBar = styled.div<{ color: ColorVariant; value: number }>`
  background-color: ${(props) => props.theme.color[props.color].main};
  width: ${(props) => props.value}%;
  transition: width 500ms ease-in-out;
`;

export const ProgressBarFill = ({ color = "primary", value }: Props) => {
  return (
    <OuterBar color={color}>
      <InnerBar color={color} value={value} />
    </OuterBar>
  );
};

interface Props {
  color?: ColorVariant;
  value: number;
}
