const axios = require('axios');
const { accessToken, apiUrl } = require('./config.js');

const headers = {
  'Authorization': `${accessToken}`
};

const getProducts = async () => {
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

const getProduct = async (id) => {
  return axios.get(`${apiUrl}/products/${id}`, {
    headers
  })
  .then((result) => {
    return result.data
  })
  .catch((err) => {
    console.log(err)
  })
}

const getProductStyles = async (id) => {
  return axios.get(`${apiUrl}/products/${id}/styles`, {
    headers
  })
  .then((result) => {
    return result.data
  })
  .catch((err) => {
    console.log(err)
  })
}


const getRelatedProducts = async (id) => {
  return axios.get(`${apiUrl}/products/${id}/related`, {
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
  getProducts: getProducts,
  getProduct: getProduct,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts
}