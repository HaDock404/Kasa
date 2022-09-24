import styled from "styled-components";
import { Colors } from "../styles/Colors";

const SectionCard = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    `

const NameCard = styled.h4`
@media only screen and (min-width: 635px) {
    text-align: right;
    font-size: 18px;
    color: ${Colors.primary};
    font-weight: 300;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0px;
    height: 64px;
    margin-right: 10px;
    width: 100px;
}
@media only screen and (max-width: 634px) {
    text-align: right;
    font-size: 12px;
    color: ${Colors.primary};
    font-weight: 300;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0px;
    height: 64px;
    margin-right: 0px;
    width: 100px;
}
    `

const PictureCard = styled.img`
@media only screen and (min-width: 635px) {
    background-color: #C4C4C4;
    width: 64px;
    height: 64px;
    border-radius: 50px;
}
@media only screen and (max-width: 634px) {
    background-color: #C4C4C4;
    width: 44px;
    height: 44px;
    border-radius: 50px;
}
    
    `

function Host(props) {
    return (
        <SectionCard>
            <NameCard>{props.name}</NameCard>
            <PictureCard src={props.picture}></PictureCard>
        </SectionCard>
    )
}

export default Host