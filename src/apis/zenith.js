import axios from 'axios';

export default axios.create({
  baseURL:'https://zenith-dev-api.herokuapp.com',
  headers:{
    'Access-Control-Allow-Origin': '*',
  }
});
