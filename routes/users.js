var express = require('express');
var router = express.Router();


const { Sequelize, Op } = require('sequelize');
const Users = require('../models').users;


/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

/* GET users listing. */
router.get('/findAll/json', function(req, res, next) {
  Users.findAll({  
  })  
  .then(users => {  
      res.json(users);  
  })  
  .catch(error => res.status(400).send(error)) 
});



module.exports = router;
