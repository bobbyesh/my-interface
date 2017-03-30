export const LOAD_PARAGRAPHS = 'LOAD_PARAGRAPHS'
export const LOAD_TITLE = 'LOAD_TITLE'

export function loadParagraphs(paragraphs) {
  return {type: LOAD_PARAGRAPHS, paragraphs: paragraphs};
}

export function loadTitle(title) {
  return {type: LOAD_TITLE, title: title};
}
