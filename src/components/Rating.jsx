import styled from 'styled-components'
import star0 from '../assets/star0.svg'
import star1 from '../assets/star1.svg'

const SectionRating = styled.div`
    display: flex;
    flex-direction: row;
    `

    const StarRating = styled.img`
    @media only screen and (min-width: 635px) {
        width: 40px;
        height: 40px;
    }
    @media only screen and (max-width: 634px) {
        width: 20px;
        height: 20px;
    }
    
    `

function Rating(props) {
    const rating = props.rating

    let stars = [];

    switch(rating) {
        case "0":
            stars = [<StarRating src={star0} key="1"/>, <StarRating src={star0} key="2"/>, <StarRating src={star0} key="3"/>, <StarRating src={star0} key="4"/>, <StarRating src={star0} key="5"/>]
            break;
        case "1":
            stars = [<StarRating src={star1} key="1"/>, <StarRating src={star0} key="2"/>, <StarRating src={star0} key="3"/>, <StarRating src={star0} key="4"/>, <StarRating src={star0} key="5"/>]
            break;
        case "2":
            stars = [<StarRating src={star1} key="1"/>, <StarRating src={star1} key="2"/>, <StarRating src={star0} key="3"/>, <StarRating src={star0} key="4"/>, <StarRating src={star0} key="5"/>]
            break;
        case "3":
            stars = [<StarRating src={star1} key="1"/>, <StarRating src={star1} key="2"/>, <StarRating src={star1} key="3"/>, <StarRating src={star0} key="4"/>, <StarRating src={star0} key="5"/>]
            break;
        case "4":
            stars = [<StarRating src={star1} key="1"/>, <StarRating src={star1} key="2"/>, <StarRating src={star1} key="3"/>, <StarRating src={star1} key="3"/>, <StarRating src={star0} key="4"/>]
            break;
        case "5":
            stars = [<StarRating src={star1} key="1"/>, <StarRating src={star1} key="2"/>, <StarRating src={star1} key="3"/>, <StarRating src={star1} key="4"/>, <StarRating src={star1} key="5"/>]
            break;
        default:
      }

    return (
        <SectionRating>
            {stars}
        </SectionRating>
    );
}

export default Rating