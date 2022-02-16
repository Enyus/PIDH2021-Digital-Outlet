var express = require('express');
var router = express.Router();
const IndexController = require("../controllers/IndexController")

/* GET home page. */
router.get('/', IndexController.index);

/*GET Página FAQ*/
router.get('/faq', IndexController.faq)

/*GET Página Sobre*/
router.get('/sobre', IndexController.sobre)

/*GET Página Contato*/
router.get('/contato', IndexController.contato)
router.post('/contato', IndexController.enviaContato)

/*GET Página Resultado da Busca*/
router.get('/resultadobusca', IndexController.resultadobusca)

/*GET Página do Produto*/
router.get('/produto', IndexController.produto)

/*GET Página do Login*/
// router.get('/login', (req, res, next) => {
//   res.render('login', {title:"Bem-Vindo!"})
// })

/*GET Página do Cadastro de Usuário*/
// router.get('/cadastrousuario', (req, res, next) => {
//   res.render('cadastrousuario', {title:"Seja nosso Cliente!"})
// })
/*GET Página do Carrinho*/
router.get('/carrinho', IndexController.carrinho)

/*GET Página do Trabalhe Conosco*/
router.get('/trabalheconosco', IndexController.trabalheconosco)

/*GET Página do Cadastro de Lojista*/
router.get('/cadastroloja', IndexController.cadastroloja)


/*GET Página do Cadastro de Produto*/
router.get('/cadastroproduto', IndexController.cadastroproduto)

/*GET Página do Cliente*/
router.get('/paginacliente', IndexController.paginacliente)

/*GET Página do Lojista*/
router.get('/paginaloja', IndexController.paginaloja)

module.exports = router;