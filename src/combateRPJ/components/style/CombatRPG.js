import styled from "styled-components";
import { media } from "../../../styles/media";

export const CombatButton = styled.button`
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

export const CombatBlockDiv = styled.div`
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`