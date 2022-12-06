require('dotenv').config();

const express = require('express');
const cors = require('cors');

const {dbConnect} = require('./dataBase/config');

const app = express()
const port = process.env.PORT;

//configuracio Cores
app.use( cors() );
// Conect BD
dbConnect();

//rutas
app.get('/', (req, res) => {
  res.json({
    ok: true,
    msg:"hola brother"
  })
});


app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${port}`)
})