import { SELECT_WORD } from '../actions/words';

const initialState = {
  selectedWord: null,
}

export function selectWord(state = initialState, action) {
  switch (action.type) {
    case SELECT_WORD:
      return [...state, {id: action.id} ]

    default:
      return state
  }
}
