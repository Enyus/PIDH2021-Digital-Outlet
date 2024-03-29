const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bcrypt = require('bcrypt');
const { calcularPrecoPrazo } = require('correios-brasil');
const { produto } = require('./IndexController');

module.exports = {
    index: async (req, res) => {
        let carrinho = req.session.carrinho;

        const listaIDs = [];
        carrinho.produtos.forEach(element => { listaIDs.push(element.idProduto) });
        let carrinhoDB = [];

        try {
            if (carrinho.produtos.length > 0) {
                carrinhoDB = await db.Produtos.findAll({
                    where: {
                        idProduto: {
                            [Op.in]: listaIDs
                        }
                    },
                    attributes: ['idProduto', 'nomeProduto', 'idLoja', 'preco', 'promocao'],
                    include: [
                        {
                            model: db.Fotos,
                            attributes: ['urlFoto']
                        },
                        {
                            model: db.DescTec,
                            attributes: ['nomeDescTec', 'valor']
                        }
                    ],
                    order: Sequelize.literal(`FIELD(Produtos.idProduto, ${listaIDs})`)
                });
                res.render('carrinho-sacola', { title: "Sacola", carrinho, carrinhoDB });
            } else {
                res.render('carrinho-sacola', { title: "Sacola", carrinho, carrinhoDB });
            }
        } catch (error) {
            console.log(error);
            return res.status(400).render('error', { title: 'Falha', error, message: "Ih deu erro" });
        };
    },

    addCart: (req, res, next) => {
        const { idProduto, source, frete } = req.body
        let index = req.session.carrinho.produtos.findIndex(element => element.idProduto == idProduto)
        if (index == -1) {
            req.session.carrinho.produtos.push(
                {
                    idProduto: idProduto,
                    quantidade: 1,
                    frete: frete
                }
            );
        } else {
            req.session.carrinho.produtos[index].quantidade += 1;
        };
        res.redirect(`${source}`);
    },

    removeCart: (req, res, next) => {
        const { idProduto, source } = req.body
        let index = req.session.carrinho.produtos.findIndex(element => element.idProduto == idProduto);

        if (req.session.carrinho.produtos[index].quantidade > 1) {
            req.session.carrinho.produtos[index].quantidade -= 1;
        } else {
            req.session.carrinho.produtos.splice(index, 1);
        };
        res.redirect(`${source}`);
    },

    removeCartItem: (req, res, next) => {
        const { idProduto, source } = req.body
        let index = req.session.carrinho.produtos.findIndex(element => element.idProduto == idProduto);
        req.session.carrinho.produtos.splice(index, 1);
        res.redirect(`${source}`);
    },

    comprar: (req, res, next) => {
        const { idProduto, frete } = req.body
        let index = req.session.carrinho.produtos.findIndex(element => element.idProduto == idProduto)
        if (index == -1) {
            req.session.carrinho.produtos.push(
                {
                    idProduto: idProduto,
                    quantidade: 1,
                    frete: frete
                }
            );
        } else {
            req.session.carrinho.produtos[index].quantidade += 1;
        };
        res.redirect(`/carrinho`);
    },

    identicacao: async (req, res, next) => {
        let carrinho = req.session.carrinho;

        const listaIDs = [];
        carrinho.produtos.forEach(element => { listaIDs.push(element.idProduto) });
        let carrinhoDB = [];

        try {
            carrinhoDB = await db.Produtos.findAll({
                where: {
                    idProduto: {
                        [Op.in]: listaIDs
                    }
                },
                attributes: ['idProduto', 'nomeProduto', 'idLoja', 'preco', 'promocao'],
                include: [
                    {
                        model: db.Fotos,
                        attributes: ['urlFoto']
                    },
                    {
                        model: db.DescTec,
                        attributes: ['nomeDescTec', 'valor']
                    }
                ],
                order: Sequelize.literal(`FIELD(Produtos.idProduto, ${listaIDs})`)
            });
            res.render('carrinho-identificacao', { title: "Identificação", carrinho, carrinhoDB });
        } catch (error) {
            console.log(error);
            return res.status(400).render('error', { title: 'Falha', error, message: "Ih deu erro" });
        };
    },

    entrega: async (req, res, next) => {
        usuario = req.session.usuario;
        dadosPreenchidos = req.body;
        req.session.carrinho.destinatario = {
            email: dadosPreenchidos.email,
            nome: dadosPreenchidos.nome,
            sobrenome: dadosPreenchidos.sobrenome,
            cpf: dadosPreenchidos.cpf
        };

        let carrinho = req.session.carrinho;
        const listaIDs = [];
        carrinho.produtos.forEach(element => { listaIDs.push(element.idProduto) });
        let carrinhoDB = [];

        try {
            carrinhoDB = await db.Produtos.findAll({
                where: {
                    idProduto: {
                        [Op.in]: listaIDs
                    }
                },
                attributes: ['idProduto', 'nomeProduto', 'idLoja', 'preco', 'promocao'],
                include: [
                    {
                        model: db.Fotos,
                        attributes: ['urlFoto']
                    },
                    {
                        model: db.DescTec,
                        attributes: ['nomeDescTec', 'valor']
                    }
                ],
                order: Sequelize.literal(`FIELD(Produtos.idProduto, ${listaIDs})`)
            });

            usuarioDB = await db.Usuarios.findOne({
                where: { email: dadosPreenchidos.email },
                include: { model: db.Enderecos }
            });

            res.render('carrinho-entrega', { title: "Entrega", carrinhoDB, usuarioDB })

        } catch {
            console.log(error);
            return res.status(400).render('error', { title: 'Falha', error, message: "Ih deu erro" });
        }
    },

    pagamento: async (req, res, next) => {
        const { cep, logradouro, numero, complemento, cidade, estado, modalidadeEntrega } = req.body;
        req.session.carrinho.entrega = {
            cep,
            logradouro,
            numero,
            complemento,
            cidade,
            estado,
            modalidadeEntrega
        };

        let carrinho = req.session.carrinho;

        const listaIDs = [];
        carrinho.produtos.forEach(element => { listaIDs.push(element.idProduto) });
        let carrinhoDB = [];

        switch (modalidadeEntrega) {
            case 'expressa':
                codigoModalidadeEntrega = '04014';
                break;
            case 'padrao':
                codigoModalidadeEntrega = '04510';
                break;
            case 'retirar':
                codigoModalidadeEntrega = '0';
                break;
            default:
                codigoModalidadeEntrega = '04510';
                break;
        }

        try {
            carrinhoDB = await db.Produtos.findAll({
                where: {
                    idProduto: {
                        [Op.in]: listaIDs
                    }
                },
                attributes: ['idProduto', 'nomeProduto', 'idLoja', 'preco', 'promocao'],
                include: [
                    {
                        model: db.Fotos,
                        attributes: ['urlFoto']
                    },
                    {
                        model: db.DescTec,
                        attributes: ['nomeDescTec', 'valor']
                    },
                    {
                        model: db.Lojas,
                        attributes: ['cep']
                    }
                ],
                order: Sequelize.literal(`FIELD(Produtos.idProduto, ${listaIDs})`)
            });
            for await (item of carrinhoDB) {
                if (codigoModalidadeEntrega != 0) {
                    let args = {
                        sCepOrigem: item.Loja.cep,
                        sCepDestino: cep,
                        nVlPeso: '1',
                        nCdFormato: '1',
                        nVlComprimento: '20',
                        nVlAltura: '20',
                        nVlLargura: '20',
                        nCdServico: [codigoModalidadeEntrega],
                        nVlDiametro: '0',
                    };
                    let response = await calcularPrecoPrazo(args);
                    req.session.carrinho.produtos[req.session.carrinho.produtos.findIndex(element => element.idProduto == item.idProduto)].frete = parseFloat(response[0].Valor.replace(',', '.'))
                } else {
                    req.session.carrinho.produtos[req.session.carrinho.produtos.findIndex(element => element.idProduto == item.idProduto)].frete = 0
                }
            }
            res.render('carrinho-pagamento', { title: "Pagamento", carrinhoDB, carrinho })
        } catch {
            console.log(error);
            return res.status(400).render('error', { title: 'Falha', error, message: "Ih deu erro" });
        }
    },

    finalizarPedido: async (req, res) => {
        const { formapagamento, numerocartao, parcelamento, nomecartao, validadecartao, anovalidade, codseguranca, cpftitularcartao } = req.body;

        let carrinho = req.session.carrinho;

        const listaIDs = [];
        carrinho.produtos.forEach(element => { listaIDs.push(element.idProduto) });
        let carrinhoDB = [];

        mensagem = {
            destinatario: carrinho.destinatario.nome + ' ' + carrinho.destinatario.sobrenome,
            enderecoEntrega: carrinho.entrega.logradouro + ', número ' + carrinho.entrega.numero + ', ' + carrinho.entrega.complemento + ', ' + carrinho.entrega.cidade + '/' + carrinho.entrega.estado + ', CEP ' + carrinho.entrega.cep
        };

        try {
            carrinhoDB = await db.Produtos.findAll({
                where: {
                    idProduto: {
                        [Op.in]: listaIDs
                    }
                },
                attributes: ['idProduto', 'idLoja', 'preco', 'promocao'],
                order: Sequelize.literal(`FIELD(Produtos.idProduto, ${listaIDs})`)
            });

            buscarUsuario = await db.Usuarios.findOne({ where: { email: carrinho.destinatario.email } });

            // Criando um usuário temporário para criar o pedido na tabela de pedidos:
            if (buscarUsuario == null) {
                const senha = `${carrinho.destinatario.nome}123`
                const hash = bcrypt.hashSync(senha, 10);
                usuarioTemp = await db.Usuarios.create(
                    {
                        email: carrinho.destinatario.email,
                        nome: carrinho.destinatario.nome,
                        sobrenome: carrinho.destinatario.sobrenome,
                        dataNasc: new Date(2000, 0, 1),
                        cpf: carrinho.destinatario.cpf,
                        senha: hash
                    }
                );

                idUsuario = usuarioTemp.idUsuario;
                enderecoTemp = await db.Enderecos.create({
                    idUsuario,
                    logradouro: carrinho.entrega.logradouro,
                    numero: carrinho.entrega.numero,
                    complemento: carrinho.entrega.complemento,
                    cidade: carrinho.entrega.cidade,
                    estado: carrinho.entrega.estado,
                    cep: carrinho.entrega.cep,
                });

                mensagem.novoUsuario = 1;
                mensagem.email = carrinho.destinatario.email;
                mensagem.senha = senha;

            } else {
                idUsuario = buscarUsuario.idUsuario;
                enderecoDB = db.Enderecos.findOne({
                    where: {
                        [Op.and]: {
                            idUsuario,
                            cep: carrinho.entrega.cep //se necessário colocar mais coisas aqui
                        }
                    }
                });

                if (enderecoDB == null) {
                    await db.Enderecos.create({
                        idUsuario,
                        logradouro: carrinho.entrega.logradouro,
                        numero: carrinho.entrega.numero,
                        complemento: carrinho.entrega.complemento,
                        cidade: carrinho.entrega.cidade,
                        estado: carrinho.entrega.estado,
                        cep: carrinho.entrega.cep,
                    });
                }
                mensagem.novoUsuario = 0;
            };

            // Criando o pedido no banco de dados:
            let listaLojas = [];
            carrinhoDB.forEach(produto => {
                if (!listaLojas.includes(produto.idLoja)) {
                    listaLojas.push(produto.idLoja);
                }
            })

            let totalPedido = []
            listaLojas.forEach(loja => {
                carrinhoDB.forEach(produto => {
                    if (produto.idLoja == loja) {
                        if (totalPedido[loja] == undefined) {
                            totalPedido[loja] = (produto.preco * (100 - produto.promocao) / 100) + parseFloat(carrinho.produtos[carrinho.produtos.findIndex(element => element.idProduto == produto.idProduto)].frete);
                        } else {
                            totalPedido[loja] += (produto.preco * (100 - produto.promocao) / 100) + parseFloat(carrinho.produtos[carrinho.produtos.findIndex(element => element.idProduto == produto.idProduto)].frete);
                        }
                    }
                })
            })

            let pedidosCriados = []

            for await (let loja of listaLojas) {
                pedidosCriados[loja] = await db.Pedidos.create(
                    {
                        idUsuario,
                        idLoja: loja,
                        dataPedido: new Date(),
                        valor: totalPedido[loja]
                    });

                await db.StatusPedido.create({
                    idPedido: pedidosCriados[loja].idPedido
                })

                for await (let produto of carrinho.produtos) {
                    if (carrinhoDB[carrinhoDB.findIndex(element => element.idProduto == produto.idProduto)].idProduto == produto.idProduto &&
                        carrinhoDB[carrinhoDB.findIndex(element => element.idProduto == produto.idProduto)].idLoja == loja) {
                        await db.PedidosProdutos.create({
                            idProduto: produto.idProduto,
                            idPedido: pedidosCriados[loja].idPedido,
                            quantidade: produto.quantidade,
                            preco: carrinhoDB[carrinhoDB.findIndex(element => element.idProduto == produto.idProduto)].preco,
                            desconto: carrinhoDB[carrinhoDB.findIndex(element => element.idProduto == produto.idProduto)].promocao,
                            frete: produto.frete
                        })
                    }
                }
            }
            req.session.carrinho = undefined;

            return res.render('checkout', { title: 'Checkout', mensagem });

        } catch (error) {
            console.log(error);
            return res.status(400).render('error', { title: 'Falha', error, message: "Ih deu erro" });
        };
    },

    previsaoFrete: async (req, res, next) => {
        let { cep } = req.body;
        let carrinho = req.session.carrinho;

        const listaIDs = [];
        carrinho.produtos.forEach(element => { listaIDs.push(element.idProduto) });
        let carrinhoDB = [];

        try {
            carrinhoDB = await db.Produtos.findAll({
                where: {
                    idProduto: {
                        [Op.in]: listaIDs
                    }
                },
                attributes: ['idProduto', 'idLoja', 'preco', 'promocao'],
                include: { model: db.Lojas },
                order: Sequelize.literal(`FIELD(Produtos.idProduto, ${listaIDs})`)
            });

            for await (item of carrinhoDB) {
                let args = {
                    sCepOrigem: item.Loja.cep,
                    sCepDestino: cep,
                    nVlPeso: '1',
                    nCdFormato: '1',
                    nVlComprimento: '20',
                    nVlAltura: '20',
                    nVlLargura: '20',
                    nCdServico: ['04510'],
                    nVlDiametro: '0',
                };
                let response = await calcularPrecoPrazo(args);
                req.session.carrinho.produtos[req.session.carrinho.produtos.findIndex(element => element.idProduto == item.idProduto)].frete = parseFloat(response[0].Valor.replace(',', '.'))
            }

            return res.redirect(`/carrinho`);

        } catch (error) {

            console.log(error);
            return res.status(400).render('error', { title: 'Falha', error, message: "Ih deu erro" });

        }
    }
}