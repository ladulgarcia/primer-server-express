// importar/crear el metodo http de Node y crearlo con una constante
const express = require('express')
const morgan = require('morgan')
const app = express()
//crear el servidor y su funcionalidad (req, res)

//settings
app.set('appName', 'Mi primer server')
app.set('views', __dirname + '/views')

// console.log(__dirname + '/views'); si ya pude ver en pantalla entonces llamo a views
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(morgan('combined'))
// app.use(morgan('dev'))
// app.use(function (req, res, next) {
//   console.log('request url: ' + req.url)
//   next()
// });

// app.use((req, res, next) => {
//   console.log('Ha pasado por esta función')
//   next()
// })


//RUTAS
//imagenes
// app.get('/', (req, res) => {
//   res.end('Hello World');
// })

app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('*', (req, res) => {
  res.end('Archivo no encontrado')
})


app.listen(3000, function () {
  console.log('servidor funcionando') // esto se despliega en terminal
  console.log('Nombre de la App: ', app.get('appName'))
});