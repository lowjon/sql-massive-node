const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pCtrl = require('./productsCtrl');

const app = module.exports = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', pCtrl.GetAll)
app.get('/products/:id', pCtrl.GetOne)

app.post('/products', pCtrl.Create)

app.put('/products/:id', pCtrl.Update)

app.delete('/products/:id', pCtrl.Delete)



app.listen('3000', function(){
  console.log('listening on : 3000');
})
