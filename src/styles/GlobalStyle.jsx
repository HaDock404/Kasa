import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    body {
        margin-left: 100px;
        margin-right: 100px;
        font-family: 'Montserrat', sans-serif;
    }
`

function GlobalStyle() {

    return <StyledGlobalStyle/>
}

export default GlobalStyle