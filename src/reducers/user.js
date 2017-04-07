import {
  STORE_USERNAME,
  STORE_PASSWORD,
  STORE_TOKEN,
} from '../actions/user'

const initialState = {
  username: null,
  password: null,
  token: null,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case STORE_USERNAME:
      return {...state, username: action.username}

    case STORE_PASSWORD:
      return {...state, password: action.password}

    case STORE_TOKEN:
      return {...state, token: action.token}

    default:
      return state
    }
  }
