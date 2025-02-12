const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
