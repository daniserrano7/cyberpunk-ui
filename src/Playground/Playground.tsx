import { useState, useEffect } from "react";
import styled from "styled-components";

import { Frame } from "components/Frame";
import { Text } from "components/Text";
import { Divider } from "components/Divider";
import { ProgressBarFill } from "../components/ProgressBarFill";
import { ProgressBarGlow } from "../components/ProgressBarGlow";

const Title = ({ id, children }: TitleProps) => (
  <h1 id={id}>
    <Text color="tertiary">{children}</Text>
  </h1>
);

interface TitleProps {
  id: string;
  children: string;
}

const Container = styled.div`
  height: 100%;
  display: flex;
  padding: 30px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.bg};
`;

const Menu = styled.div`
  width: 200px;
  position: fixed;
  padding: 5px;
  border: 1px solid white;
`;

const MenuPanel = () => {
  const items = [
    {
      id: "frame",
      name: "Frame",
    },
    {
      id: "text",
      name: "Text",
    },
    {
      id: "divider",
      name: "Divider",
    },
    {
      id: "progress-bar",
      name: "Progress Bar",
    },
    {
      id: "button",
      name: "Button",
    },
  ];

  return (
    <Menu>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>
              <Text color="tertiary">{item.name}</Text>
            </a>
          </li>
        ))}
      </ul>
    </Menu>
  );
};

export const PlaygroundComponent = () => {
  const [progressBar, setProgressBar] = useState(100);

  useEffect(() => {
    const progress = progressBar === 100 ? 0 : 100;
    setTimeout(() => setProgressBar(progress), 3000);
  }, [progressBar]);

  return (
    <Container>
      <MenuPanel />
      <div style={{ marginLeft: "240px" }}>
        <Title id="frame"># Frame</Title>
        <Frame color="primary">
          <Text color="primary">
            <b>Frame color terciario</b>
            <br />
            Aute ad deserunt exercitation culpa aliquip incididunt cupidatat.
            Cillum ipsum ullamco minim aliquip incididunt aliqua minim elit sunt
            quis veniam officia amet. Aute ullamco aliquip eiusmod aliquip
            officia esse mollit. Voluptate elit ex consequat culpa fugiat anim
            qui dolor exercitation. Pariatur consectetur excepteur consectetur
            adipisicing ea proident reprehenderit excepteur incididunt ea est
            velit. Dolore ex qui ipsum eu eiusmod nisi reprehenderit nisi
            laborum nostrud ea adipisicing.
          </Text>
        </Frame>
        <br />
        <Frame color="secondary">
          <Text color="secondary">
            <b>Frame color terciario</b>
            <br />
            Aute ad deserunt exercitation culpa aliquip incididunt cupidatat.
            Cillum ipsum ullamco minim aliquip incididunt aliqua minim elit sunt
            quis veniam officia amet. Aute ullamco aliquip eiusmod aliquip
            officia esse mollit. Voluptate elit ex consequat culpa fugiat anim
            qui dolor exercitation. Pariatur consectetur excepteur consectetur
            adipisicing ea proident reprehenderit excepteur incididunt ea est
            velit. Dolore ex qui ipsum eu eiusmod nisi reprehenderit nisi
            laborum nostrud ea adipisicing.
          </Text>
        </Frame>
        <br />
        <Frame color="tertiary">
          <Text color="tertiary">
            <b>Frame color terciario</b>
            <br />
            Aute ad deserunt exercitation culpa aliquip incididunt cupidatat.
            Cillum ipsum ullamco minim aliquip incididunt aliqua minim elit sunt
            quis veniam officia amet. Aute ullamco aliquip eiusmod aliquip
            officia esse mollit. Voluptate elit ex consequat culpa fugiat anim
            qui dolor exercitation. Pariatur consectetur excepteur consectetur
            adipisicing ea proident reprehenderit excepteur incididunt ea est
            velit. Dolore ex qui ipsum eu eiusmod nisi reprehenderit nisi
            laborum nostrud ea adipisicing.
          </Text>
        </Frame>
        <br />

        <Title id="text"># Text</Title>
        <Text>Texto sin glow</Text>
        <Text glow>Texto con glow</Text>
        <br />
        <Text color="secondary">Texto sin glow secundario</Text>
        <Text color="secondary" glow>
          Texto con glow secundario
        </Text>
        <br />
        <Text color="tertiary">Texto sin glow terciario</Text>
        <Text color="tertiary" glow>
          Texto con glow terciario
        </Text>

        <Title id="divider"># Divider</Title>
        <Divider />
        <br />
        <Divider glow />
        <br />
        <Divider color="secondary" />
        <br />
        <Divider color="secondary" glow />
        <br />
        <Divider color="tertiary" />
        <br />
        <Divider color="tertiary" glow />

        <Title id="progress-bar"># Progress Bar</Title>
        <Text style={{ marginBottom: "10px" }}>Progress Bar fill</Text>
        <ProgressBarFill value={progressBar} />
        <br />
        <Text style={{ marginBottom: "10px" }}>Progress Bar glow</Text>
        <ProgressBarGlow color="primary" value={progressBar} glow />

        <Title id="button"># Button</Title>
      </div>
    </Container>
  );
};
