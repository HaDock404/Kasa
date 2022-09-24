import styled from "styled-components";
import { Colors } from "../styles/Colors";

const SectionCard = styled.section`
    `

const TitleCard = styled.h2`
@media only screen and (min-width: 635px) {
    color: ${Colors.primary};
    font-size: 36px;
    font-weight: 200;
    margin-bottom: 0px;
    margin-top: 0px;
}
@media only screen and (max-width: 634px) {
    color: ${Colors.primary};
    font-size: 22px;
    font-weight: 200;
    margin-bottom: 0px;
    margin-top: 0px;
}
    `

const DescriptionCard = styled.h3`
@media only screen and (min-width: 635px) {
    color: ${Colors.primary};
    font-size: 20px;
    font-weight: 200;
    margin-top: 10px;
}
@media only screen and (max-width: 634px) {
    color: ${Colors.primary};
    font-size: 14px;
    font-weight: 200;
    margin-top: 10px;
}
    `

function TitleLodging(props) {
    return (
        <SectionCard>
            <TitleCard>{props.title}</TitleCard>
            <DescriptionCard>{props.location}</DescriptionCard>
        </SectionCard>
        
    );
}

export default TitleLodging