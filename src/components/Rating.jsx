import styled from 'styled-components'
import star0 from '../assets/star0.svg'
import star1 from '../assets/star1.svg'

const SectionRating = styled.div`
    display: flex;
    flex-direction: row;
    `

    const StarRating = styled.img`
    width: 50px;
    height: 50px;
    `

function Rating(props) {
    const rating = props.rating

    let stars = [];

    switch(rating) {
        case "0":
            stars = [<StarRating src={star0}/>, <StarRating src={star0}/>, <StarRating src={star0}/>, <StarRating src={star0}/>, <StarRating src={star0}/>]
            break;
        case "1":
            stars = [<StarRating src={star1}/>, <StarRating src={star0}/>, <StarRating src={star0}/>, <StarRating src={star0}/>, <StarRating src={star0}/>]
            break;
        case "2":
            stars = [<StarRating src={star1}/>, <StarRating src={star1}/>, <StarRating src={star0}/>, <StarRating src={star0}/>, <StarRating src={star0}/>]
            break;
        case "3":
            stars = [<StarRating src={star1}/>, <StarRating src={star1}/>, <StarRating src={star1}/>, <StarRating src={star0}/>, <StarRating src={star0}/>]
            break;
        case "4":
            stars = [<StarRating src={star1}/>, <StarRating src={star1}/>, <StarRating src={star1}/>, <StarRating src={star1}/>, <StarRating src={star0}/>]
            break;
        case "5":
            stars = [<StarRating src={star1}/>, <StarRating src={star1}/>, <StarRating src={star1}/>, <StarRating src={star1}/>, <StarRating src={star1}/>]
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