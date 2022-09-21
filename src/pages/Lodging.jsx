import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import Data from '../datas/Data'
import Carousel from '../components/Carousel'
import TitleLodging from '../components/TitleLodging'
import Host from '../components/Host'
import Tag from '../components/Tag'
import InfoBox from '../components/InfoBox'
import Rating from '../components/Rating'

const GlobalLodging = styled.article``

const SectionTitle = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 100px;
    `

const SectionYardstick = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 100px;
    `

const SectionTag = styled.section`
    display: flex;
    flex-direction: row;
    margin-left: 100px;
    margin-right: 100px;
    `

const SectionRank = styled.section`
    display: flex;
    flex-direction: row;`

const SectionInfo = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 100px;
    margin-right: 100px;
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
                    <SectionTitle>
                        <TitleLodging title={Data[i].title} location={Data[i].location}/>
                        <Host name={Data[i].host.name} picture={Data[i].host.picture}/>
                    </SectionTitle>
                    <SectionYardstick>
                        <SectionTag>
                            <Tag />
                        </SectionTag>
                        <SectionRank>
                            <Rating rating={Data[i].rating}/>
                        </SectionRank>
                    </SectionYardstick>
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