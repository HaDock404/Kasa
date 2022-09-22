import styled from 'styled-components';
import Data from '../datas/Data.json'
//import { CardSection, CardImage, CardTitle } from '../components/Card'
import Card from '../components/Card';


const CardArticle = styled.article`
    margin-top: 43px;
    margin-bottom: 43px;
    padding-top: 56px;
    padding-bottom: 56px;
    justify-content: center;
    border-radius: 25px;
    display: inline-grid;
    @media only screen and (min-width: 1440px) {
        background-color: #F6F6F6;
        padding-left: 50px;
        padding-right: 50px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 60px;
	    grid-row-gap: 50px;
        margin-left: 100px;
        margin-right: 100px;
    }
    @media only screen and (min-width: 100px) and (max-width: 1439px) {
        background-color: #F6F6F6;
        padding-left: 50px;
        padding-right: 50px;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 60px;
	    grid-row-gap: 50px;
        margin-left: 100px;
        margin-right: 100px;
    }
    @media only screen and (min-width: 500px) and (max-width: 1050px) {
        background-color: #F6F6F6;
        padding-left: 50px;
        padding-right: 50px;
        grid-template-columns: 1fr;
        grid-column-gap: 60px;
	    grid-row-gap: 50px;
        margin-left: 100px;
        margin-right: 100px;
    }
    @media only screen and (min-width: 100px) and (max-width: 499px) {
        background-color: white;
        padding-left: 0px;
        padding-right: 0px;
        grid-template-columns: 1fr;
        grid-column-gap: 60px;
	    grid-row-gap: 50px;
    }
    `

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