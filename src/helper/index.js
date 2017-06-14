import axios from "axios";
import Cookies from 'universal-cookie';

export function login () {
  return axios.get('/api/auth/github')
    .then(res => {
      console.log(res);
    })
}
//
export function getUser () {
  // authorization
  return new Promise((resolve, reject) => {
    const cookie = new Cookies();
    const token = cookie.get('jwt_token');
    if(!token) return reject();
    axios.get('/api/user/me')
      .then(res => resolve(res.data));
  });
}
