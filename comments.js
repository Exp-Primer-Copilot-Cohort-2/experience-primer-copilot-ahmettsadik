// Create web server with Express
const express = require('express');
const app = express();

// Set up the middleware
app.use(express.json());

// Create a comments array
const comments = [];

// Create an endpoint to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create an endpoint to post a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Listen to the port 4001
app.listen(4001, () => {
  console.log('Server is running on http://localhost:4001');
});
    