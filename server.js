const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const uuid = require('uuid');

const router = require('./router');

const app = express();

const port = process.env.PORT || 3000;

//initialize view engine
app.set('view engine', 'ejs');


//load bodyPaser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Load static assets
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.use(session({
    secret: uuid.v4(),
    resave: false,
    saveUninitialized: true
}))

//Use router (middleware)
app.use('/route', router)

app.get('/', (req, res) =>{
    res.render('base', {title: "Login System"});
})
app.listen(port, ()=>{console.log(`Server is Listening on port: ${port}`)})