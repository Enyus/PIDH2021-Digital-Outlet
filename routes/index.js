var express = require('express');
var router = express.Router();
const IndexController = require("../controllers/IndexController");
const userController = require('../controllers/userController');
const CompraController = require('../controllers/CompraController');
var auth = require ('../middlewares/auth');
const uploadFile = require('../middlewares/multerConfig')

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
router.get('/produto/:idProduto', IndexController.produto)

/* Página do Login*/
router.get('/login', userController.login);
router.post('/login', userController.logarUsuario);
router.get('/logout', userController.logout);

/*GET Página do Cadastro de Usuário*/
router.get('/cadastro', userController.cadastro);
router.post('/cadastro', userController.cadastrarUsuario);

/*GET Página do Carrinho*/
router.get('/carrinho', CompraController.index);
router.get('/carrinho/sacola', CompraController.sacola)
router.get('/carrinho/identificacao', CompraController.identificacao)
router.get('/carrinho/entrega', CompraController.entrega)
router.get('/carrinho/pagamento', CompraController.pagamento)

/*GET Página do Trabalhe Conosco*/
router.get('/trabalheconosco', IndexController.trabalheconosco)
router.post('/trabalheconosco', uploadFile.single('curriculo'), IndexController.cadastrarCurriculo)

/*GET Página do Cadastro de Produto*/
router.get('/cadastroproduto', IndexController.cadastroproduto)

/*GET Página do Cliente*/
router.get('/cliente', auth, IndexController.paginacliente)
router.put('/alterarcliente', auth, userController.alterarCliente)

/*GET Página do Lojista*/
router.get('/loja', IndexController.paginaloja)
router.get('/cadastroloja', userController.cadastroLoja);
router.post('/cadastroloja', userController.cadastrarLoja);

module.exports = router;