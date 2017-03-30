import { SELECT_WORD } from '../actions/words';

const initialState = {
  word: null,
  x: 0,
  y: 0,
}

export default function words(state = initialState, action) {
  switch (action.type) {
    case SELECT_WORD:
      return {...state, word: action.word, x: action.x, y: action.y}

    default:
      return state
  }
}
