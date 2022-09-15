import styled from "styled-components";
import { Colors } from "../styles/Colors";

const SectionCard = styled.section`
    `

const TitleCard = styled.h2`
    color: ${Colors.primary};
    font-size: 36px;
    font-weight: 200;
    margin-bottom: 0px;
    margin-top: 0px;
    `

const DescriptionCard = styled.h3`
    color: ${Colors.primary};
    font-size: 20px;
    font-weight: 200;
    margin-top: 10px;
    `

function TitleLodging(props) {
    return (
        <SectionCard>
            <TitleCard>{props.title}</TitleCard>
            <DescriptionCard>{props.description}</DescriptionCard>
        </SectionCard>
        
    );
}

export default TitleLodging