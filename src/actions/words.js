export const SELECT_WORD = 'SELECT_WORD'

export function selectWord(word, x, y) {
  return {type: SELECT_WORD, word: word, x: x, y: y};
}
