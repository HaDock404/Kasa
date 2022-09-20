import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    body {

        font-family: 'Montserrat', sans-serif;
    }
`

function GlobalStyle() {

    return <StyledGlobalStyle/>
}

export default GlobalStyle