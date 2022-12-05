export const [LOGIN, BOOK, ATTRIBUTES, GOTO, CHARMS, KILLMAGIC] = ['LOGIN', 'BOOK', 'ATTRIBUTES', 'GOTO', 'CHARMS', 'KILLMAGIC'];

export function actionLogin(dataAction) {
  return {
    type: LOGIN,
    payload: dataAction,
  };
}

export function actionbookChoice(dataAction) {
  return {
    type: BOOK,
    payload: dataAction,
  };
}

export function actionAttributes(dataAction) {
  return {
    type: ATTRIBUTES,
    payload: dataAction,
  };
}

export function actionGoTo(dataAction) {
  return {
    type: GOTO,
    payload: dataAction,
  };
}

export function actionCharms(dataAction) {
  return {
    type: CHARMS,
    payload: dataAction,
  };
}

export function actionKillMagic(dataAction) {
  return {
    type: KILLMAGIC,
    payload: dataAction,
  };
}
