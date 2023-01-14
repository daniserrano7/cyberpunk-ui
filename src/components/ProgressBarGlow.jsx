import React from 'react';
import styled, { css } from 'styled-components';

const OuterBar = styled.div`
  height: 10px;
  display: flex;
  border: 2px solid ${props => props.theme.color[props.color || 'primary']};
  /* transition: 400ms ease-in-out; */
`;

const InnerBar = styled.div`
  background-color: ${props => props.theme.color[props.color || 'primary']};
  width: ${props => props.value}%;
  transition: 3000ms ease-in-out;
  ${props => props.glow && css`
    box-shadow: ${props => props.theme.glow.big} ${props => props.theme.color[props.color || "primary"]};
  `}
`;

export default ({ color, value, glow }) => (
  <OuterBar color={color} glow={glow}>
    <InnerBar color={color} value={value} glow={glow}/>
  </OuterBar>
)