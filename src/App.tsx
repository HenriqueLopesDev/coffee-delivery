import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './Styles/global'
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./Styles/themes/default"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}