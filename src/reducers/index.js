import { combineReducers } from 'redux'
import articles from './articles'
import words from './words'

export default combineReducers({
  articles,
  words,
})
