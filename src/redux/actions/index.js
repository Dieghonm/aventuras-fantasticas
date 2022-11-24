export const [LOGIN, BOOK, ATTRIBUTES] = ['LOGIN', 'BOOK', 'ATTRIBUTES'];

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

