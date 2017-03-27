import { createStore } from 'redux'
import { selectWord } from '../reducers/words'
import { SELECT_WORD } from './actions'

let store = createStore(selectWord);
