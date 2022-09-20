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
    margin-left: 100px;
    margin-right: 100px;
    `

//export const id = "alexandre"

function App() {
    return (
        <CardArticle>
            {Data.map(e =>
                <Card path={`/lodging/${e.id}`} cover={e.cover} title={e.title} key={e.id}></Card>
                )}          
        </CardArticle>
    );
}

export default App