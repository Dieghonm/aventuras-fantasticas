import styled from "styled-components";
import { media } from "../media";

export const EnchantmentsDiv = styled.div`
  margin: 4em 0em 0em 2em;
  h4{
    margin: 1px;
  }
`
export const EnchantmentsMainnDiv = styled.div`
  display: flex;
`

export const EnchantmentsCardsDiv = styled.div`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 480px;
  width: 300px;

  ${ media.laptop }{ 
    height: 430px;
  }
  ${ media.mobileM }{ 

  }
`

export const EnchantmentCardDiv = styled.div`
  display: flex;
  width: 290px;
  padding: 4px;
  margin-bottom: 5.5px;
  cursor: pointer;
  p {
    height: 250px ;
  }
  h3{
    margin: 0px 3px;
  }
    
  ${ media.laptop }{ 
    font-size: 0.8em;
  }
  ${ media.mobileM }{ 

  }
`

export const EnchantmentsTextP = styled.p`
  border: 5px green double;
  width: 270px;
  padding: 10px;
  margin: 20px;
  background: white;
`


export const CardButtonsDiv = styled.div`
  /* display: flex;
  height: 50px;
  button {
    margin: 0.1em;
    width: 2em;
    height: 1.5em;
    background: rgba(51, 51, 51, 1) 0% 0% no-repeat padding-box;
    opacity: 1;
    font: normal normal normal 22px/26px MADE Okine Sans PERSONAL USE;
    color: rgba(255, 255, 255, 1);
  }
  h3 {
    align:center
  } */
`
export const NextButton = styled.button`
  vertical-align: middle;
  min-width: 150px;
  padding: 5px;
  margin: 10px;
  cursor: pointer;
`

