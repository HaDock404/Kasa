import styled from "styled-components";
import { useState } from "react";

const CarouselCard = styled.div`
    height: 415px;
    margin-top: 25px;
    border-radius: 25px;
    margin-right: 100px;
    margin-left: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    `

const ArrowLeftCard = styled.div`
    color: white;
    transform: rotate(90deg);
    font-size: 70px;
    cursor: pointer;
    margin-left: 20px;
    `

const ArrowRightCard = styled.div`
    color: white;
    transform: rotate(-90deg);
    font-size: 70px;
    cursor: pointer;
    margin-right: 20px;
    `

let DataStorage;

let background = {}


function Carousel(props) {

    DataStorage = props.backgroundDisplay
    
    const [rank, setState] = useState(0)

    const toggleFewer = () => {
        if (rank === 0) {
            setState(DataStorage.length - 1)
        } else {
            setState(rank - 1)
        }
    }

    const toggleAdd = () => {
        if (rank >= (DataStorage.length - 1)) {
            setState(0)
        } else {
            setState(rank + 1)
        }
    }

    background = {backgroundImage: `url(${DataStorage[rank]})`}

    return (
    <CarouselCard style={background}>
        <ArrowLeftCard onClick={toggleFewer}>V</ArrowLeftCard>
        <ArrowRightCard onClick={toggleAdd}>V</ArrowRightCard>
    </CarouselCard>
    );
}

export default Carousel