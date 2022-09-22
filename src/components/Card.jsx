import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import { useParams } from 'react-router-dom';

const StyledCard = styled(Link)`
    @media only screen and (min-width: 500px) {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
        border-radius: 10px;
        width: 340px;
        height: 340px;
        display: flex;
        flex-direction: column;
        text-decoration: none;
    }
    @media only screen and (min-width: 100px) and (max-width: 499px) {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
        border-radius: 10px;
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        text-decoration: none;
    }
`

const CardImage = styled.img`
@media only screen and (min-width: 500px) {
    border-top-left-radius: 10px 10px;
    border-top-right-radius: 10px 10px;
    width: 340px;
    height: 280px;
    object-fit: cover;
}
@media only screen and (min-width: 100px) and (max-width: 499px) {
    border-top-left-radius: 10px 10px;
    border-top-right-radius: 10px 10px;
    width: 300px;
    height: 240px;
    object-fit: cover;
}
`

const CardTitle = styled.h2`
    color: white;
    font-size: 18px;
    font-weight: 100;
    margin: 0px;
    margin-left: 20px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `

function Card(props) {

    return (
        <StyledCard to={props.path}>
            <CardImage src={props.cover}/>
            <CardTitle>{props.title}</CardTitle>
        </StyledCard>
    );
}

export default Card