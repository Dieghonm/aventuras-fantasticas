import styled from "styled-components";
import { media } from "../media";


export const AsideDiv = styled.div`
  display: flex ;
  flex-direction: column;
  align-items: center;
  width: 15em ;
  height: 57em;
  ${ media.laptop }{ 
    width: 15em ;
    height: 47em;
  }
  ${ media.mobileM }{ 
    width: 80% ;
    padding: 3em 2em;
  }
`

export const Logo = styled.img`
  width: 70%;
  /* text-align: center; */
  ${ media.laptop }{ 
  }
  ${ media.mobileM }{ 
    width: 90%;
    margin-bottom: 1em;
  }
`;