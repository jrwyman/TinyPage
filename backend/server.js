const path = require('path');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = (process.env.PORT || 5000);
const passport = require('passport');
const db = require('./config/keys').mongoURI;

const users = require('./routes/users');
const posts = require('./routes/posts');

mongoose.set('debug', true);

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/posts', posts);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
