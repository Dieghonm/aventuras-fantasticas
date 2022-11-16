export const SetLocalStorage = (data) => {
  const toString = JSON.stringify(data)
  localStorage.setItem('aventurasFantasticas', toString)
}

export const GetLocalStorage = () => {
  const local = localStorage.getItem('aventurasFantasticas')
  return JSON.parse(local)
}

