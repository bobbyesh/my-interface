import {
  STORE_USERNAME,
  STORE_EMAIL,
  STORE_TOKEN,
} from '../actions/user'

export const TOKEN_KEY = 'TOKEN_KEY'

const initialState = {
  username: null,
  token: window.localStorage.getItem(TOKEN_KEY),
  email: null,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case STORE_USERNAME:
      return {...state, username: action.username}

    case STORE_TOKEN:
      window.localStorage.setItem(TOKEN_KEY, action.token)
      return {...state, token: action.token}

    case STORE_EMAIL:
      return {...state, email: action.email}

    default:
      return state
    }
  }
