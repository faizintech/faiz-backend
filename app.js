const express = require('express')
require('dotenv').config()
const app = express()


app.get('/', (req, res) => {
  res.send("this is thr faiz route ")
})

app.get('/login', (req, res) => {
  res.send('you are on the login page')
})


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`you server is running on the port ${PORT}`)
})