const express = require('express');
const app = express();

// index route
app.get('/pokemon', (req, res)=>{
    res.render('index.ejs', {
    })
});



app.listen(3000, ()=>{
    console.log('server is running')
});