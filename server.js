const express = require('express');
const path = require('path');
const { appendFile } = require('fs');

const port = process.env.PORT || 3000;

const app = express();

//initialize view engine
app.set('view engine', 'ejs');

//Load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) =>{
    res.render('base', {title: "Login System"});
})
app.listen(port, ()=>{console.log(`Server is Listening on port: ${port}`)})