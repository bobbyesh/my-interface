import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
import { storeEmail, storeUsername } from './actions/user'
import { TOKEN_KEY } from './reducers/user'

import client from './Client'

var store = createStore(reducer)
var token = window.localStorage.getItem(TOKEN_KEY)
if (token !== null) {
  client.defaults.headers.common['Authorization'] = 'Token ' + token
  client.get('/api/auth/me/')
       .then(response => {
         var username = response.data.username
         var email = response.data.email
         store.dispatch(storeUsername(username))
         store.dispatch(storeEmail(email))
       })
       .catch(response =>  console.log(response))
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
