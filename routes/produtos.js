const express = require('express');
const router = express.Router();
const Produtos = require('../models/produtos')

router.get('/', async (req, res) => {
  const query = req.query
  const produtos = await Produtos.findAll({where: query,include: ['categoria']})
  res.json(produtos)
})

router.post('/', async (req, res) => {
  const produto = req.body;
  res.json(await Produtos.create(produto))
})

router.put('/:id', async (req, res) => {
  const produto = req.body;
  const id = req.params.id
  res.json(await Produtos.update(produto,{where: {id: id}}))
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  res.json(await Produtos.destroy({where: {id: id}}))
})


module.exports = router;
