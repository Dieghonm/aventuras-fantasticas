export const [LOGIN, BOOK] = ['LOGIN', 'BOOK'];

export function actionLogin(dataAction) {
  return {
    type: LOGIN,
    payload: dataAction,
  };
}

export function bookChoice(dataAction) {
  return {
    type: BOOK,
    payload: dataAction,
  };
}

