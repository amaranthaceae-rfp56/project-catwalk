const path = require("path")
const express = require("express"); // npm installed

const { getPosts } = require('./helper.js');

const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, "/client/dist")));
// other configuration...

app.get('/api/products', async (req, res) => {
  var data = await getPosts();
  console.log(data);
});

app.listen(3000, () => {
  console.log(`app listening on port 3000`)
});