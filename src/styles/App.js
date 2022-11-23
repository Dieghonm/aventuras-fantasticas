import styled from "styled-components";
import { media } from "./media";

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
  display : flex;
  ${ media.mobileG }{ 
    display: block ;
  }
`;
