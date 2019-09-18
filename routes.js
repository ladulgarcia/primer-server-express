const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index.ejs');
})

router.get('/login', (req, res) => {
  res.render('login')
})

// Me lo llevo a index.js
// router.get('*', (req, res) => {
//   res.end('Archivo no encontrado')
// })

module.exports = router;