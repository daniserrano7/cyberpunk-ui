import React from 'react';
import styled, { css } from 'styled-components';

export default ({ color, glow, size, children }) => {
  const Text = styled.p`
    
    color: ${props => props.theme.color[props.color || "primary"]};
    ${props => props.glow && css`
      text-shadow: ${props => props.theme.glow.small} ${props => props.theme.color[props.color || "primary"]};
    `}
  `
  return(
    <Text color={color} glow={glow}>
      {children}
    </Text>
  )
}