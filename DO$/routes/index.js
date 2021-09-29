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

/*GET Página Resultado da Busca*/
router.get('/resultadobusca', (req, res, next) => {
  res.render('resultadobusca', {title:"Resultado da Busca"})
})

/*GET Página do Produto*/
router.get('/produto', (req, res, next) => {
  res.render('produto', {title:"Produto"})
})

/*GET Página do Login*/
router.get('/login', (req, res, next) => {
  res.render('login', {title:"Bem-Vindo!"})
})

/*GET Página do Cadastro de Usuário*/
router.get('/cadastrousuario', (req, res, next) => {
  res.render('cadastrousuario', {title:"Seja nosso Cliente!"})
})

/*GET Página do Trabalhe Conosco*/
router.get('/trabalheconosco', (req, res, next) => {
  res.render('trabalheconosco', {title:"Trabalhe Conosco!"})
})

/*GET Página do Cadastro de Lojista*/
router.get('/cadastroloja', (req, res, next) => {
  res.render('cadastroloja', {title:"Seja nosso Parceiro!"})
})

module.exports = router;
