import styled from "styled-components";
import { media } from "../media";
import img from '../../imgs/fundo1.jpg'

export const mainDiv = styled.div`
  /* width: 110vw; */
  /* height: 100vh; */
  /* background-size: cover; */
  background-position: center;
  background-size: contain;
  background-image: url(${img});
`

export const projectText = styled.p`
  margin: 20% 15% 5%;

  ${ media.laptop }{ 

  }
  ${ media.mobileG }{ 

  }
`


