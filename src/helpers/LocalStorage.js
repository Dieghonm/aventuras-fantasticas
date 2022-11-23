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
