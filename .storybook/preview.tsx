import React from "react"
import { Decorator, Preview } from "@storybook/react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../src/themes"

export const parameters = {
  actions: { argTypeRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxigen, Ubuntu, Cantarell, Fila Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoratinon: none;
    transition: .25s;
    color: #000000;
  }
`

// Themeの適用
const preview: Preview = {
  decorators: [
    (story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {story()}
      </ThemeProvider>
    )
  ]
}


export default preview