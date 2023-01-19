import styled from "styled-components";
import { media } from "../media";

export const PlayDiv = styled.div`
  margin: 4em ;
  border: 5px green ridge;
  padding: 5px;

  ${ media.laptop }{ 
  }
  ${ media.mobileG }{ 
  }
`

export const PlayTextP = styled.p`
  margin: 0;
  border: 5px green ridge;
  height: 310px;
  padding: 0px 10px ;
  background: white;
  overflow-y: scroll;
  ${ media.laptop }{ 
    font-size: 1em;
  }
  ${ media.mobileG }{ 

  }
`

export const PlayButtonDiv = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  align-content: flex-end;
  ${ media.laptop }{ 
    font-size: 1em;
    button {
      font-size: 1em;
    }
  }
  ${ media.mobileG }{ 

  }
`

export const OptionsButton = styled.button`
  min-width: 150px;
  padding: 5px;
  margin: 2px;
  cursor: pointer;
  ${ media.laptop }{ 
    font-size: 0.8em;
  }
  ${ media.mobileG }{ 

  }
`
