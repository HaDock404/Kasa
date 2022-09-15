import styled from "styled-components";
import { Colors } from "../styles/Colors";
import Data from '../datas/Data'
import { useParams } from "react-router-dom";

const TagCard = styled.div`
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
    `

function Tag() {

    const { id } = useParams()

    for (let i = 0; i < Data.length; i++) {
        if (Data[i].id === id) {
            return (
                Data[i].tags.map(element => {
                    //console.log(element)
                    return <TagCard>{element}</TagCard>
                })
            )
        }
    }
}

export default Tag