const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcrypt');
const {format} = require('date-fns');


module.exports = {
    paginacliente: async (req, res) => {
        const {idUsuario} = req.session.usuario;
        let pedidos =[]
        
        try {
            const pedidosDB = await db.Pedidos.findAll({
                where: {idUsuario},
                include: {
                    model: db.Produtos,
                    include: {
                        model: db.Fotos
                    },
                }
            });
            // console.log(pedidosDB);
            // console.log(pedidosDB[0].Produtos[0].Fotos);

            for (i=0; i<pedidosDB.length; i++) {
                pedidos.push(
                    {
                        idPedido: pedidosDB[i].idPedido,
                        idLoja: pedidosDB[i].idLoja,
                        dataPedido: format(pedidosDB[i].dataPedido, 'dd/MM/yyyy'),
                        valor: pedidosDB[i].valor,
                        produtos: []
                    }
                );

                for(j=0;j<pedidosDB[i].Produtos.length; j++) {
                    pedidos[i].produtos.push(
                        {
                            nomeProduto: pedidosDB[i].Produtos[j].nomeProduto,
                            preco: pedidosDB[i].Produtos[j].preco,
                            promocao: pedidosDB[i].Produtos[j].promocao,
                            idProduto: pedidosDB[i].Produtos[j].idProduto,
                            fotoProduto: pedidosDB[i].Produtos[j].Fotos[0].urlFoto
                        }
                    )
                };
            };
            // console.log(pedidos);

            return res.render('paginacliente', { title: "Bem-Vindo!", usuario: req.session.usuario, pedidos })

        } catch(err) {

            console.log(err);
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })

        }
    },

    login: (req, res) => res.render('login', { title: "Digite seu login para continuar." , usuario: req.session.usuario}),

    logarUsuario: async (req, res) => {
        const { email, senha } = req.body;

        if(!email || !senha) {res.render('login', {title: "Campos Invalidos", usuario: req.session.usuario})};

        const user = await db.Usuarios.findOne({ 
            where: {
                email: email,
            }
        });

        // console.log(user);

        if (!bcrypt.compareSync(senha, user.senha)) {
            return res.send("Senha invalida");
        } else {
            req.session.usuario = {
                idUsuario: user.idUsuario,
                email: user.email,
                nome: user.nome,
                sobrenome: user.sobrenome,
                dataNasc: user.dataNasc.toISOString().slice(0,10),
                cpf: user.cpf,
                fotoPerfil: user.fotoPerfil
            }
            return res.redirect('/cliente');
        }
    },

    logout: (req, res) => {
        req.session.usuario = undefined;
        return res.redirect('/');
    },

    cadastro: (req, res) => res.render('cadastrousuario', { title: "Seja nosso Cliente!", usuario: req.session.usuario }),

    cadastrarUsuario: async (req, res) => {
        const { email, nome, sobrenome, dataNasc, cpf, senha } = req.body;

        const hash = bcrypt.hashSync(senha, 10);
        const usuarioCriado = await db.Usuarios.create({
            email,
            nome,
            sobrenome,
            dataNasc,
            cpf,
            senha: hash,
        })
        // console.log(usuarioCriado)
        return res.redirect('/login')
    },

    cadastroLoja: (req, res) => res.render('cadastroloja', { title: "Seja nosso Parceiro!", usuario: req.session.usuario }),

    cadastrarLoja: async (req, res) => {
        const { email, razaoSocial, nomeFantasia, inscEst, cnpj, senha, logradouro, numero, cidade, estado, cep } = req.body;
        const lojaCriada = await db.Lojas.create({
            email,
            razaoSocial,
            nomeFantasia,
            inscEst,
            cnpj,
            senha,
            logradouro,
            numero,
            cidade,
            estado,
            cep,
        })

        console.log(lojaCriada);
        return res.redirect('/');
    },

    carrinho: (req, res) => res.render('carrinho-sacola', { title: "Carrinho!", usuario: req.session.usuario }),

    alterarCliente: async (req,res) => {
        const { idUsuario, email, nome, sobrenome, dataNasc, cpf, senha } = req.body;

        const hash = bcrypt.hashSync(senha, 10);

        try {
            const usuarioAlterado = await db.Usuarios.update(
                {email, nome, sobrenome, dataNasc, cpf, senha:hash},
                {where:{idUsuario}}
            )

            console.log(usuarioAlterado);

            req.session.usuario = undefined;
            return res.redirect('/login');

        } catch (err) {

            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })

        }
<<<<<<< HEAD
    },

    adicionarProfilePic: async (req,res) => {
        const { idUsuario } = req.body;
        const fotoPerfil = req.file.path.slice(-37);
        console.log(fotoPerfil);

        try {
            const perfilCliente = await db.Usuarios.update(
                {fotoPerfil},
                {where:{idUsuario}}
            )

            req.session.usuario.fotoPerfil = fotoPerfil;
            
            return res.redirect('/cliente');

        } catch (err) {

            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })

        }
=======
>>>>>>> cassio
    }
}