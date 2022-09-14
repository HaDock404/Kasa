import styled from 'styled-components';
import Data from '../datas/Data.json'
//import { CardSection, CardImage, CardTitle } from '../components/Card'
import Card from '../components/Card';


const CardArticle = styled.article`
    background-color: #F6F6F6;
    margin-top: 43px;
    margin-bottom: 43px;
    padding-top: 56px;
    padding-bottom: 56px;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: center;
    border-radius: 25px;
    display: inline-grid;
	grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 60px;
	grid-row-gap: 50px;
    `

/*function App() {
      
    return (
    <CardArticle>
        {Data.map(e => 
        <CardSection>
            <CardImage src={e.cover} />
            <CardTitle>{e.title}</CardTitle>
        </CardSection>)}
    </CardArticle>
    )
}*/

function App() {
    return (
        <CardArticle>
            {Data.map(e =>
                <Card cover={e.cover} title={e.title}></Card>
                )}          
        </CardArticle>
    );
}

export default App