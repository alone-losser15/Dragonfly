const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoint
app.get('/api', (req, res) => {
  res.send({ message: 'Hello from the server!' });
});

// Catch all other routes and return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
