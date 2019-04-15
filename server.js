const express = require('express');
const app = express();

const pokemon = require('./pokemon');

// index route
app.get('/pokemon', (req, res)=>{
    res.render('index.ejs', {
        'pokemon':pokemon
    })
});



app.listen(3000, ()=>{
    console.log('server is running')
});