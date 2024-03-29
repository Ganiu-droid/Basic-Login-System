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
        req.session.user = req.body.email
        res.redirect('/route/dashboard')

        //res.end('login successful')
    } else{
        res.end("Invalid Username")
    }
});

//route for dashboard
router.get('/dashboard', (req, res) =>{
    if(req.session.user){
        res.render('dashboard', {user: req.session.user})
    }else{
        res.send('unauthorize user')
    }
});


//route for logout
router.get('/logout', (req, res) =>{
    req.session.destroy( (err)=>{
        if(err){ 
            console.log(err);
            res.send("Error");
        }else{
            res.render('base', {title: "Express", logout:"logout Successfully..."})

        }
    } ) 
})

module.exports = router;