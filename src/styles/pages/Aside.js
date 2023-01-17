import styled from "styled-components";
import { media } from "../media";
import img from '../../imgs/BRIDGE.png'


export const AsideDiv = styled.div`
  display: flex ;
  flex-direction: column;
  align-items: center;
  width: 260px ;
  height: 100vh;
  background-color: white;
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${img});
  ${ media.laptop }{ 
    width: 15em ;
    height: 47em;
  }
  ${ media.mobileG }{ 
    width: 80% ;
    padding: 3em 2em;
  }
`

export const Logo = styled.img`
  width: 13em;
  padding: 0em 4em;

  ${ media.laptop }{ 
    width: 10em;
    padding: 0em 2em;
  }
  ${ media.mobileG }{ 
    width: 13em;
    padding: 0em 4em;
  }
`;