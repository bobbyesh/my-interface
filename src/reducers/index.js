import { combineReducers } from 'redux'
import articles from './articles'
import words from './words'
import user from './user'

export default combineReducers({
  articles,
  words,
  user,
})
