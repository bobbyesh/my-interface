
export const SELECT_WORD = 'SELECT_WORD'

export function selectWord(id, ev) {
  return {type: SELECT_WORD, id: id, x: ev.clientX, y: ev.clientY};
}
