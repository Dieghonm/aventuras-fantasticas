import styled from "styled-components";
import { media } from "../media";
import dado from '../../imgs/DADO.png'

export const StatusDiv = styled.div`
  display: flex ;
  flex-direction: column;
  justify-content:center;
  align-items:center; 
  justify-content:space-between;
  border: 1px solid #9D4FDB; 
  position: fixed;
  z-index: 1;
  bottom: 2%;
  right: 6.4%;
  background: white;
  height: 15em;
  width: 17.3em;
  h3 {
    margin: 0px 0px ;
  }
  ${ media.laptop }{ 

  }
  ${ media.mobileM }{ 

  }

`
export const StatusBlock = styled.div`
    display: flex ;
`
export const CastleButtonImg = styled.img `
  height: 13em ;
  position: fixed;
  z-index: 2;
  bottom: 0%;
  right: 5%;
`

export const PlayerDiv = styled.div`
margin: 0.5em;
  img {
    height: 3em
  }
  h6 {
    margin: 1%
  }

`
export const AttDiv = styled.div`
  margin: 2px;
  height: 5em ;
  width: 5em ;
  background-image: url(${dado});
  background-position: center;
  background-size: 79px;
  background-repeat: no-repeat;
  display: flex ;
  flex-direction: column;
  justify-content:center;
  align-items:center; 

  h5 {
    margin: 0px ;
  }
  h4 {
    margin: 0px ;
  }

`
