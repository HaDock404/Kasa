import { Link } from 'react-router-dom';
import styled from 'styled-components'

import logo from '../assets/logoTop.svg'
import { Colors } from '../styles/Colors.js'

const CardLogo = styled.img`
    width: 175px;
    height: 90px;
    margin-left: 100px;
`

const StyledLink = styled(Link)`
    color: ${Colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 57px;
    padding-top: 25px;
    font-size: 18px;
`

const CardNav = styled.nav`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-right: 100px;
`

const CardHeader = styled.header`
@media only screen and (min-width: 650px) {
    max-width: 1440px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 75px;
    margin-top: 10px;
}
`

function Header() {
    return (
        <CardHeader>
            <CardLogo src={logo}/>
            <CardNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A propos</StyledLink>
            </CardNav>
        </CardHeader>
        
    )
}

export default Header