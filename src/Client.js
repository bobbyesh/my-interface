var axios = require('axios')
var Cookies = require('js-cookie')

var csrftoken = Cookies.get('csrftoken')
var instance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
})

instance.defaults.xsrfHeaderName = "X-CSRFToken";
instance.defaults.headers.common["X-CSRFToken"] = csrftoken;

export default instance
