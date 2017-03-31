export const LOAD_PARAGRAPHS = 'LOAD_PARAGRAPHS'
export const LOAD_TITLE = 'LOAD_TITLE'
export const HIDE_IMPORT_MODAL = 'HIDE_IMPORT_MODAL'
export const SHOW_IMPORT_MODAL = 'SHOW_IMPORT_MODAL'

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
