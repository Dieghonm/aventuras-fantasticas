import styled from "styled-components";
import { media } from "../media";
import img from '../../imgs/fundo1.jpg'

export const mainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url(${img});
`

export const projectText = styled.p`
  margin: 15em 18em 2em;

  ${ media.laptop }{ 

  }
  ${ media.mobileM }{ 

  }
`


