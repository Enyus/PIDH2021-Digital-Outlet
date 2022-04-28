const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcrypt');

module.exports = {
    cadastroLoja: (req, res) => res.render('cadastroloja', { title: "Seja nosso Parceiro!" }),

    paginaloja: async (req, res, next) => {
        const {idLoja} = req.session.loja;
        let listaProdutos = [];

        try {
            const produtos = await db.Produtos.findAll({
                where: {idLoja},
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'desc']
                },
                include: [
                    {
                        model: db.Marcas,
                        attributes: ['idMarca', 'nomeMarca']
                    }, {
                        model: db.Categorias,
                        attributes: ['idCategoria', 'nomeCategoria']
                    },
                    {
                        model: db.Estoque,
                        attributes: ['idProduto', 'quantidade']
                    }
                ]
            });


            for (i=0;i<produtos.length;i++) {
                listaProdutos.push(
                    {
                        idProduto: produtos[i].idProduto,
                        nomeProduto: produtos[i].nomeProduto,
                        marca: produtos[i].Marca.nomeMarca,
                        categoria: produtos[i].Categoria.nomeCategoria,
                        preco: produtos[i].preco,
                        desconto: produtos[i].promocao,
                        estoque: produtos[i].Estoque.quantidade,
                    }
                );
            };

            const pedidos = await db.Pedidos.findAll({
                where: {idLoja},
                attributes:{
                    exclude: ['updatedAt']
                },
                include: [
                    {
                        model: db.Produtos,
                        attributes: ['idProduto', 'nomeProduto', 'preco', 'promocao'],
                        paranoid: false
                    } , {
                        model: db.Usuarios,
                        attributes: ['idUsuario', 'cpf']
                    } , {
                        model: db.StatusPedido,
                        attributes: ['idStatusPedido', 'idPedido', 'dataProcess', 'dataTransp', 'dataEntrega']
                    }
                ]
            });

            let pedidosHoje = 0;
            let faturadoHoje = 0;
            let pedidosMes = 0;
            let faturadoMes = 0;
            let idsPedidosMes = [];
            let pedidosAno = 0;
            let faturadoAno = 0;
            let idsPedidosAno = [];

            pedidos.forEach( pedido => {
                if ( ( pedido.dataPedido.getFullYear() == (new Date()).getFullYear() ) &&
                     ( pedido.dataPedido.getMonth() == (new Date()).getMonth() ) &&
                     ( (pedido.dataPedido.getDate() == (new Date()).getDate() ) )) {
                    pedidosHoje += 1;
                    faturadoHoje += pedido.valor;
                };
                if ( ( pedido.dataPedido.getFullYear() == (new Date()).getFullYear() ) &&
                    ( pedido.dataPedido.getMonth()==(new Date()).getMonth() ) ) {
                    pedidosMes += 1;
                    faturadoMes += pedido.valor;
                    idsPedidosMes.push(pedidos.indexOf(pedido));
                };
                if ( ( pedido.dataPedido.getFullYear() == (new Date()).getFullYear() )) {
                    pedidosAno += 1;
                    faturadoAno += pedido.valor;
                    idsPedidosAno.push(pedidos.indexOf(pedido));
                }
            });

            resumoPedidos = {pedidosHoje, faturadoHoje, pedidosMes, faturadoMes, idsPedidosMes, pedidosAno, faturadoAno, idsPedidosAno};
 
            const lojaUsuario = await db.Lojas.findOne({
                where: {idLoja},
                attributes: ['idLoja'],
                include: {
                    model: db.Usuarios,
                    attributes: ['idUsuario', 'nome', 'sobrenome', 'cpf']
                }
            });
            const admins = lojaUsuario.Usuarios;

            const faleConosco = await db.FaleConosco.findAll(
                {attributes: {
                    exclude: ['idFaleConosco', 'updatedAt']
                }}
            )

            const curriculos = await db.TrabalheConosco.findAll({
                attributes: {
                    exclude: ['idTrabalheConosco', 'updatedAt']
                }
            })

            return res.render('paginaloja', {title:"Bem-Vindo!", idLoja, listaProdutos, pedidos, admins, resumoPedidos, faleConosco, curriculos});

        } catch (err) {
            console.log(err);
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" })
        }
    },

    cadastrarLoja: async (req, res) => {
        const { email, razaoSocial, nomeFantasia, inscEst, cnpj, senha, logradouro, numero, complemento, cidade, estado, cep } = req.body;
        try {
            const hash = bcrypt.hashSync(senha, 10);
            await db.Lojas.create({
                email,
                razaoSocial,
                nomeFantasia,
                inscEst,
                cnpj,
                senha: hash,
                logradouro,
                numero,
                complemento,
                cidade,
                estado,
                cep,
            })
            return res.redirect('/');
        } catch (error) {
            console.log(error)
            return res.status(400).render('error', {title: 'Falha', error, message: "Ih deu erro" })
        }
    },

    logout: (req, res) => {
        req.session.loja = undefined;
        res.cookie('idLoja', undefined);
        return res.redirect('/');
    },

    alterarLoja: async (req, res) => {
        const { idLoja, email, razaoSocial, nomeFantasia, senha, logradouro, numero, complemento, cidade, estado, cep } = req.body;
        const hash = bcrypt.hashSync(senha, 10);

        try {
            const lojaAlterada = await db.Lojas.update(
                { 
                    email:email,
                    razaoSocial: razaoSocial,
                    nomeFantasia: nomeFantasia,
                    senha:hash,
                    logradouro: logradouro,
                    numero: numero,
                    complemento: complemento,
                    cidade: cidade,
                    estado:estado,
                    cep: cep
                },
                {where:{idLoja}}
            );

            console.log(lojaAlterada);
            
            req.session.loja = undefined;
            res.cookie('idLoja', undefined);
            return res.redirect('/login');

        } catch(error) {
            console.log(error)
            return res.status(400).render('error', {title: 'Falha', error, message: "Ih deu erro" })
        }

    },

    adicionarProfilePic: async (req, res) => {
        const { idLoja } = req.body;
        const fotoPerfil = req.file.path.slice(-37);
        console.log(fotoPerfil);

        try {
            await db.Lojas.update(
                {fotoPerfil},
                {where:{idLoja}}
            )
            req.session.loja.fotoPerfil = fotoPerfil;
            
            return res.redirect('/loja');

        } catch (err) {

            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro ao adicionar foto" })

        }
    },

    excluirLoja: async (req, res) => {
        const {idLoja} = req.params;
        const {confirmadeletaloja} = req.body;

        if (confirmadeletaloja != "confirma") {
            return res.status(412).render('error', {title: 'Falha', error: {erro: "A loja não confirmou a deleção de sua conta corretamente"}, message: "A loja não confirmou a deleção de sua conta corretamente" })
        }
        
        try {
            await db.Lojas.destroy({where: {idLoja}});
            req.session.loja = undefined;
            res.cookie('idLoja', undefined);

            return res.redirect('/');

        } catch(err) {
            console.log(err);
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" });
        }
    },

    addAdmin: async (req, res) => {
        const {idLoja} = req.session.loja;
        const {cpfAdmin} = req.body;
        console.log(cpfAdmin);

        try {
            const adminAdded = await db.Usuarios.findOne({
                where: {cpf: cpfAdmin},
                attributes: ['idUsuario']
            });

            if(adminAdded == null) {
                
                return res.status(404).render('error', {title: 'Falha',
                error: {
                    status: "404: Not Found",
                    stack: "do$/loja/adicionaradministrador"
                },
                message: "Usuário Não Encontrado" });

            } else {
                
                await db.UsuarioLoja.create({
                    idLoja,
                    idUsuario: adminAdded.idUsuario
                });
    
                return res.redirect('/loja');
            };

        } catch(err) {
            console.log(err);
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" });
        }
    },

    deleteAdmin: async (req, res) => {
        const {idLoja} = req.session.loja;
        const {idUsuario} = req.params;
        try {
            await db.UsuarioLoja.destroy({
                where: {
                    [Op.and]: [ { idLoja } , { idUsuario } ]
                }
            });
            return res.redirect('/loja');
        } catch (err) {
            console.log(err);
            return res.status(400).render('error', {title: 'Falha', error: err, message: "Ih deu erro" });
        }
    },

    processarPedido: async (req, res) => {
        const {idPedido} = req.params;

        try {
            await db.StatusPedido.update(
                {dataProcess: new Date()},
                {where: {idPedido}}
            );

            let produtoBaixa = await db.Pedidos.findOne({
                where:{idPedido},
                include: {
                    model: db.Produtos
                }
            });
            // console.log(produtoBaixa);

            for await (let produto of produtoBaixa.Produtos) {
                db.Estoque.update(
                    {quantidade: Sequelize.literal(`quantidade - ${produto.PedidosProdutos.quantidade}`)},
                    {where: {idProduto: produto.idProduto}}
                )
            };

            return res.redirect('/loja');


        } catch (error) {
            console.log(error)
            return res.status(400).render('error', {title: 'Falha', error, message: "Ih deu erro" })
        };
    },
    
    transportarPedido: async (req, res) => {
        const {idPedido} = req.params;

        try {
            await db.StatusPedido.update(
                {dataTransp: new Date()},
                {where: {idPedido}}
            );
            return res.redirect('/loja');

        } catch (error) {
            console.log(error)
            return res.status(400).render('error', {title: 'Falha', error, message: "Ih deu erro" })
        };
    },
    
    confirmarEntrega: async (req, res) => {
        const {idPedido} = req.params;

        try {
            await db.StatusPedido.update(
                {dataEntrega: new Date()},
                {where: {idPedido}}
            );
            return res.redirect('/loja');

        } catch (error) {
            console.log(error)
            return res.status(400).render('error', {title: 'Falha', error, message: "Ih deu erro" })
        };
    }
};