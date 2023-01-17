import styled from "styled-components";
import { media } from "../media";

export const SinopseDiv = styled.div`
  display: flex ;
  flex-direction: column;
  justify-content:center;
  align-items:center; 
  margin: 5em;
  word-break: break-word;
  background: white;
  width: 60em ;
  height: 43em ;
  border: 10px green double;
  padding: 1em ;

  img {
    display:flex;
    width: 10em;
    height: 15em;
  }
  h4 {
    margin: 5px;
  }

  ${ media.laptop }{ 
    /* width: 15em ;
    height: 47em; */
  }
  ${ media.mobileG }{ 
    /* width: 80% ;
    padding: 3em 2em; */
  }

`