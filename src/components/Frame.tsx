import React from "react";
import styled, { ColorVariant } from "styled-components";

export const Frame = ({ color = "primary", children }: Props) => {
  const Styled = styled.div`
    width: auto;
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme.color[color].main};
    background-color: ${({ theme }) =>
      theme.color[color].bg || theme.color.primary.bg};
  `;

  return <Styled>{children}</Styled>;
};

interface Props {
  color?: ColorVariant;
  children: React.ReactNode;
}
