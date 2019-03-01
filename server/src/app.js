let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/stream', function (req, res) {
  let val = Math.random() * (100 - 1) + 1
  res.send(''+val)
})

let port = 8081

app.listen(port, function () {
  console.log('Server running on ' + port)
})