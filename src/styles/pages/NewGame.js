import styled from "styled-components";
import { media } from "../media";

export const NewGameDiv = styled.div`
  margin: 5em ;
  ${ media.laptop }{ 
    margin: 5em 3em ;
  }
  ${ media.mobileM }{ 

  }
` 

export const BooksCards = styled.div`
  display: flex ;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 1em;
` 

export const BookDiv = styled.div`
  display: flex ;
  flex-direction: column;
  justify-content:center;
  align-items:center; 
  background: white;
  border: 10px green double;
  width: 13em;
  height: 22em;
  margin: 0.5em;

  word-break: break-word;

  img {
    margin:1em;
    width: 10em;
    height: 15em;
  }
  h4 {
    margin: 5px;
    height: 2.5em;
    width: 11em;
  }

  ${ media.laptop }{ 
    width: 10.5em;
    height: 17em;
    margin: 0.3em;
    img {
    margin:0.5em;
    width: 8em;
    height: 12em;
  }
  h4 {
    font-size: 0.8em;
    margin: 5px;
    height: 2em;
    width: 11em;
  }
  }
  ${ media.mobileM }{ 
    /* width: 80% ;
    padding: 3em 2em; */
  }

`