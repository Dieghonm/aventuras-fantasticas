import styled from "styled-components";

const media ={
  mobileM: '@media(max-width:375px)',
  laptop: '@media(max-width:768px)',
}

export const Icon = styled.div`
  font-size : 2em;
  display : none;
  position: fixed;
  margin: 0.2em;
  z-index: top;
  ${ media.mobileM }{ 
    display : inline;
  }
`;

export const AppDiv = styled.div`
  display : flex;
  ${ media.mobileM }{ 
    display: block ;
  }
`;
