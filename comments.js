// Create a web server that listens on port 3000. When you navigate to localhost:3000/comments, it should return a JSON response with the following comments:
// 1. "This is the first comment"
// 2. "This is the second comment"
// 3. "This is the third comment"
// 4. "This is the fourth comment"
// 5. "This is the fifth comment"
// 6. "This is the sixth comment"
// 7. "This is the seventh comment"
// 8. "This is the eighth comment"
// 9. "This is the ninth comment"
// 10. "This is the tenth comment"

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    const comments = [
        "This is the first comment",
        "This is the second comment",
        "This is the third comment",
        "This is the fourth comment",
        "This is the fifth comment",
        "This is the sixth comment",
        "This is the seventh comment",
        "This is the eighth comment",
        "This is the ninth comment",
        "This is the tenth comment"
    ];
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// To run the server:
// node comments.js
// Then open localhost:3000/comments in your browser to see the comments
// To stop the server, press Ctrl + C in the terminal
// To see the JSON response in the browser, you can use a JSON formatter extension
// For example, you can use JSON Formatter for Chrome
// This will format the JSON response in a more readable way
// You can also use Postman to make requests to the server and see the JSON response

