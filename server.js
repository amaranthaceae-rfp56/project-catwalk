const path = require("path")
const parser = require('body-parser');
const express = require("express"); // npm installed
const cors = require('cors');

const { getProducts, getProduct, getProductStyles, getRelatedProducts, getReviews, getReviewMetaData, postReview, markReview, reportReview, getQuestions, getAnswers, postQuestion } = require('./helper.js');

const app = express();

app.use(cors());
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json());
app.use(express.static(path.join(__dirname, "/client/dist")));
// other configuration...

// Get Products
app.get('/api/products', async (req, res) => {
  var data = await getProducts();
  res.send(data);
});

// Get Single Product
app.get('/api/products/:product_id', async (req, res) => {
  var data = await getProduct(req.params.product_id);
  res.send(data);
});

// Get Product Styles
app.get('/api/products/:product_id/styles', async (req, res) => {
  var data = await getProductStyles(req.params.product_id);
  res.send(data);
})

// Get Related Products
app.get('/api/products/:product_id/related', async (req, res) => {
  var data = await getRelatedProducts(req.params.product_id);
  res.send(data);
})

// Get Reviews
app.get('/api/reviews/:product_id', async (req, res) => {
  var data = await getReviews(req.params.product_id);
  res.send(data);
})

// Get Review metadata
app.get('/api/reviews/meta/:product_id', async (req, res) => {
  var data = await getReviewMetaData(req.params.product_id);
  res.send(data);
})

// Post Review
app.post('/api/reviews/:product_id', async (req, res) => {
  // console.log(req.body);
  var data = await postReview(req.params.product_id, req.body);
  res.send(data);
});

// Mark Review as Helpful
app.put('/api/reviews/helpful/:review_id', async (req, res) => {
  var data = await markReview(req.params.review_id);
  res.send(data);
});

// Report Review
app.put('/api/reviews/report/:review_id', async (req, res) => {
  var data = await reportReview(req.params.review_id);
  res.send(data);
})

// Get questions for product
app.get('/api/qa/questions/:product_id', async (req, res) => {
  var data = await getQuestions(req.params.product_id);
  res.send(data);
})

// Get answers for question
app.get('/api/qa/questions/answers/:question_id', async (req, res) => {
  var data = await getAnswers(req.params.question_id);
  res.send(data)
})

// Post question
app.post('/api/qa/questions/:product_id', async (req, res) => {
  var data = await postQuestion(req.params.product_id, req.body);
  res.send(data);
})

var yourOutfit = {};

// Post product to Outfit List
app.post('/outfit/:username', (req, res) => {
  if (yourOutfit[req.params.username] === undefined) {
    yourOutfit[req.params.username] = [];
  }
  console.log(req.params.username);
  for (var i = 0; i < yourOutfit[req.params.username].length; i++) {
    if (yourOutfit[req.params.username][i] === req.body.id) {
      return;
    }
  }
  yourOutfit[req.params.username].push(req.body.id)
  res.sendStatus(201);
});

// get Outfit List
app.get('/outfit/:username', (req, res) => {
  res.send(yourOutfit[req.params.username]);
});

app.listen(3000, () => {
  console.log(`app listening on port 3000`)
});