const express = require('express');
const router = express.Router();
const Categorias = require('../models/categorias')

router.get('/', async (req, res) => {
  const query = req.query
  const categorias = await Categorias.findAll({where: query, include: ['produtos']})
  res.json(categorias)
})

router.post('/', async (req, res) => {
  const categoria = req.body;
  res.json(await Categorias.create(categoria))
})

router.put('/:id', async (req, res) => {
  const categoria = req.body;
  const id = req.params.id
  res.json(await Categorias.update(categoria,{where: {id: id}}))
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  res.json(await Categorias.destroy({where: {id: id}}))
})


module.exports = router;
