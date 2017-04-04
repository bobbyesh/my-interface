export const URL = 'http://127.0.0.1:8000/api/'

var axios = require('axios')
var Cookies = require('js-cookie')

var csrftoken = Cookies.get('csrftoken')
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

export default axios
