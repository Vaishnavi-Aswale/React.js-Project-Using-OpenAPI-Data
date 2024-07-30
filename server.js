const express = require('express');
const path = require('path'); // Import the path module

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'assets')));
app.use('/assets', express.static('assets'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
