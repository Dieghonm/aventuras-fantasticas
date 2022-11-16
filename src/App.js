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
import ComoJogar from './pages/ComoJogar';

function App() {
  return (
    <S.AppDiv>
      <S.Icon><GiHamburgerMenu /></S.Icon>
      <BrowserRouter>
      <Aside />
        <Routes>
          <Route path="/aventuras-fantasticas/novo-jogo" element={<NovoJogo />} />
          <Route path="/aventuras-fantasticas/jogos-salvos" element={<JogosSalvos />} />
          <Route path="/aventuras-fantasticas/como-jogar" element={<ComoJogar />} />
          <Route path="/aventuras-fantasticas/sobre-nos" element={<SobreNos />} />
          <Route path="/aventuras-fantasticas" element={<Project />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </S.AppDiv>
  );
}

export default App;
