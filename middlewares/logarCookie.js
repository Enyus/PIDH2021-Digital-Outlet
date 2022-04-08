const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcrypt');

const logarCookie = async (req, res, next) => {
    console.log(req.cookies.idUsuario);
    idCookie = req.cookies.idUsuario;
    console.log(idCookie);
    if (idCookie != null && idCookie != 'undefined' && req.session.usuario == undefined) {
        const user = await db.Usuarios.findByPk(idCookie);
        req.session.usuario = {
            idUsuario: user.idUsuario,
            email: user.email,
            nome: user.nome,
            sobrenome: user.sobrenome,
            dataNasc: user.dataNasc.toISOString().slice(0,10),
            cpf: user.cpf,
            fotoPerfil: user.fotoPerfil,
            buscasRecentes: []
        };
    };
    idCookieLoja = req.cookies.idLoja;
    if (idCookieLoja != null && idCookieLoja != 'null' && idCookieLoja != 'undefined' && req.session.loja == undefined) {
        const loja = await db.Lojas.findByPk(idCookieLoja);
        // console.log(idCookieLoja);
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
            fotoPerfil: loja.fotoPerfil,
        };
    };
    next();
};

module.exports = logarCookie;