import styled from "styled-components";
import { media } from "../media";

export const MainDiv = styled.div`
    text-align: center;
` 

export const USDiv = styled.div`
  /* border: 5px green double; */
  margin:10vh 15vw;
  /* background-color: grey; */
  padding: 10px;
  display:flex;
  justify-content: space-around;
  width: 700px ;

  ${ media.laptop }{ 
    margin:5vh 4vw;
  }
  ${ media.mobileM }{ 
    /* width: 80% ;
    padding: 3em 2em; */
  }
` 

export const USSpan = styled.span`
  border: 5px black double;
  padding: 30px;
  margin: 10px;
  /* width: 300px; */
  background-color:  #F9F9F9;

  ${ media.laptop }{ 
    /* width: 15em ;
    height: 47em; */
  }
  ${ media.mobileM }{ 
    /* width: 80% ;
    padding: 3em 2em; */
  }
` 

export const USFoto = styled.img`
  width: 150px;
  margin: 5px;
  /* background-color: black; */

  ${ media.laptop }{ 
    /* width: 15em ;
    height: 47em; */
  }
  ${ media.mobileM }{ 
    /* width: 80% ;
    padding: 3em 2em; */
  }
` 

export const USTech = styled.img`
  width: 100px;
  /* background-color: black; */

  ${ media.laptop }{ 
    /* width: 15em ;
    height: 47em; */
  }
  ${ media.mobileM }{ 
    /* width: 80% ;
    padding: 3em 2em; */
  }
` 