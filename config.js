const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  accessToken: process.env.ACCESS_TOKEN,
  apiUrl: process.env.API_URL
}