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
    `
const SectionTag = styled.section`
    display: flex;
    flex-direction: row;
    `

const SectionInfo = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `

function Lodging() {

    const { id } = useParams()

    for (let i = 0; i < Data.length; i++) {
        if (Data[i].id === id) {
            return (
                <GlobalLodging>
                    <Carousel />
                    <SectionTitle>
                        <TitleLodging title={Data[i].title} description={Data[i].description}/>
                        <Host name={Data[i].host.name} picture={Data[i].host.picture}/>
                    </SectionTitle>
                    <SectionTag>
                        <Tag />
                    </SectionTag>
                    <SectionInfo>
                        <InfoBox></InfoBox>
                    </SectionInfo>
                </GlobalLodging>
            )
        }
    }

    
}

export default Lodging