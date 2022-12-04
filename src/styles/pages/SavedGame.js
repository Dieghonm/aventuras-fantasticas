import styled from "styled-components";
import { media } from "../media";

export const BookDiv = styled.div`
  display: flex ;
  flex-direction: column;
  width: 13em;
  height: 20em;
  margin: 0.5em;

  word-break: break-word;

  ${ media.laptop }{ 
    /* width: 15em ;
    height: 47em; */
  }
  ${ media.mobileM }{ 
    /* width: 80% ;
    padding: 3em 2em; */
  }
  img {
    margin:1em;
    width: 10em;
    height: 15em;
    border-radius: 50%;
    border: 10px green double;
    background: silver ;
  }
  h4 {
    margin: 1em;
  }

`