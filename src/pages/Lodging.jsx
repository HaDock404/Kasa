import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import Data from '../datas/Data'
import Carousel from '../components/Carousel'
import TitleLodging from '../components/TitleLodging'
import Host from '../components/Host'
import Tag from '../components/Tag'
import InfoBox from '../components/InfoBox'

const GlobalLodging = styled.article``

const SectionTitle = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 100px;
    `
const SectionTag = styled.section`
    display: flex;
    flex-direction: row;
    margin-left: 100px;
    margin-right: 100px;
    `

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
            return (
                <GlobalLodging>
                    <Carousel backgroundDisplay={Data[i].pictures}/>
                    <SectionTitle>
                        <TitleLodging title={Data[i].title} location={Data[i].location}/>
                        <Host name={Data[i].host.name} picture={Data[i].host.picture}/>
                    </SectionTitle>
                    <SectionTag>
                        <Tag />
                    </SectionTag>
                    <SectionInfo>
                        <InfoBox title="Description" description={Data[i].description} style={styleInfoBox}></InfoBox>
                        <InfoBox title="Equipements" description={Data[i].equipments} style={styleInfoBox}></InfoBox>
                    </SectionInfo>
                </GlobalLodging>
            )
        }
    }

    
}

export default Lodging