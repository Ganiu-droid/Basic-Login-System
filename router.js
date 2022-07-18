var express = require('express');
var router = express.Router();


//specify credentials
const credentials = {
    email: "admin@gmail.com",
    password: "admin123"
}
//Login user
router.post('/login', (req, res) =>{
    if(req.body.email==credentials.email && req.body.password == credentials.password){
        req.session.user = req.body.params
        //res.redirect('/dashboard')

        res.end('login successful')
    } else{
        res.end("Invalid Username")
    }
});

module.exports = router;