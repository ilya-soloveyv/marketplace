const { Router } = require('express')
const router = Router()

const Product = require('../../models/product')

router.post('/list', async (req, res, next) => {
  const products = await Product.find().cache(300)
  res.json(products)
})

router.get('/add', (req, res, next) => {
  new Product({
    sProductTitle: req.query.sProductTitle
  }).save(function(err, product) {
    if (err) res.json(err)
    else res.json(product)
  })
})

module.exports = router
