import React from "react"
import { connect } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { actionCharms, actionGoTo, actionAttributes, actionEquipADD } from "../redux/actions";
import { GetLocalStorage, SetLocalStorage } from '../helpers/LocalStorage'
import PropTypes from 'prop-types';

import CombatRPG from "../combateRPJ/CombatRPG";
import Status from "../components/Status"
import Livros from '../books/Livros'

import * as S from '../styles/pages/Play'

function Play(props) {
  const { charmsToRedux, globalState, goToToRedux, attibutesRedux, equipAddRedux } = props
  const { goTo } = useParams ();
  const {
    book:{book},
    charms,
    game:{Sorte, Energia },
    user:{user},
    equip,
  } = globalState
  let storage = GetLocalStorage()

  const reduxToStorage = (goTo, ex) => {
    const data = storage[user][book]
    data.goTo = goTo
    if (ex) {
      if (ex.includes('charm')){
        storage[user][book].charmList[ex[1]] = data.charmList[ex[1]] - 1
      }
      if (ex.includes('sorteMod')){
        const mod = ex[ex.indexOf('sorteMod')+1]
        storage[user][book].Sorte = data.Sorte + mod
      }
      if (ex.includes('energia')){
        const mod = ex[ex.indexOf('energia')+1]
        storage[user][book].Energia = data.Energia + mod
      }
      if (ex.includes('itemAdd')){
        const newItem = ex[ex.indexOf('itemAdd')+1]
        const equip = [...data.Equip, ...newItem]
        storage[user][book].Equip = equip
      }
      if (ex.includes('itemRemov')){
        const equip = data.Equip.filter((item) => item !== ex[ex.indexOf('itemRemov')+1])
        storage[user][book].Equip = equip
      }
    }
    SetLocalStorage(storage)
  }

  const options = ({goTo, text, ex  }) => {
    let disabledButton = false
    if (ex) {
      if (ex.includes('charm')){
        disabledButton = !(charms[ex[1]] > 0); 
      }
      if (ex.includes('item')){
        disabledButton = !equip.includes(ex[1])
      }
      if (ex.includes('combate')){
        // disabledButton = !(enemiesCont === ex[ex.indexOf('combate')+1].length);
      }
    }

    const Selected = (goTo) => {
      goToToRedux(goTo)
      if (ex) {
        if (ex.includes('charm')){
          charmsToRedux(ex[1]);
        }
        if (ex.includes('sorteMod')){
          const mod = ex[ex.indexOf('sorteMod')+1]
          attibutesRedux(['Sorte', Sorte + mod])
        }
        if (ex.includes('energia')){
          const mod = ex[ex.indexOf('energia')+1]
          attibutesRedux(['Energia', Energia + mod])
        }
        if (ex.includes('itemAdd')){
          equipAddRedux([ex[ex.indexOf('itemAdd')+1]])
        }
        if (ex.includes('itemRemov')){
          equipAddRedux([ex[ex.indexOf('itemRemov')+1],'remove'])
        }
      }
      reduxToStorage(goTo, ex)
    }
    if (ex && ex.includes('combate')){
      return <CombatRPG key={text} goTo={goTo} text={text} enemy={ex[ex.indexOf('combate') + 1]}  />
    }

    return(
      <Link key={text} to={`/aventuras-fantasticas/Play/${goTo}`}>
        <S.OptionsButton onClick={()=>Selected(goTo)} disabled={disabledButton}>{text}</S.OptionsButton>
      </Link>
    )
  }

  return(
    <S.PlayDiv>
      <Status />
      <S.PlayTextP>{Livros[book].Pagina[goTo].text}</S.PlayTextP>
      <S.PlayButtonDiv>
        {Livros[book].Pagina[goTo].options.map((option) => options(option))}
      </S.PlayButtonDiv>
    </S.PlayDiv>
  )
}

const mapStateToProps = (state) => ({
  globalState: state,
});

const mapDispatchToProps = (dispatch) => ({
  charmsToRedux: (data) => dispatch(actionCharms(data)),
  goToToRedux: (data) => dispatch(actionGoTo(data)),
  attibutesRedux: (data) => dispatch(actionAttributes(data)),
  equipAddRedux: (data) => dispatch(actionEquipADD (data)),
});

Play.propTypes = {
  globalState: PropTypes.object,
  charmsToRedux: PropTypes.func,
  goToToRedux: PropTypes.func,
  attibutesRedux: PropTypes.func,
  equipAddRedux: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Play);
