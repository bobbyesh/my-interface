import {
  LOAD_PARAGRAPHS,
  LOAD_TITLE,
  HIDE_IMPORT_MODAL,
  SHOW_IMPORT_MODAL,
  DISPLAY_ARTICLE,
  DISPLAY_ACCOUNT,
} from '../actions/articles'

const initialState = {
  paragraphs: [],
  title: [],
  showImportModal: false,
  displayed: null,
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

    case DISPLAY_ARTICLE:
      return {...state, displayed: 'article'}

    case DISPLAY_ACCOUNT:
      return {...state, displayed: 'account'}

    default:
      return state
  }
}
