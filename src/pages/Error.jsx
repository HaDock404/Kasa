import styled from 'styled-components'
import { Colors } from '../styles/Colors.js'
import { Link } from 'react-router-dom';

const CardError = styled.div`
@media only screen and (min-width: 750px) {
    margin: 0px;
    margin-top: 5%;
    position: fixed;
    top: 45%;
    left: 50%;
    height: 70%;
    transform: translate(-50%, -50%);
    color: ${Colors.primary};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: space-between;
}
@media only screen and (max-width: 749px) {
    margin: 0px;
    margin-top: 5%;
    position: fixed;
    top: 65%;
    left: 50%;
    height: 70%;
    transform: translate(-50%, -50%);
    color: ${Colors.primary};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    width: calc(100% - 10px);
}
`

const CardCode = styled.h1`
@media only screen and (min-width: 750px) {
    font-size: 222px;
    font-weight: 700;
    margin: 0px;
}
@media only screen and (max-width: 749px) {
    font-size: 100px;
    font-weight: 700;
    margin: 0px;
}
`

const CardMessage = styled.div`
@media only screen and (min-width: 750px) {
    font-size: 28px;
    font-weight: 700;
    width: 700px;
}
@media only screen and (max-width: 749px) {
    font-size: 14px;
    font-weight: 700;
    width: calc(100% - 0px);
    margin-top: 10px;
}
`

const StyledBackHome = styled(Link)`
@media only screen and (min-width: 750px) {
    font-size: 18px;
    text-decoration: underline;
    color: ${Colors.primary};
    padding-top: 100px;
}
@media only screen and (max-width: 749px) {
    font-size: 14px;
    text-decoration: underline;
    color: ${Colors.primary};
    padding-top: 100px;
}
`

function Error() {
    return (
        <CardError>
            <CardCode>404</CardCode>
            <CardMessage>Oups! La page que vous demandez n'existe pas.</CardMessage>
            <StyledBackHome to='/'>Retourner sur la page d'accueil</StyledBackHome>
        </CardError>
    )
}

export default Error