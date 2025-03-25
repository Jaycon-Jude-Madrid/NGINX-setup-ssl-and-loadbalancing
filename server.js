const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const replicaApp = process.env.APP_NAME

// Serve static files from the current directory
app.use(express.static(__dirname));


// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));

  console.log(`Replica App: ${replicaApp}`);
});

// API routes should be placed before the 404 handler
app.get('/api/data', (req, res) => {
  console.log('API endpoint accessed');
  res.json({ message: 'This is data from the API' });
});

// Debug logging for al
// 404 handler for any other routes (should be last)
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`${replicaApp} running on http://localhost:${PORT}`);
});