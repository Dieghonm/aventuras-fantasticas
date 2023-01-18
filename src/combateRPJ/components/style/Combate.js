import styled from "styled-components";

export const CombatDiv = styled.div`
  position: fixed;
  z-index: 4;
  top: 10%;
  overflow: auto;
  background: lightgray;
  padding: 3px;
  width: 600px;
  height: 450px;
  border: 10px green double;
  text-align: center;

  button {
    padding: 5px;
    margin: 2px;
    cursor: pointer;
  }

`

export const BlockDiv = styled.div`
  padding: 10px 20px 0px;
  
  span{
    display: flex;
    padding: 15px 30px 0px;
  }
  h1 {
    padding: 25px 10px;
    margin: 1px;
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1px;
    min-width: 50px;
  }

  h3 {
    margin: 1px;
    padding: 10px;
  }

`

