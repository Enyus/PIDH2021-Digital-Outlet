var express = require('express');
var router = express.Router();
const IndexController = require("../controllers/IndexController");
const userController = require('../controllers/userController');
const CompraController = require('../controllers/CompraController');
const lojaController = require('../controllers/lojaController');
var auth = require ('../middlewares/auth');
var authLoja = require ('../middlewares/authLoja');
var authCarrinho = require('../middlewares/authCarrinho');
const uploadFile = require('../middlewares/multerConfig');
const uploadFotoPerfil = require('../middlewares/uploadFotoPerfil')

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
router.get('/logoutLoja', lojaController.logout);

/*GET Página do Cadastro de Usuário*/
router.get('/cadastro', userController.cadastro);
router.post('/cadastro', userController.cadastrarUsuario);

/*GET Página do Carrinho*/
router.get('/carrinho', CompraController.index);
router.post('/addcart', CompraController.addCart);
router.post('/removecart', CompraController.removeCart);
router.post('/removecartitem', CompraController.removeCartItem);
router.post('/comprar', CompraController.comprar);
router.get('/identificacaocliente', CompraController.identicacao);
router.post('/identificacaocliente', CompraController.identicacao);
router.post('/dadosentrega', CompraController.entrega);

/*GET Página do Trabalhe Conosco*/
router.get('/trabalheconosco', IndexController.trabalheconosco)
router.post('/trabalheconosco', uploadFile.single('curriculo'), IndexController.cadastrarCurriculo)

/*GET Página do Cadastro de Produto*/
router.get('/cadastroproduto', authLoja, lojaController.cadastroproduto)

/*GET Página do Cliente*/
router.get('/cliente', auth, userController.paginacliente);
router.put('/alterarcliente', auth, userController.alterarCliente);
router.put('/adicionaPerfilCliente', auth, uploadFotoPerfil.single('perfil'), userController.adicionarProfilePic);
router.post('/adicionarEnderecoCliente', auth, userController.cadastrarEnderecoCliente);
router.delete('/deleteEndereco/:idEndereco', auth, userController.excluirEndereco);
router.delete('/deletarCliente/:idUsuario', auth, userController.excluirCliente);

/*GET Página do Lojista*/
router.get('/loja', authLoja, lojaController.paginaloja);
router.get('/cadastroloja', lojaController.cadastroLoja);
router.post('/cadastrarloja', lojaController.cadastrarLoja);
router.put('/alterarloja', authLoja, lojaController.alterarLoja);
router.put('/adicionaPerfilLoja', authLoja, uploadFotoPerfil.single('perfil'), lojaController.adicionarProfilePic);
router.delete('/deletarLoja/:idLoja', authLoja, lojaController.excluirLoja);
router.post('/adicionaradministrador', authLoja, lojaController.addAdmin);
router.delete('/deletaAdministrador/:idUsuario', authLoja, lojaController.deleteAdmin);
router.put('/processarpedido/:idPedido', authLoja, lojaController.processarPedido);
router.put('/transportarpedido/:idPedido', authLoja, lojaController.transportarPedido);
router.put('/confirmarentrega/:idPedido', authLoja, lojaController.confirmarEntrega);

module.exports = router;