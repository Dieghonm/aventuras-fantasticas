import styled from "styled-components";
import { media } from "../media";

export const PlayDiv = styled.div`
  margin: 4em ;
  border: 10px green double;
  padding: 5px;

  ${ media.laptop }{ 


  }
  ${ media.mobileG }{ 

  }
`

export const PlayTextP = styled.p`

  ${ media.laptop }{ 
    font-size: 0.8em;
  }
  ${ media.mobileG }{ 

  }
`

export const PlayButtonDiv = styled.div`
  display: flex;
  /* position: fixed; */
  width: 800px;
  flex-direction: column;
  align-content: flex-end;

  button {
    min-width: 150px;
    padding: 5px;
    margin: 2px;
    cursor: pointer;
  }
  ${ media.laptop }{ 
    font-size: 0.8em;
    button {
      font-size: 1em;
    }

  }
  ${ media.mobileG }{ 

  }
`
