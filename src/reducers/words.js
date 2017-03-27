import { SELECT_WORD } from '../actions/words';

const initialState = {
  id: -1,
  x: 0,
  y: 0,
}

export function selectWord(state = initialState, action) {
  switch (action.type) {
    case SELECT_WORD:
      return {...state, id: action.id, x: action.x, y: action.y}

    default:
      return state
  }
}
