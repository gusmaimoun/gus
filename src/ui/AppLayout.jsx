import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { useSpring } from "@react-spring/web";
import { a } from "@react-spring/web";
import Main from "./Main";
import styles from "./Main.module.css";
import Container from "./Container";
import * as Icons from "../components/MenuIcons";
import {
  MenuContainer,
  Title,
  Frame,
  Content,
  toggle,
} from "../components/Menu";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const Tree = React.memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });

  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];

  return (
    <Frame style={{ zIndex: 10, pointerEvents: "auto" }}>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3, cursor: "pointer" }}
        onClick={() => {
          setOpen(!isOpen);
        }}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  );
});

function AppLayout() {
  return (
    <>
      <Main className={styles.noise}>
        <Container>
          <MenuContainer>
            <Tree name="menu" defaultOpen>
              <Tree name="hello" />
              <Tree name="tech stack" />
              <Tree name={<span>🙀 something...</span>} />
            </Tree>
          </MenuContainer>
          <img src="/gus.png" alt="Gus" />
          <p>
            Hey, I’m Gus, a Software Engineer based in New York City. When I’m
            not immersed in writing code, I enjoy exploring the city’s vibrant
            food culture and staying updated on the latest in sports. In my
            downtime, I like to stay active with occasional runs, unwind at the
            park, or enjoy video games with friends.
          </p>
        </Container>
      </Main>
    </>
  );
}

export default AppLayout;
