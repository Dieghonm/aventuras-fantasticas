import styled from "styled-components";
import { media } from "../media";

export const SaveDiv = styled.div`
  display: flex ;
  padding: 7em;
  ${ media.laptop }{ 
    padding: 3em;
  }
  ${ media.mobileM }{ 
    /* width: 80% ;
    padding: 3em 2em; */
  }
`

export const BookDiv = styled.div`
  display: flex ;
  flex-direction: column;
  padding: 15px ;
  margin: 2em;
  background: white;
  border: 10px green ridge;
  word-break: break-word;
  width: 11em ;
  height: 28em;
  p {
    margin: 2px;
  }
  img {
    width: 10em;
    height: 15em;
    border-radius: 50%;
    border: 10px green double;
    background: silver ;
  }
  h4 {
    height: 2.2em;
    margin: 5px;
  }
  button {
    min-width: 150px;
    cursor: pointer;
  }
  ${ media.laptop }{
    width: 9.5em ;
    height: 24em;
    img {
      width: 8em;
      height: 12em;
  }
  }
  ${ media.mobileM }{ 
    /* width: 80% ;
    padding: 3em 2em; */
  }

`