import React from 'react';
import styled from 'styled-components';

const OuterBar = styled.div`
height: 10px;
display: flex;
padding: 2px;
border: 1px solid ${props => props.theme.color[props.color || 'primary']};
/* transition: 400ms ease-in-out; */
`;

const InnerBar = styled.div`
background-color: ${props => props.theme.color[props.color || 'primary']};
width: ${props => props.value}%;
transition: 3000ms ease-in-out;
`;

export default ({ color, value }) => (
  <OuterBar color={color}>
    <InnerBar color={color} value={value} />
  </OuterBar>
)