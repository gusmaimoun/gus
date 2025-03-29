import Main from "./Main";
import styles from "./Main.module.css";
import Container from "./Container";

function AppLayout() {
  return (
    <>
      <Main className={styles.noise}>
        <Container>
          <img src="./public/gus.png" alt="An anime version of Gus" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            accusantium eum possimus aliquid, beatae soluta aut iste pariatur
            fugit delectus nulla. Eveniet, eius optio blanditiis provident sit
            architecto cumque facere.
          </p>
        </Container>
      </Main>
    </>
  );
}

export default AppLayout;
