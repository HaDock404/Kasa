import styled from "styled-components";
import { Colors } from "../styles/Colors";
import { aboutData } from '../datas/DataAbout'
//import { useState } from "react";


const CardArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 31px;
    `

const CardTitle = styled.div`
    background-color: ${Colors.primary};
    width: 1023px;
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
    transform: rotate(180deg);
    `

const CardDescription = styled.div`
    background-color: #F6F6F6;
    width: 1023px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    `

const CardDescriptionText = styled.h3`
    color: ${Colors.primary};
    font-size: 20px;
    margin-top: 36px;
    margin-bottom: 18px;
    margin-left: 18px;
    margin-right: 27px;
    font-weight: 100;`

//const caca = document.querySelector("")

function test(e) {
    console.log("ok");
    console.log(e.target)
    
}

function About() {

    /*const [state, setState] = useState(false);

    const toggle = () => {
        setState(!state)
    }*/

    return (
        aboutData.map((e, index) => 
        <CardArticle key={`${e.title}-${index}`}>
            <CardTitle>
                <Cardh2>{e.title}</Cardh2>
                <CardSpan onClick={() => test(e)}>v</CardSpan>
            </CardTitle>
            <CardDescription>
                <CardDescriptionText>{e.description}</CardDescriptionText>
            </CardDescription>
        </CardArticle>)
    );
}

export default About