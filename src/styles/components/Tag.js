import styled from "styled-components";
import { media } from "../media";

export const TagDiv = styled.div`
  color: #9D4FDB;
  display: flex ;
  justify-content: flex-end;
  position: fixed;
  z-index: 2;
  background: white;
  width: 170px ;
  margin: 50px 0px 0px 410px;
  
  
  img {
    height: 1.5em;
    margin: 0px 5px 0px 5px;
  }
  p {
    margin: 1px ;

  }

  ${ media.laptop }{ 

  }
  ${ media.mobileM }{ 

  }

`