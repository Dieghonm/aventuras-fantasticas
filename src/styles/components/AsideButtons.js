import styled from "styled-components";

const media ={
  mobileM: '@media(max-width:375px)',
  laptop: '@media(max-width:768px)',
}

export const AsideButtons = styled.button`
  margin: 0.5em;
  top: 380px;
  left: 56px;
  width: 179px;
  height: 39px;
  background: rgba(51, 51, 51, 1) 0% 0% no-repeat padding-box;
  opacity: 1;
  font: normal normal normal 16px/22px MADE Okine Sans PERSONAL USE;
  color: rgba(255, 255, 255, 1);

  ${ media.laptop }{ 

  }
  ${ media.mobileM }{ 

  }
`
