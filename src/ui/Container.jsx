import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  height: 50%;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  place-items: center;
  pointer-events: none; /* Prevent parent from interfering with child interactions */
`;

export default Container;
