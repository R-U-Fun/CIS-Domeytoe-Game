const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/LoginBE', (req, res) => {
  const { username, password } = req.body;
  console.log("YOHOHO");
  
  // Here you would check the username and password against your database
  // If credentials are valid, send a positive response
  // Otherwise, send an error response
  
});

app.listen(3004, () => console.log('Server is running on port 5000'));