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
  right: 67px;
  background: white;
  height: 12em;
  width: 17em;
  padding: 5px;
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
  h4 {
    margin: 0px 0px ;
  }
  h5 {
    margin: 0px 0px ;
  }
  img {
    height: 3em
  }
`
export const CastleButtonImg = styled.img `
  height: 13em ;
  position: fixed;
  z-index: 2;
  bottom: 0%;
  right: 42px;
`

export const PlayerDiv = styled.div`
  margin: 0.5em;

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
