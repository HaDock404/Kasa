import styled from "styled-components";
import { Colors } from "../styles/Colors";
import { useState } from "react";

const CardArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 31px;
    `

const CardTitle = styled.div`
    background-color: ${Colors.primary};
    width: 100%;
    height: 47px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `

const Cardh2 = styled.h2`
    color: white;
    font-size: 18px;
    font-weight: 100;
    margin-left: 18px;
    `

const CardSpan =styled.span`
    color: white;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    `

const CardDescription = styled.div`
    background-color: #F6F6F6;
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-right: 100px;
    margin-left: 100px;
    `

const CardDescriptionText = styled.h3`
    color: ${Colors.primary};
    font-size: 20px;
    margin-top: 36px;
    margin-bottom: 18px;
    margin-left: 18px;
    margin-right: 27px;
    font-weight: 100;
    `

function InfoBox(props) {
    const [state, setState] = useState(false)

    const toggle = () => {
        setState(!state)

    }

    return (
        <CardArticle style={props.style}>
            <CardTitle>
                <Cardh2>{props.title}</Cardh2>
                <CardSpan onClick={toggle} className={"toogle--open" + (state ? "" : "toogle--close")}>v</CardSpan>
            </CardTitle>
            <CardDescription className={"collapse--close" + (state ? 'collapse--open' : '')}>
                <CardDescriptionText>{props.description}</CardDescriptionText>
            </CardDescription>
        </CardArticle>
    )
}

export default InfoBox