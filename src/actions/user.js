export const STORE_USERNAME = 'STORE_USERNAME'
export const STORE_EMAIL = 'STORE_EMAIL'
export const STORE_TOKEN = 'STORE_TOKEN'

export function storeUsername(username) {
  return {type: STORE_USERNAME, username: username}
}

export function storeEmail(email) {
  return {type: STORE_EMAIL, email: email}
}

export function storeToken(token) {
  return {type: STORE_TOKEN, token: token}
}
