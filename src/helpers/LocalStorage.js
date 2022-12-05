export const SetLocalStorage = (data) => {
  const toString = JSON.stringify(data)
  localStorage.setItem('aventurasFantasticas', toString)
}

export const GetLocalStorage = () => {
  const local = localStorage.getItem('aventurasFantasticas')
  return JSON.parse(local)
}

export const FirtLogin = (data) => {
  let local = GetLocalStorage()
  !local ? local = data : local[Object.keys(data)] = data[Object.keys(data)]
  SetLocalStorage(local)
}

// FirtLogin({Fernanda: {Email: "fecine@gmail.com"}})
// FirtLogin({Diegho: {Email: "dieghonm@gmail.com"}})
// FirtLogin({Felipe: {Email: "felipe@gmail.com"}})

export const SetNewBook = (book, user) => {
  let local = GetLocalStorage()
  local[user][book] = {goTo : 0}
  SetLocalStorage(local)
}

export const AtributeChange = (user, book, game) => {
  let local = GetLocalStorage()
  local[user][book] = {...local[user][book],...game}
  SetLocalStorage(local)
}

export const StorageCharmList = (charmList, user, book) => {
  let local = GetLocalStorage()
  local[user][book] = {...local[user][book], charmList}
  SetLocalStorage(local)
}

export const ItensList = () => {
  // let local = GetLocalStorage()
  // console.log(local[user][book], charmList, book);
  // local[user][book] = {...local[user][book], charmList}
  // SetLocalStorage(local)
}
