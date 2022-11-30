import styled from "styled-components";
import { media } from "./media";
import img from '../imgs/fundo1.jpg'

export const Icon = styled.div`
  font-size : 2em;
  display : none;
  position: fixed;
  margin: 0.2em;
  z-index: top;
  ${ media.mobileG }{ 
    display : inline;
  }
`;

export const AppDiv = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(117, 190, 218);
  background-image: url(${img});
  background: rgb;
  display : flex;
  font: normal normal normal 16px/22px MADE Okine Sans PERSONAL USE;
  ${ media.mobileG }{ 
    display: block ;
  }
`;
