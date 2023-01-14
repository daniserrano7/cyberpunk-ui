import styled, { css } from "styled-components";

export const Divider = ({ color, glow }) => {
  const Divider = styled.hr`
    border: none;
    border-top: 1px solid
      ${(props) => props.theme.color[props.color || "primary"]};
    ${(props) =>
      props.glow &&
      css`
        box-shadow: ${(props) => props.theme.glow.small}
          ${(props) => props.theme.color[props.color || "primary"]};
      `}
  `;
  return <Divider color={color} glow={glow} />;
};

// interface Props {
//   color: string;
//   glow: boolean;
// }
