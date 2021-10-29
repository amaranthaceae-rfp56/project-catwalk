const path = require("path")
const express = require("express"); // npm installed
const cors = require('cors');

const { getProducts, getProduct, getProductStyles } = require('./helper.js');

const app = express();

app.use(cors());
app.use(express.json());
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

app.listen(3000, () => {
  console.log(`app listening on port 3000`)
});