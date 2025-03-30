import Main from "./Main";
import styles from "./Main.module.css";
import Container from "./Container";

function AppLayout() {
  return (
    <>
      <Main className={styles.noise}>
        <Container>
          <img src="/gus.png" alt="Gus" />
          <p>
            Hey, I’m Gus, a Software Engineer based in New York City. When I’m
            not immersed in writing code, I enjoy exploring the city’s vibrant
            food culture and staying updated on the latest in sports. In my
            downtime, I like to stay active with occasional runs, unwind at the
            park, or enjoy some friendly competition in video games with
            friends.
          </p>
        </Container>
      </Main>
    </>
  );
}

export default AppLayout;
