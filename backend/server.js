const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 5000;
const users = require("./routes/users");
const db = require('./config/keys').mongoURI;
const passport = require('passport');

mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);


app.use("/users", users);     //models go here


app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});