import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme.background};
        -webkit-font-smoothing: antialiased;
        padding: 0 10rem 10rem 10rem;
    }

    body, input, button, textarea{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1rem;
    }
`
