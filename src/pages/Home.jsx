import styled from 'styled-components'

export const CardPanorama = styled.article`
@media only screen and (min-width: 635px) {
  width: calc(100% - 200px);
  max-width: 1440px;  
  background-repeat: no-repeat;
  background-attachment: local;
  background-position: center;
  background-size: cover;
  margin-top: 50px;
  height: 200px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
}
@media only screen and (max-width: 634px) {
  width: calc(100% - 20px);
  max-width: 1440px;  
  background-repeat: no-repeat;
  background-attachment: local;
  background-position: center;
  background-size: cover;
  margin-top: 10px;
  height: 111px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: white;
}
`

const CardLeitmotif = styled.h2`
@media only screen and (min-width: 635px) {
  color: white;
  font-size: 38px;
  font-weight: 300;
}
@media only screen and (max-width: 634px) {
  color: white;
  font-size: 25px;
  font-weight: 300;
  margin-left: 10px;
}
`


function Home(props) {
  return (
    <CardPanorama style={props.style}>
      <CardLeitmotif>{props.leitmotif}</CardLeitmotif>
    </CardPanorama>
  );
}

export default Home;
