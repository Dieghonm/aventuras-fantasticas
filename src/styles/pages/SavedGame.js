import styled from "styled-components";
import { media } from "../media";

export const SaveDiv = styled.div`
  display: flex ;
  padding: 8em; 
`

export const BookDiv = styled.div`
  display: flex ;
  flex-direction: column;
  padding: 15px ;
  margin: 2em;
  background: white;
  border: 10px green double;
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


  ${ media.laptop }{ 
    /* width: 15em ;
    height: 47em; */
  }
  ${ media.mobileM }{ 
    /* width: 80% ;
    padding: 3em 2em; */
  }

`