import axios from 'axios';

const ROOT_URL = 'https://bottega-property-management.herokuapp.com';

export function signinUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password})
      .then(response => {

      })
      .catch(error => {
        
      })
  }
}