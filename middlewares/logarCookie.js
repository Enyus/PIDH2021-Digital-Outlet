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
    next();
};

module.exports = logarCookie;