import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
  /* cream */
  --color-cream:  rgb(255, 245, 203) 0%;
/* brown */
--color-brown:  rgb(87, 44,33);
/* grey */
--color-grey:  rgb(238, 238, 238) 100%;
/* shadow */
--color-shadow: rgba(0,0,0,0.2);
  }
  &.dark-mode {
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  width: 100vw;
  height: 100vh;
  font-family: "STIX Two Text", serif;
  font-weight: 400;
  font-style: normal;
  color: rgb(87, 44,33);
  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: 1.8rem;
  background: linear-gradient(
    135deg,
    var(--color-cream),
    var(--color-grey)
  );
}

Main, Body {
   overflow: visible; /* Ensure child elements are interactive */
   position: relative; /* Avoid unexpected layering issues */
}

#root{
  width: 100%;
  height: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

/* select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
} */

/* input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
} */

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  width: 30%;
  border-radius: 100%;
  box-shadow: 3px 3px 20px var(--color-shadow);
  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
