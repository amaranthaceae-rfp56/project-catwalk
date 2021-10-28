const axios = require('axios');
const { accessToken, apiUrl } = require('./config.js');

const headers = {
  'Authorization': `${accessToken}`
};

const getPosts = async () => {

  return axios.get(`${apiUrl}/products`, {
    headers
  })
  .then((result) => {
    return result.data
  })
  .catch((err) => {
    console.log(err)
  })
}

module.exports = {
  getPosts: getPosts
}