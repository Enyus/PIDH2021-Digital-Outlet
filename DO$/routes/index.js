var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digital Outlet $' });
});

/*GET Página FAQ*/
router.get('/faq', (req, res, next) => {
  res.render('faq', {title:"Dúvidas Frequentes"})
})

/*GET Página Sobre*/
router.get('/sobre', (req, res, next) => {
  res.render('sobre', {title:"Sobre a DO$"})
})

/*GET Página Contato*/
router.get('/contato', (req, res, next) => {
  res.render('contato', {title:"Contato"})
})

module.exports = router;
