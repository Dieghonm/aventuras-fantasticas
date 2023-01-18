import styled from "styled-components";
import { media } from "../media";

export const CriarPerfilDiv = styled.div`
  display: flex ;
  flex-direction: column;
  align-items: center;
  background: lightgrey;
  /* border: 1px solid black; */
  padding: 0.5em ;
  /* margin: 0.5em; */
  input {
    margin: 0.4em;
    height: 2em;
    width: 17em ;
  }
  button {
    margin: 0.4em;
    height: 2em;
    width: 17em ;
    background: 15% ;
    border-radius: 15px;
  }
  ${ media.laptop }{ 
    padding: 0.5em ;
    input {
      margin: 0.4em;
      height: 2em;
      width: 15em ;
    }
    button {
      margin: 0.4em;
      height: 2em;
      width: 15em ;
      background: 15% ;
      border-radius: 15px;
    }
    h3 {
      margin: 10px 2px;
    }
    a {
      font-size: 0.6em;
    }
  }
  ${ media.mobileG }{ 
    
  }
`

export const EscolherPerfilDiv = styled.div`
  display: flex ;
  flex-direction: column;
  align-items: center;
  ${ media.laptop }{ 

  }
  ${ media.mobileM }{ 
    /* border: 1px solid black; */
    h4 {
      margin: 0.5em;
    }
  }
`

export const ProfileIconDiv = styled.div`
  display: flex ;
  flex-wrap: wrap;
  width: 12em;
  height: 12em;
  div {
    display: flex ;
    flex-direction: column;
    width: 6em;
    height: 6em;
    align-items: center;
  }
  img {
    height: 3em;
    margin: 5% ;
  }
  p {
    margin: 0em
  }
  ${ media.laptop }{
    width: 12em;
    height: 5em;
    div {
      height: 4em;
    }
    img {
      height: 2.3em;
      margin: 2% ;
    }
    p {
      font-size: 0.8em;
    }
  }
  ${ media.mobileM }{ 

  }
`


// flex-direction: row;

