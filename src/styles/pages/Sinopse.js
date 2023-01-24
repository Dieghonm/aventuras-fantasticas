import styled from "styled-components";
import { media } from "../media";

export const SinopseDiv = styled.div`
  display: flex ;
  align-items:center; 
  margin: 4em;
  word-break: break-word;
  background: white;
  overflow-y: scroll;
  width: 60em ;
  height: 43em ;
  border: 10px green double;
  padding: 4em 2em 1em ;
  img {
    width: 10em;
    height: 15em;
  }
  p {
    padding: 1.5em;
  }
  button {
    min-width: 127px;
    cursor: pointer;
    margin: 5px 0px;
  }

  ${ media.laptop }{
    height: 22em ;
    img {
      width: 8em;
      height: 12em;
    }
    p {
      font-size: 1em;
    }
  }
  ${ media.mobileG }{ 
    /* width: 80% ;
    padding: 3em 2em; */
  }

`