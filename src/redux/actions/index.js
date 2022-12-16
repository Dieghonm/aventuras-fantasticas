export const [
  LOGIN,
  BOOK,
  ATTRIBUTES,
  GOTO,
  CHARMS,
  KILLMAGIC,
  EQUIP,
  GOLD,
] = [
  'LOGIN',
  'BOOK',
  'ATTRIBUTES',
  'GOTO',
  'charm',
  'KILLMAGIC',
  'EQUIP',
  'GOLD',
];

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

export function actionEquipADD(dataAction) {
  return {
    type: EQUIP,
    payload: dataAction,
  };
}

export function actionGold(dataAction) {
  return {
    type: GOLD,
    payload: dataAction,
  };
  
}
