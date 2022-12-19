const express = require('express');
const app = express();

// Server
const PORT = process.env.PORT || 3001;

// Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.use(express.json());

// Routers
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`Server now running on ${PORT}!`);
})


