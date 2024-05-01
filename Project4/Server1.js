const express = require('express');
const pug = require('pug');
const app = express();
const log_reg = require('/login_reg')
const video = require('/video_route')

app.set('views','/pages');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

db_conn = __dirname + "/fsdb.js";
global.db = require('/fsdb.js')(db_conn,db_schema);

db_schema = {
    users : [],
    videos: []
}

app.use('/auth',log_reg);

app.use('/video', video)


app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})