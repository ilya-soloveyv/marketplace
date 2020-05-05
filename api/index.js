const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const consola = require('consola')
const app = express()
const mongoose = require('mongoose')
const cachegoose = require('cachegoose')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

mongoose
  .connect('mongodb://localhost/marketplace', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    consola.info('Database connection successful')
  })
  .catch((err) => {
    consola.info('Database connection error')
    consola.info(err)
  })

cachegoose(mongoose, {
  // engine: 'redis',
  // port: 3001,
  // host: 'localhost'
})

app.use('/api/product', require('./routes/product'))

async function start() {
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(nuxt.render)
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
