const massive = require('massive');

const db = massive.connectSync({
  connectionString : 'postgres://postgres:postgres@localhost/sandbox'
});

module.exports = {
  Create: function (req, res) {
    console.log(req.body);
    let nope = req.body
    db.create_product([nope.name, nope.description, nope.price, nope.imageurl], function (err, resolve) {
      if (err){
        console.log(err);
      } else {
        res.send(resolve)
      }
    })
  },

  GetOne: function(req, res) {
    console.log(req.params.id);
    db.read_product([req.params.id], function (err, product) {
      if (err){
        console.log(err)
      }else {
        res.send(product)
      }
    })
  },

  GetAll: function (req, res) {
    db.read_products(function (err, products) {
      if(err){
        console.log(err)
      }else {
        res.send(products)
      }
    })
  },

  Update: function (req, res) {
    db.update_product([req.params.id, req.query.desc], function (err, resolve) {
      if (err){
        console.log(err);
      } else {
        res.send(resolve)
      }
    })
  },

  Delete: function (req, res) {
    db.delete_product([req.params.id], function (err, resolve) {
      if (err){
        console.log(err);
      } else {
        res.send(resolve)
      }
    })
  }
}
