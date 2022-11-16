import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import Aside from './pages/Aside';
import Footer from './pages/Footer';

import * as S from './styles/App'
import Project from './pages/Project';
import SobreNos from './pages/SobreNos';
import NovoJogo from './pages/NovoJogo';
import JogosSalvos from './pages/JogosSalvos';

function App() {
  return (
    <S.AppDiv>
      <S.Icon><GiHamburgerMenu /></S.Icon>
      <Aside />
      <BrowserRouter>
        <Routes>
          <Route path="/aventuras-fantasticas" element={<Project />} />
        </Routes>
      </BrowserRouter>
      <SobreNos />
      <NovoJogo />
      <JogosSalvos />
      <Footer />
    </S.AppDiv>
  );
}

export default App;
