export const [LOGIN, BOOK, ATTRIBUTES, GOTO] = ['LOGIN', 'BOOK', 'ATTRIBUTES', 'GOTO'];

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

export function actionGoTo(dataAction) {
  return {
    type: GOTO,
    payload: dataAction,
  };
}

export function actionAttributes(dataAction) {
  return {
    type: ATTRIBUTES,
    payload: dataAction,
  };
}

