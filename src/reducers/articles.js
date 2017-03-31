import {
  LOAD_PARAGRAPHS,
  LOAD_TITLE,
  HIDE_IMPORT_MODAL,
  SHOW_IMPORT_MODAL,
} from '../actions/articles'

const initialState = {
  paragraphs: [],
  title: [],
  showImportModal: false
}

export default function articles(state = initialState, action) {
  switch (action.type) {
    case LOAD_PARAGRAPHS:
      return {...state, paragraphs: action.paragraphs}

    case LOAD_TITLE:
      return {...state, title: action.title}

    case HIDE_IMPORT_MODAL:
      return {...state, showImportModal: false}

    case SHOW_IMPORT_MODAL:
      return {...state, showImportModal: true}

    default:
      return state
  }
}
