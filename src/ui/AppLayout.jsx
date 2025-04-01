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
import { Outlet } from "react-router";
import { NavLink, Link } from "react-router";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function something() {
  console.log("gus");
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
          something();
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
              <NavLink to={"/home"}>
                <Tree name="home" />
              </NavLink>
              <NavLink to={"/tech-stack"}>
                <Tree name="tech stack" />
              </NavLink>
              <Tree name={<span>🙀 something...</span>} />
            </Tree>
          </MenuContainer>

          <Outlet />
        </Container>
      </Main>
    </>
  );
}

export default AppLayout;
