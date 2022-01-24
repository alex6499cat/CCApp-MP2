const express = require('express')
var bodyParser = require('body-parser')

const app = express()

seed = 0

// create application/json parser
var jsonParser = bodyParser.json()
 
app.get("/", async (req, res) => {
  try {
    res.send(String(seed))
  } catch (error) {
    res.send(error)
  }
})

app.post('/', jsonParser,function (req, res) {
    seed = req.body.num
    res.send(String(seed))
})
  

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`))

