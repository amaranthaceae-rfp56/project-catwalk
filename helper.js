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

const getReviews = async (id) => {
  return axios.get(`${apiUrl}/reviews`, {
    headers,
    params: { page: 1, count: 100, sort: 'newest', product_id: id }
  })
  .then((result) => {
    return result.data
  })
  .catch((err) => {
    console.log(err);
  })
}

const getReviewMetaData = async (id) => {
  return axios.get(`${apiUrl}/reviews/meta`, {
    headers,
    params: { product_id: id }
  })
  .then((result) => {
    return result.data
  })
  .catch((err) => {
    console.log(err);
  })
}

const postReview = async (id, postData) => {
  const { rating, summary, body, recommended, username, email, photos, characteristics } = postData;

  ///neeed to iterate thru the
  let reformattedChars = {};

  for (let key in characteristics) {
    reformattedChars[characteristics[key].id] = characteristics[key].value;
  }

  const data = {
      product_id: Number(id),
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommended,
      name: username,
      email: email,
      photos: photos,
      characteristics: reformattedChars
  };

  console.log('DATA:', data);
  return axios.post(`${apiUrl}/reviews`, data,
    { headers }
  )
  .then((result) => {

    return result.data
  })
  .catch((err) => {
    console.log(err);
  })
}

const markReview = async (id) => {


  return axios.put(`${apiUrl}/reviews/${id}/helpful`, id, {headers})
    .then((result) => {
      console.log(result);
      return result.data
    })
    .catch((error) => {
      console.log(error)
    })
}

const reportReview = async (id) => {
  return axios.put(`${apiUrl}/reviews/${id}/report`, null, {headers})
    .then((result) => {
      console.log('reported');
      return result.data
    })
    .catch((error) => {
      console.log(error)
    })
}

const getQuestions = async (id) => {
  return axios.get(`${apiUrl}/qa/questions`, {
    headers,
    params: { page: 1, count: 5, sort: 'newest', product_id: id }
  })
  .then((result) => {
    return result.data
  })
  .catch((error) => {
    console.log(error);
  })
}

const getAnswers = async (id) => {
  return axios.get(`${apiUrl}/qa/questions/${id}/answers`, {
    headers,
    params: { question_id: id, page: 1, count: 5 }
  })
  .then((result) => {
    console.log(result);
    return result.data
  })
  .catch((error) => {
    console.log(error);
  })
}


const postQuestion = async (postData) => {
  const { name, email, body, product_id } = postData
  console.log(name, email, body, product_id);

  axios.post(`${apiUrl}/qa/questions`, {
    name: name,
    email: email,
    body: body,
    product_id: product_id
  }, { headers })
  .then((result) => {
    console.log('question successfully posted!');
    console.log(result.status, result.data);
    return result.data
  })
  .catch((error) => {
    console.log(error);
  })
}

const postAnswer = async (id, postData) => {
  console.log(postData);
  const { name, email, body, photos } = postData
  console.log(name, email, body, photos);

  axios.post(`${apiUrl}/qa/questions/${id}/answers`, {
    name: name,
    email: email,
    body: body,
    photos: photos,
  }, { headers })
  .then((result) => {
    console.log('answer successfully posted!');
    console.log(result.status, result.data);
    return result.data
  })
  .catch((error) => {
    console.log(error);
  })
}

const voteQuestionHelpful = async (id) => {

  return axios.put(`${apiUrl}/qa/questions/${id}/helpful`, id, {headers})
    .then((result) => {
      console.log('question helpfulness updated',result);
      return result.data
    })
    .catch((error) => {
      console.log(error)
    })
}

const voteAnswerHelpful = async (id) => {

  return axios.put(`${apiUrl}/qa/answers/${id}/helpful`, id, {headers})
    .then((result) => {
      console.log('answer helpfulness updated',result);
      return result.data
    })
    .catch((error) => {
      console.log(error)
    })
}

const reportAnswer = async (id) => {

  return axios.put(`${apiUrl}/qa/answers/${id}/report`, id, {headers})
    .then((result) => {
      console.log('reported',result);
      return result.data
    })
    .catch((error) => {
      console.log(error)
    })
}



module.exports = {
  getProducts: getProducts,
  getProduct: getProduct,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts,
  getReviews: getReviews,
  getReviewMetaData: getReviewMetaData,
  postReview: postReview,
  markReview: markReview,
  reportReview: reportReview,
  getQuestions: getQuestions,
  getAnswers: getAnswers,
  postQuestion: postQuestion,
  postAnswer: postAnswer,
  voteQuestionHelpful: voteQuestionHelpful,
  voteAnswerHelpful: voteAnswerHelpful,
  reportAnswer: reportAnswer,
}