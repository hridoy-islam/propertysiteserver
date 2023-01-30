const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@peropertycluster.ocyefgu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(cors())
express.json();

app.get('/', (req, res) => {
  res.send('Property Backend Running')
})

async function run() {
  try {
      app.post('/jsonToken', (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
      res.send({ token })
    })

  }
  finally {

  }
}

run().catch(error => console.log(error))

app.listen(port, () => {
  console.log(`Server Backend Running on ${port}`)
})