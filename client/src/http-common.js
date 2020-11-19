import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://wsp-desafio-final.herokuapp.com',
  // baseURL: 'http://localhost:3001/',
  headers: {
    'Content-type': 'application/json',
  },
});
