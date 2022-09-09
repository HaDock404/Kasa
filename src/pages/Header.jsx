import { Link } from 'react-router-dom';
import styled from 'styled-components'

import logo from '../assets/logo.jpg'
import { Colors } from '../styles/Colors.jsx'

const CardLogo = styled.img`
    width: 200px;
    height: 100px;
`

const StyledLink = styled(Link)`
    color: ${Colors.primary};
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 57px;
    padding-top: 25px;
    cursor: pointer;
`

const CardNav = styled.nav`
    display: flex;
    flex-direction: row;
    list-style: none;
`

const CardHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 75px;
    margin-top: 10px;
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