const baseRouter = require('./base')
const produtosRouter = require('./produtos')
const categoriasRouter = require('./categorias')

function configureRoutes(app) {
  app.use('/', baseRouter)
  app.use('/produtos', produtosRouter)
  app.use('/categorias', categoriasRouter)
}

module.exports = configureRoutes