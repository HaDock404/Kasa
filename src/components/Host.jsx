import styled from "styled-components";
import { Colors } from "../styles/Colors";

const SectionCard = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    `

const NameCard = styled.h4`
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
    `

const PictureCard = styled.img`
    background-color: #C4C4C4;
    width: 64px;
    height: 64px;
    border-radius: 50px;
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