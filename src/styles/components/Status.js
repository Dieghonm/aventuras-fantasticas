import styled from "styled-components";
import { media } from "../media";

export const StatusDiv = styled.div`
  display: flex ;
  flex-direction: row;
  justify-content:space-between;
  border: 1px solid black;

  img {

  }

  h3 {
    margin: 0px 0px ;
  }

  ${ media.laptop }{ 

  }
  ${ media.mobileM }{ 

  }
  button {

  }
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
