const express = require('express');
const app = express();

const pokemon = require('./pokemon');

app.use(express.static('public'));


// index route
app.get('/pokemon', (req, res)=>{
    res.render('index.ejs', {
        'pokemon':pokemon,
    })
});


// show route
app.get('/pokemon/:id', (rec, res)=>{
    res.render('show.ejs', {
        'singlePokemon': pokemon[rec.params.id]
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