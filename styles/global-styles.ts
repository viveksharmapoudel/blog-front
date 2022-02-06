import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html{
    scroll-behavior: smooth;
    height:100%;
    overflow:auto;
  }

  body {
    margin: 0px;
    padding: 0px;
    height:100%;
    font-family: "yugothic-regular", sans-serif;
  }

  p, h1, h2, h3, h4 {
    margin-bottom: 0;
  }
  h1, h2, h3, h4 {
    margin-bottom: 0px;
  }
  p{
    margin: 0px;
  }
  
  button { 
    cursor: pointer;
  }

  ul, li {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
