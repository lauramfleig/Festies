const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const db = require('./models');
const PORT = process.env.PORT || 3030;
/* const apiRoutes = require('./routes/api/api-routes.js');
const htmlRoutes = require('./routes/view/html-routes.js'); */

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static("client/build"));


/* app.use(apiRoutes);
app.use(htmlRoutes); */

/* const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/festies";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
}); */ 

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});