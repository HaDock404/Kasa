import styled from "styled-components";
import { useState } from "react";

const CarouselCard = styled.div`
@media only screen and (min-width: 635px) {
    height: 415px;
    width: calc(100% - 200px);
    max-width: 1440px;
    margin-top: 25px;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}
@media only screen and (max-width: 634px) {
    height: 255px;
    width: calc(100% - 20px);
    max-width: 1440px;
    margin-top: 25px;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}
`

const ArrowLeftCard = styled.div`
@media only screen and (min-width: 635px) {
    color: white;
    transform: rotate(90deg);
    font-size: 70px;
    cursor: pointer;
    margin-left: 20px;
}
@media only screen and (max-width: 634px) {
    color: white;
    transform: rotate(90deg);
    font-size: 20px;
    cursor: pointer;
    margin-left: 20px;
}
`

const ArrowRightCard = styled.div`
@media only screen and (min-width: 635px) {
    color: white;
    transform: rotate(-90deg);
    font-size: 70px;
    cursor: pointer;
    margin-right: 20px;
}
@media only screen and (max-width: 634px) {
    color: white;
    transform: rotate(-90deg);
    font-size: 20px;
    cursor: pointer;
    margin-right: 20px;
}
`

const LengthCard = styled.div`
@media only screen and (min-width: 635px) {
    color: white;
    position: absolute;
    left: 50%;
    bottom: 28px;
}
@media only screen and (max-width: 634px) {
    color: white;
    position: absolute;
    left: 50%;
    bottom: 28px;
}
`

let DataStorage;
//let background = {}

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

    const background = {backgroundImage: `url(${DataStorage[rank]})`}

    return (
    <CarouselCard style={background}>
        <ArrowLeftCard onClick={toggleFewer}>V</ArrowLeftCard>
        <ArrowRightCard onClick={toggleAdd}>V</ArrowRightCard>
        <LengthCard>{rank + 1}/{DataStorage.length}</LengthCard>
    </CarouselCard>
    );
}

export default Carousel