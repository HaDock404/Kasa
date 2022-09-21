import styled from "styled-components";
import logo from '../assets/logoBottom.svg'

const CardFooter = styled.footer`
    background-color: black;
    height: 150px;
    width: 100%;
    margin-left: 0px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const LogoCard = styled.img`
    width: 100px;
    height: 50px;
    `

const CopyrightCard = styled.h4`
    font-size: 14px;
    color: white;
    font-weight: 100;`

function Footer() {
    return (
        <CardFooter>
            <LogoCard src={logo}/>
            <CopyrightCard>© 2020 Kasa. All rights reserved    </CopyrightCard>
        </CardFooter>
    );
}

export default Footer