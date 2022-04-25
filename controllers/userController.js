const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcrypt');
const {format} = require('date-fns');


module.exports = {
    paginacliente: async (req, res) => {
        const {idUsuario} = req.session.usuario;
        let pedidos = [];
        let buscasRecentes = [];
        
        try {
            const pedidosDB = await db.Pedidos.findAll({
                where: {idUsuario},
                attributes:{
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [{
                    model: db.Produtos,
                    attributes:{
                        exclude: ['createdAt', 'updatedAt'],
                    },
                    paranoid: false,
                    include: {
                        model: db.Fotos,
                        attributes:{
                            exclude: ['Produtos.Fotos.idFoto', 'createdAt', 'updatedAt']
                        },
                        paranoid: false
                    },
                }, {
                    model: db.Lojas,
                    attributes: ['idLoja', 'nomeFantasia']
                }, {
                    model: db.StatusPedido,
                    attributes: ['idStatusPedido', 'idPedido', 'dataProcess', 'dataTransp', 'dataEntrega']
                }]
            });

            for (i=0; i<pedidosDB.length; i++) {
                pedidos.push(
                    {
                        idPedido: pedidosDB[i].idPedido,
                        loja: pedidosDB[i].Loja.nomeFantasia,
                        dataPedido: format(pedidosDB[i].dataPedido, 'dd/MM/yyyy'),
                        dataProcess: pedidosDB[i].StatusPedido.dataProcess,
                        dataTransp: pedidosDB[i].StatusPedido.dataTransp,
                        dataEntrega: pedidosDB[i].StatusPedido.dataEntrega,
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
                            fotoProduto: pedidosDB[i].Produtos[j].Fotos[0].urlFoto,
                            quantidade: pedidosDB[i].Produtos[j].PedidosProdutos.quantidade,
                            preco: pedidosDB[i].Produtos[j].PedidosProdutos.preco,
                            desconto: pedidosDB[i].Produtos[j].PedidosProdutos.desconto,
                            frete: pedidosDB[i].Produtos[j].PedidosProdutos.frete
                        }
                    )
                };
            };

            const enderecos = await db.Enderecos.findAll({where: {idUsuario}})

            if( usuario.buscasRecentes.length > 0) {
                buscasRecentes = await db.Produtos.findAll({
                    where: {idProduto: {
                        [Op.in]: usuario.buscasRecentes
                    }},
                    attributes: ['idProduto', 'nomeProduto', 'preco', 'promocao'],
                    include: {model: db.Fotos},
                    order: Sequelize.literal( `FIELD(Produtos.idProduto, ${usuario.buscasRecentes})`),
                });
            }
            
            return res.render('paginacliente', { title: "Bem-Vindo!", pedidos, enderecos, buscasRecentes })

        } catch(err) {

            console.log(err);
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })

        }
    },

    login: (req, res) => res.render('login', { title: "Digite seu login para continuar." }),

    logarUsuario: async (req, res) => {
        const { email, senha } = req.body;

        if(!email || !senha) {res.status(401).render('login', {title: "Campos Invalidos", message: "Usuário ou senha Inválidos"})};

        try {

            const user = await db.Usuarios.findOne(
                {
                    where: {email: email},
                    include: {model: db.Lojas}
                });

            const loja = await db.Lojas.findOne({where:{email:email}});

            if (user != null) {
                if (!bcrypt.compareSync(senha, user.senha)) {
                    return res.status(401).render('login', {title: "Erro", message: "Usuário ou senha Inválidos"});
                } else {
                    req.session.usuario = {
                        idUsuario: user.idUsuario,
                        email: user.email,
                        nome: user.nome,
                        sobrenome: user.sobrenome,
                        dataNasc: user.dataNasc.toISOString().slice(0,10),
                        cpf: user.cpf,
                        fotoPerfil: user.fotoPerfil,
                        buscasRecentes: []
                    }
                    res.cookie('idUsuario', user.idUsuario, {maxAge: 86400000})
                    if(user.Lojas.length>0) {
                        req.session.loja = {
                            idLoja: user.Lojas[0].idLoja,
                            email: user.Lojas[0].email,
                            razaoSocial: user.Lojas[0].razaoSocial,
                            nomeFantasia: user.Lojas[0].nomeFantasia,
                            inscEst: user.Lojas[0].inscEst,
                            cnpj: user.Lojas[0].cnpj,
                            logradouro: user.Lojas[0].logradouro,
                            numero: user.Lojas[0].numero,
                            complemento: user.Lojas[0].complemento,
                            cidade: user.Lojas[0].cidade,
                            estado: user.Lojas[0].estado,
                            cep: user.Lojas[0].cep,
                            fotoPerfil: user.Lojas[0].fotoPerfil
                        }
                        res.cookie('idLoja', user.Lojas[0].idLoja, {maxAge: 86400000})
                    }
                    return res.redirect('/cliente');
                }
            }

            if (loja != null) {
                if (!bcrypt.compareSync(senha, loja.senha)) {
                    return res.status(401).render('login', {title: "Erro", message: "Usuário ou senha Inválidos"});
                } else {
                    req.session.loja = {
                        idLoja: loja.idLoja,
                        email: loja.email,
                        razaoSocial: loja.razaoSocial,
                        nomeFantasia: loja.nomeFantasia,
                        inscEst: loja.inscEst,
                        cnpj: loja.cnpj,
                        logradouro: loja.logradouro,
                        numero: loja.numero,
                        complemento: loja.complemento,
                        cidade: loja.cidade,
                        estado: loja.estado,
                        cep: loja.cep,
                        fotoPerfil: loja.fotoPerfil
                    }
                    res.cookie('idLoja', loja.idLoja, {maxAge: 86400000})
                    return res.redirect('/loja');
                }
            }
        } catch(err) {

            console.log(err);
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })
        }
    },

    logout: (req, res) => {
        req.session.usuario = undefined;
        res.cookie('idUsuario', undefined);
        return res.redirect('/');
    },

    cadastro: (req, res) => res.render('cadastrousuario', { title: "Seja nosso Cliente!" }),

    cadastrarUsuario: async (req, res) => {
        const { email, nome, sobrenome, dataNasc, cpf, senha } = req.body;
        const hash = bcrypt.hashSync(senha, 10);

        try {
            const usuarioCriado = await db.Usuarios.create({
                email,
                nome,
                sobrenome,
                dataNasc,
                cpf,
                senha: hash,
            })
            console.log(usuarioCriado)
        } catch (error) {
            console.log(error)
        }
        return res.redirect('/')

    },

    //TODO: Testar login de usuario loja
    cadastroLoja: (req, res) => res.render('cadastroloja', { title: "Seja nosso Parceiro!" }),

    cadastrarLoja: async (req, res) => {
        const { email, razaoSocial, nomeFantasia, inscEst, cnpj, senha, logradouro, numero, cidade, estado, cep } = req.body;
        try {
            const hash = bcrypt.hashSync(senha, 10);
            const lojaCriada = await db.Lojas.create({
                email,
                razaoSocial,
                nomeFantasia,
                inscEst,
                cnpj,
                senha: hash,
                logradouro,
                numero,
                cidade,
                estado,
                cep,
            })
            console.log(lojaCriada);
        } catch (error) {
            console.log(error)
        }
        return res.redirect('/');
    },

    carrinho: (req, res) => res.render('carrinho-sacola', { title: "Carrinho!" }),

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
    },

    adicionarProfilePic: async (req,res) => {
        const { idUsuario } = req.body;
        const fotoPerfil = req.file.path.slice(-37);
        console.log(fotoPerfil);

        try {
            await db.Usuarios.update(
                {fotoPerfil},
                {where:{idUsuario}}
            )
            req.session.usuario.fotoPerfil = fotoPerfil;
            return res.redirect('/cliente');

        } catch (err) {
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })
        }
    },

    cadastrarEnderecoCliente: async (req, res) => {
        const { idUsuario, logradouro, numero, complemento, cidade, estado, cep } = req.body

        try {
            const enderecoAdd = await db.Enderecos.create({
                idUsuario,
                logradouro,
                numero,
                complemento,
                cidade,
                estado,
                cep
            });

            console.log(enderecoAdd);

            return res.redirect('/cliente')

        } catch (err) {
            
            console.log(err);

            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" });

        }
    },

    excluirEndereco: async (req, res) => {
        const {idEndereco} = req.params;

        try {

            await db.Enderecos.destroy({where: {idEndereco}});

            return res.redirect('/cliente')

        } catch(err) {

            console.log(err);
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" });

        }
    },

    excluirCliente: async (req, res) => {
        const {idUsuario} = req.params;
        const {confirmadeletausuario} = req.body;

        if (confirmadeletausuario != "confirma") {
            return res.status(412).render('error', {title: 'Falha', error: {erro: "O usuário não confirmou a deleção de sua conta corretamente"}, message: "O usuário não confirmou a deleção de sua conta corretamente" })
        }
        try {
            await db.Usuarios.destroy({where: {idUsuario}});
            req.session.usuario = undefined;
            res.cookie('idUsuario', undefined);
            return res.redirect('/');

        } catch(err) {
            console.log(err);
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" });

        }
    }
}