const express = require('express')
const router = express.Router()

router.get('/new_video',(req,res) =>{
    res.render('add_video')
})

router.post('/new_video',(req,res) =>{
    const { video_name, link } = req.body;
  const new_video = {
    video_name,
    link
  };
  db_schema.users.push(new_video);
  global.db.update();
})

router.get('/dashboard', (req,res) =>{
    res.render('dashboar', {videos: videos})
})

module.exports = router;