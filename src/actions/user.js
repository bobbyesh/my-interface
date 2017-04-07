export const STORE_USERNAME = 'STORE_USERNAME'
export const STORE_PASSWORD = 'STORE_PASSWORD'
export const STORE_TOKEN = 'STORE_TOKEN'

export function storeUsername(username) {
  return {type: STORE_USERNAME, username: username}
}

export function storePassword(password) {
  return {type: STORE_PASSWORD, password: password}
}

export function storeToken(token) {
  return {type: STORE_TOKEN, token: token}
}
