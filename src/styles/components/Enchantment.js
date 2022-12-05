import styled from "styled-components";
import { media } from "../media";

export const EnchantmentsDiv = styled.div`
  /* display: flex; */
  display: flex ;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  height: 80vh;
  overflow-y: scroll;
`

export const EnchantmentCardDiv = styled.div`
  border: 1px green double;
  width: 250px;
  padding: 3px;
  margin: 3px;
  p {
    height: 250px ;
  }
  h3{
    margin: 0px 0px ;
  }
    
  ${ media.laptop }{ 

  }
  ${ media.mobileM }{ 

  }
`
export const CardButtonsDiv = styled.div`
  display: flex;
  height: 50px;
  button {
    margin: 0.1em;
    width: 3em;
    height: 2em;
    background: rgba(51, 51, 51, 1) 0% 0% no-repeat padding-box;
    opacity: 1;
    font: normal normal normal 22px/26px MADE Okine Sans PERSONAL USE;
    color: rgba(255, 255, 255, 1);
  }
  h3 {
    align:center
  }
`