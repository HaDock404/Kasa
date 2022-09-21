import styled from 'styled-components'
//import panorama from '../assets/panorama.jpg'

//const backgroundPanorama = panorama
//background:linear-gradient(rgba(43, 43, 43, 0.5), rgba(48, 48, 48, 0.5)), url(${backgroundPanorama});
export const CardPanorama = styled.article`
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
  @media only screen and (min-width: 1440px) {}
  `

const CardLeitmotif = styled.h2`
  color: white;
  font-size: 38px;
  font-weight: 100;
  `


function Home(props) {
  return (
    <CardPanorama style={props.style}>
      <CardLeitmotif>{props.leitmotif}</CardLeitmotif>
    </CardPanorama>
  );
}

export default Home;
