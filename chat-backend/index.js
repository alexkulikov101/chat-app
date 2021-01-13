const express = require('express')
const config = require('./config/app')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  return res.json('Home screen1')
})

const port = config.appPort

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
