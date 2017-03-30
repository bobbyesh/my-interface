import { LOAD_PARAGRAPHS, LOAD_TITLE } from '../actions/articles'

const initialState = {
  paragraphs: [],
  title: [],
}

export default function articles(state = initialState, action) {
  switch (action.type) {
    case LOAD_PARAGRAPHS:
      return {...state, paragraphs: action.paragraphs}
      case LOAD_TITLE:
        return {...state, title: action.title}

    default:
      return state
  }
}
