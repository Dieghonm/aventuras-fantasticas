import styled from "styled-components";
import { media } from "../media";

export const HeaderDiv = styled.div`
  display: flex ;
  flex-direction: row;
  border: 1px solid black;
  img {
    height: 3em
  }
  h6 {
    margin: 1%
  }
  ${ media.laptop }{ 

  }
  ${ media.mobileM }{ 

  }
  button {

  }
`