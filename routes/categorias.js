const express = require('express');
const router = express.Router();

router.get('/:id/produtos/:idProduto', async (req, res) => {
  const params = req.params
  console.log('GET Categorias', params.id)
  console.log('GET Produtos', params.idProduto)
  //chamar meu banco de dados
  //aplicar minha regra de nogócio
  res.send({id: params.id, idProduto: params.idProduto})
})

router.post('/:id/produtos', async (req, res) => {
  const params = req.params
  const body = req.body
  //chamar meu banco de dados
  //aplicar minha regra de nogócio
  res.send({...body, categoriaId: params.id})
})

module.exports = router;
