const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const pokemon = require('./pokemon');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));


// index route
app.get('/pokemon', (req, res)=>{
    res.render('index.ejs', {
        'pokemon':pokemon,
    })
});

// create route
app.get('/pokemon/new', (req, res) =>{
    res.render('new.ejs')
});

app.post('/pokemon', (req, res) =>{
    pokemon.push(req.body);
    console.log(pokemon);
    res.redirect('/pokemon')
})

// show route
app.get('/pokemon/:id', (req, res)=>{
    res.render('show.ejs', {
        'singlePokemon': pokemon[req.params.id]
    })
})

app.listen(3000, ()=>{
    console.log('server is running')
});



// how to do static files
// app.use(express.static('public'))
// static is unchanging files (css, images, fonts etc)
// public is name of folder, public is convention
// when applying, /style.css