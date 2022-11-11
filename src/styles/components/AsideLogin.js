import styled from "styled-components";

const media ={
  mobileM: '@media(max-width:375px)',
  laptop: '@media(max-width:768px)',
}

export const LoginDiv = styled.div`
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

export const CriarPerfilDiv = styled.div`
  display: flex ;
  flex-direction: column;
  align-items: center;
  ${ media.laptop }{ 

  }
  ${ media.mobileM }{ 
    /* border: 1px solid black; */
    padding: 0.5em ;
    background: lightgrey;
    margin: 0.5em;
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
  }
`

export const EscolherPerfilDiv = styled.div`
  display: flex ;
  flex-direction: column;
  align-items: center;
  width: 17em;
  height: 10em ;
  ${ media.laptop }{ 

  }
  ${ media.mobileM }{ 
    /* border: 1px solid black; */
    h4 {
      margin: 0.5em;
    }
  }
`