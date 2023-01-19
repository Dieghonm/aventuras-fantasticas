import styled from "styled-components";
import { media } from "../media";

export const CharmsDiv = styled.div`
  /* position: absolute; */
  position: fixed;
  bottom: 8%;
  right: 20%;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 2px 16px;
  min-width: 160px;
  z-index: 1;
  border: 1px solid #9D4FDB; 
  p {
    margin: 1px;
    font-size: 0.9em;
  }
  img {
    height: 25px;
  }
  ${ media.laptop }{ 

  }
  ${ media.mobileM }{ 

  }

`
export const DiceDiv = styled.div`
  display: flex;
`

export const CharmButton = styled.button`
  margin: 5px;
  padding: 2px;
  min-width: 110px;
`


