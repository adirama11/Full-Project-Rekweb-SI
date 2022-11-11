var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/log', function(req,res){
//   console.log({request : req.body})
//     res.send('Login Berhasil')
// })

// router.put('/ubah', function(req, res){
//   console.log({requestUbah : req.body})
//   res.send('Data Berhasil Di Ubah')
// })

// router.delete('/hapus', function(req, res){
//   console.log({RequestHapus : req.body})
//   res.send('Data Berhasil Di Hapus')
// })

module.exports = router;
