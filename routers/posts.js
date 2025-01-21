const express = require("express")
const router = express.Router()

// Index
router.get('/', function (req, res) {
    res.send('Lista dei post');
    })
  
// Show
router.get('/:id', function (req, res) {
  res.send('Dettagli del post ' + req.params.id);
})

// Store
router.post('/', function (req, res) {
  res.send('Creazione nuovo post');
})

// Update
router.put('/:id', function (req, res) {
  res.send('Modifica integrale del post' + req.params.id);
})

// Modify
router.patch('/:id', function (req, res) {
  res.send('Modifica parziale del post' + req.params.id);
})

// Destroy
router.delete('/:id', function (req, res) {
  res.send('Eliminazione del post' + req.params.id);
})

module.exports = router