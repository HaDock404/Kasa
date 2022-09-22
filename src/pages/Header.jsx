import { Link } from 'react-router-dom';
import styled from 'styled-components'

import logo from '../assets/logoTop.svg'
import { Colors } from '../styles/Colors.js'

const CardLogo = styled.img`
    @media only screen and (min-width: 635px) {
        width: 175px;
        height: 90px;
        margin-top: 10px;
    }
    @media only screen and (max-width: 634px) {
        width: 125px;
        height: 60px;
        margin-top: 10px;
    }
`

const StyledLink = styled(Link)`
    @media only screen and (min-width: 635px) {
        color: ${Colors.primary};
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-left: 57px;
        padding-top: 25px;
        font-size: 18px;
    }
    @media only screen and (max-width: 634px) {
        color: ${Colors.primary};
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-left: 20px;
        padding-top: 25px;
        font-size: 14px;
    }
`

const CardNav = styled.nav`
    @media only screen and (min-width: 635px) {
        display: flex;
        flex-direction: row;
        list-style: none;
    }
    @media only screen and (max-width: 634px) {
        display: flex;
        flex-direction: row;
        list-style: none;
    }
`

const CardHeader = styled.header`
    @media only screen and (min-width: 635px) {
        max-width: 1440px;
        width: calc(100% - 200px);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 75px;
        margin-top: 10px;
    }
    @media only screen and (max-width: 634px) {
        max-width: 1440px;
        width: calc(100% - 20px);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 75px;
        margin-top: 0px;
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