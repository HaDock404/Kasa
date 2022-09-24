import styled from "styled-components";
import { Colors } from "../styles/Colors";
import Data from '../datas/Data'
import { useParams } from "react-router-dom";

const TagCard = styled.div`
@media only screen and (min-width: 635px) {
    min-width: 115px;
    height: 25px;
    border-radius: 10px;
    background-color: ${Colors.primary};
    color: white;
    margin-right: 10px;
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}
@media only screen and (max-width: 634px) {
    min-width: 115px;
    height: 25px;
    border-radius: 10px;
    background-color: ${Colors.primary};
    color: white;
    margin-right: 5px;
    padding-right: 5px;
    padding-left: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    white-space: normal;
}
    `

function Tag() {

    const { id } = useParams()

    for (let i = 0; i < Data.length; i++) {
        if (Data[i].id === id) {
            return (
                Data[i].tags.map(element => {
                    return <TagCard key={element}>{element}</TagCard>
                })
            )
        }
    }
}

export default Tag