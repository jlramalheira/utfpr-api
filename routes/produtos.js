const express = require('express');
const router = express.Router();

/* GET produtos listing. */
router.get('/', async (req, res) => {
  console.log('GET Produtos')
  const query = req.query
  if (query.error) {
    res.status(query.error).send({})
  } else {
    res.send([{id: 1, query}])
  }
})

router.get('/:id', async (req, res) => {
  const params = req.params
  console.log('GET Produtos', params.id)
  //chamar meu banco de dados
  //aplicar minha regra de nogócio
  res.send({id: params.id})
})

router.post('/', async (req, res) => {
  console.log('POST Produtos')
  const query = req.query
  console.log(query)
  const body = req.body
  res.send(body);
})

router.patch('/:id', async (req, res) => {
  console.log('PATCH Produtos')
  const query = req.query
  console.log(query)
  const body = req.body
  res.send(body);
})

module.exports = router;
