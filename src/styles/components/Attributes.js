import styled from "styled-components";
import { media } from "../media";

export const AttributesDiv = styled.div`
  margin: 5em;
  height: 500px;
  padding: 0.5em;

  ${ media.laptop }{ 
    margin: 4em;
    height: 450px;
    h3 {
      margin: 0px;
    }
    div {
      border: 5px green ridge;
      overflow-y: scroll;
      height: 350px;
      padding: 10px;
      margin-bottom: 8px;
    }

  }
  ${ media.mobileM }{ 

  }

`

export const AttributesButton = styled.button`
  /* min-width: 150px;
  padding: 5px;
  margin: 10px; */
`

