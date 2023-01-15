import styled from "styled-components";

import { PlaygroundComponent } from "./Playground/Playground";
import { Theme } from "./theme";

export const App = () => {
  const App = styled.div`
    /* height: 100%;
    background-color: black; */
  `;

  return (
    <Theme>
      <App>
        <PlaygroundComponent />
      </App>
    </Theme>
  );
};
