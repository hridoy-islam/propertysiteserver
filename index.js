const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
express.json();

app.get('/', (req, res) => {
  res.send('Property Backend Running')
})

app.listen(port, () => {
  console.log(`Server Backend Running on ${port}`)
})