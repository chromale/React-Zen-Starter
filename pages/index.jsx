import React, { Component } from "react";
import Head from "next/head";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  html, body, #__next {
    height: 100%;
    font-family: "Noto Sans SC", sans-serif;
    font-size: 14px;
  }
  body { 
    background: rgba(242, 242, 242, 0.15);
  }
`;

const Title = styled.h1`
  font-size: 36px;
  padding: 125px 0 50px;
  text-align: center;
`;

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            key="viewport"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+SC:400,500,700"
            rel="stylesheet"
            key="google-font-notosans"
          />
        </Head>
        <Title>
          Better than a thousand hollow words, is one word that brings peace.
        </Title>
      </React.Fragment>
    );
  }
}
