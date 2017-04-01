export const LOAD_PARAGRAPHS = 'LOAD_PARAGRAPHS'
export const LOAD_TITLE = 'LOAD_TITLE'
export const HIDE_IMPORT_MODAL = 'HIDE_IMPORT_MODAL'
export const SHOW_IMPORT_MODAL = 'SHOW_IMPORT_MODAL'
export const DISPLAY_ARTICLE = 'DISPLAY_ARTICLE'
export const DISPLAY_ACCOUNT = 'DISPLAY_ACCOUNT'

export function loadParagraphs(paragraphs) {
  return {type: LOAD_PARAGRAPHS, paragraphs: paragraphs};
}

export function loadTitle(title) {
  return {type: LOAD_TITLE, title: title};
}

export function hideImportModal() {
  return {type: HIDE_IMPORT_MODAL}
}

export function showImportModal() {
  return {type: SHOW_IMPORT_MODAL}
}

export function displayArticle() {
  return {type: DISPLAY_ARTICLE}
}

export function displayAccount() {
  return {type: DISPLAY_ACCOUNT}
}
