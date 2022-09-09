import styled from 'styled-components'
import panorama from '../assets/panorama.jpg'

const backgroundPanorama = panorama

export const CardPanorama = styled.article`
  background:linear-gradient(rgba(43, 43, 43, 0.5), rgba(48, 48, 48, 0.5)), url(${backgroundPanorama});
  background-repeat: no-repeat;
  background-attachment: fixed;
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
  `

const CardLeitmotif = styled.h2`
  color: white;
  font-size: 38px;
  font-weight: 100;
  `


function Home() {
  return (
    <CardPanorama>
      <CardLeitmotif>Chez vous, partout et ailleurs</CardLeitmotif>
    </CardPanorama>
  );
}

export default Home;
