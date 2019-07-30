const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

var quotes = require("./posts.json");

app.get('/', function (req, res) {
    res.send(
        quotes[Math.floor(Math.random() * (quotes.length))]
    );
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});