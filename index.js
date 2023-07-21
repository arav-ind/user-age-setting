const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

let age = 0; // Initial age value

// GET request to retrieve the current age value
app.get('/getUserAge', (req, res) => {
  res.json({ age: age });
});

// POST request to set the age value
app.get('/setUserAge', (req, res) => {
    const newAge = req.query.age;
  
    if (newAge !== undefined && !isNaN(newAge)) {
      age = parseInt(newAge);
      res.json({ message: `Age value set to ${age}` });
    } else {
      res.status(400).json({ error: 'Invalid age value.' });
    }
  });

// Start the server
const port = 3000; // Choose any port number you like
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
