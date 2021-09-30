module.exports = {
    index: (req, res) => res.render('paginacliente', {title:"Bem-Vindo!"}),
    login: (req, res) => res.render('login', {title:"Bem-Vindo!"}),
    cadastro: (req, res) => res.render('cadastrousuario', {title:"Seja nosso Cliente!"})
}