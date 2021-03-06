var express = require('express');
var router = express.Router();
const Planet = require('../models/planets')

/* GET home page. */
router.get('/planets', (req, res) => {
  Planet.find()
    .then(planets => res.send(planets))
    .catch(err => res.status(500).send(err))
});

router.get('/planet/:id', (req, res) => {
  const _id = req.params.id
  Planet.findById(_id)
    .then(planet => res.send(planet))
    .catch(err => res.send(err))
})

router.post('/planet', (req, res) => {
  const planet = new Planet(req.body)
  planet.save()
    .then(() => res.send(planet))
    .catch(err => res.status(500).send(err))
})

router.delete('/planet/:id', (req, res) => {
  const _id = req.params.id
  Planet.findByIdAndDelete(_id)
    .then(() => res.send(planet))
    .catch(err => res.status(500).send(err))
})

router.patch('/planet/:id', (req, res) => {
  const _id = req.params.id
  Planet.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
    .then(planet => res.send(planet))
    .catch(err => res.status(500).send(err))
})

module.exports = router;
