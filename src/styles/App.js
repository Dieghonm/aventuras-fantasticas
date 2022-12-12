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
  
  button {
    background: rgba(51, 51, 51, 1) 0% 0% no-repeat padding-box;
    opacity: 1;
    color: rgba(255, 255, 255, 1);
    :disabled {
    opacity: 0.4;
    }
  }
`;
