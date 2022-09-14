import { aboutData } from '../datas/DataAbout'
import InfoBox from '../components/InfoBox'

function About() {
    return (
        aboutData.map((e, index) => 
            <InfoBox key={`${e.title}-${index}`} title={e.title} description={e.description}/>   
            )
    )
} 

export default About