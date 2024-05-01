const express = require('express')
const router = express.Router()
const session = require('express-session')

router.get('/register', (req,res) =>{
    res.render('register');
})

router.post('/register', (req,res) =>{
  const { username, password, email } = req.body;
  const new_user = {
    username,
    password,
    email
  };
  db_schema.users.push(new_user);
  global.db.update();
  res.redirect('/auth/login');
})


router.get('/login',(req,res) =>{
    res.render('login');
})

router.use(session({
    secret: 'SomeSecretCode##LoadFromEnviromentVariable',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 6000}
}))

router.post('/login',(req,res) =>{
  const { username, password } = req.body;
  const user = db_schema.users.find(user => user.username === username && user.password === password);
  if (user) {
    req.session.user = user;
    res.redirect('/dashboard');
  } else {
    res.send('Login Failed');
  }
})

module.exports = router