//disney directory i guess?

const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 8000;

const { Movie, Characters} = require('./models')
const { Op } = require("sequelize");

app.set('view engine', 'ejs'); // for our view (html like pages), we want to use 
app.use(layouts);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) { 
    res.json( {message: 'Welcome to Spotify 2.0 baby!'})
});
///----------------

// Movie.bulkCreate([
//     { title: 'Snow White and the Seven Dwarfs', releaseDate: 1937, animated: true },
//     { title: 'The Aristocats', releaseDate: 1970, animated: true },
//     { title: 'Bedknobs and Broomsticks', releaseDate: 1971, animated: false },
//     { title: 'Monsters, Inc', releaseDate: 2001, animated: true },
//     { title: 'George of the Jungle', releaseDate: 1997, animated: false },
// ]).then(function(newMovies){
//     console.log('Bulk movies created', newMovies);
// }).catch(function(error){
//     console.log('Bulk movies not created', error);
// });



Characters.bulkCreate([
    { name: 'Snow White', actor: 'Adriana Caselottie', movie: 'Snow White and the Seven Dwarfs' },
    { name: 'Doc', actor: 'Roy Atwell', movie: 'Snow White and the Seven Dwarfs' },
    { name: 'Grumpy', actor: 'Pinto Colvig', movie: 'Snow White and the Seven Dwarfs' },
    { name: 'Sleepy', actor: 'Pinto Colvig', movie: 'Snow White and the Seven Dwarfs' },
    { name: 'Happy', actor: 'Otis Harlan', movie: 'Snow White and the Seven Dwarfs' },
    { name: 'Bashful', actor: 'Scotty Mattraw', movie: 'Snow White and the Seven Dwarfs' },
    { name: 'Sneezy', actor: 'Billy Gilbert', movie: 'Snow White and the Seven Dwarfs' },
    { name: 'Evil Queen', actor: 'Lucille La Verne', movie: 'Snow White and the Seven Dwarfs' },
    { name: 'The Prince', actor: 'Harry Stockwell', movie: 'Snow White and the Seven Dwarfs' }
]).then(function(newCharacters){
    console.log('Bulk Characters created', newCharacters);
}).catch(function(error){
    console.log('Bulk Characters not created', error);
});

///----------------
app.listen(PORT, function() {
    console.log(`Server running on PORT ${PORT}`);
});

module.exports = app;