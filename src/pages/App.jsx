import styled from 'styled-components';
import Data from '../datas/Data.json'


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
const CardSection = styled.section`
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    border-radius: 10px;
    width: 340px;
    height: 340px;
    display: flex;
    flex-direction: column;
    `

const CardImage = styled.img`
    border-top-left-radius: 10px 10px;
    border-top-right-radius: 10px 10px;
    width: 340px;
    height: 280px;
    object-fit: cover;
    `

const CardTitle = styled.h2`
    color: white;
    font-size: 18px;
    font-weight: 100;
    margin: 0px;
    margin-left: 20px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `

function App() {

    //console.log(Data[0].id)

    Data.map(e => console.log(e.title))
      
    return (
    <CardArticle>
        {Data.map(e => <CardSection><CardImage src={e.cover} /><CardTitle>{e.title}</CardTitle></CardSection>)}
    </CardArticle>
    )
}

export default App