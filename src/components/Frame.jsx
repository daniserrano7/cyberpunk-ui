import React from 'react';
import styled from 'styled-components';

export default ({ color, children }) => {
  const Frame = styled.div`
    width: auto;
    padding: 0.75rem;
    border: 1px solid ${props => props.theme.color[props.color || 'primary']};
    background-color: ${props => props.theme.color.bg_light}
  `;

  return (
    <Frame color={color}>
      {children}
    </Frame>
  )
}