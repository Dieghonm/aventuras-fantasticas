import styled from "styled-components";
import { media } from "../media";

export const StatusDiv = styled.div`
  display: flex ;
  flex-direction: row;
  justify-content:space-between;
  border: 1px solid black;

  ${ media.laptop }{ 

  }
  ${ media.mobileM }{ 

  }
  button {

  }
`
export const PlayerDiv = styled.div`
margin: 1em;
  img {
    height: 3em
  }
  h6 {
    margin: 1%
  }

`
