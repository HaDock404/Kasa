import { aboutData } from '../datas/DataAbout'
import InfoBox from '../components/InfoBox'

const styleInfoBox = {marginLeft: "200px", marginRight: "200px"}

function About() {
    return (
        aboutData.map((e, index) => 
            <InfoBox style={styleInfoBox} key={`${e.title}-${index}`} title={e.title} description={e.description}/>   
            )
    )
} 

export default About