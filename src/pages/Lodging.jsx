import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import Data from '../datas/Data'
import Carousel from '../components/Carousel'
import TitleLodging from '../components/TitleLodging'
import Host from '../components/Host'
import Tag from '../components/Tag'
import InfoBox from '../components/InfoBox'
import Rating from '../components/Rating'

const GlobalLodging = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `

const SectionIntro = styled.article`
@media only screen and (min-width: 1000px) {
    width: calc(100% - 200px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
}
@media only screen and (max-width: 999px) {
    width: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}
    `

const SectionTitle = styled.section`
@media only screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 200px);
}
@media only screen and (max-width: 999px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 200px);
}
    `

const SectionYardstick = styled.section`
@media only screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
}
@media only screen and (max-width: 999px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: calc(100% - 200px);
    margin-top: 20px;
}
    `

const SectionTag = styled.section`
@media only screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
}
@media only screen and (max-width: 999px) {
    display: flex;
    flex-direction: row;
}
`

const SectionInfo = styled.section`
@media only screen and (min-width: 1000px) {
    width: calc(100% - 200px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 100px;
    margin-right: 100px;
}
@media only screen and (max-width: 999px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 100px;
    margin-right: 100px;
}
    `

const styleInfoBox = {marginLeft: "0px", marginRight: "0px", width: "40%"}

function Lodging() {

    const { id } = useParams()

    for (let i = 0; i < Data.length; i++) {
        if (Data[i].id === id) {
            const equipments = Data[i].equipments.map(e => <div>{e}</div>)
            return (
                <GlobalLodging>
                    <Carousel backgroundDisplay={Data[i].pictures}/>
                    <SectionIntro>
                        <SectionTitle>
                            <TitleLodging title={Data[i].title} location={Data[i].location}/>
                            <SectionTag>
                                <Tag />
                            </SectionTag>
                        </SectionTitle>
                        <SectionYardstick>
                            <Host name={Data[i].host.name} picture={Data[i].host.picture}/>
                            <Rating rating={Data[i].rating}/>
                        </SectionYardstick>
                    </SectionIntro>
                    <SectionInfo>
                        <InfoBox title="Description" description={Data[i].description} style={styleInfoBox}></InfoBox>
                        <InfoBox title="Equipements" description={equipments} style={styleInfoBox}></InfoBox>
                    </SectionInfo>
                </GlobalLodging>
            )
        }
    }

    
}

export default Lodging