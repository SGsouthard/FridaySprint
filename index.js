//disney directory i guess?

const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs'); // for our view (html like pages), we want to use 
app.use(layouts);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) { 
    res.json( {message: 'Welcome to Spotify 2.0 baby!'})
});
///----------------

//

///----------------
app.listen(PORT, function() {
    console.log(`Server running on PORT ${PORT}`);
});

module.exports = app;