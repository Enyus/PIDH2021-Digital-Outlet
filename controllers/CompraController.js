module.exports = {
    index: (req, res, next) => {
        res.render('carrinho-sacola', {title: "Sacola" });
    },
    identificacao: (req, res, next) => {
        res.render('carrinho-identificacao', {title: "Identificacao" })
    },
    entrega: (req, res, next) => {
        res.render('carrinho-entrega', {title: "Entrega" })
    },
    pagamento: (req, res, next) => {
        res.render('carrinho-pagamento', {title: "Pagamento" })
    },

    addCart: (req, res, next) => {
        const {idProduto} = req.body

        let index = req.session.carrinho.findIndex( element => element.idProduto == idProduto)

        if ( index == -1) {
            req.session.carrinho.push(
                {
                  idProduto: idProduto,
                  quantidade: 1,
                  frete: 0 //ainda precisa implementar
                }
            );
        } else {
            req.session.carrinho[index].quantidade += 1;
        };
        
        res.redirect(`/produto/${idProduto}`);
    },

    comprar: (req, res, next) => {
        const {idProduto} = req.body

        let index = req.session.carrinho.findIndex( element => element.idProduto == idProduto)

        if ( index == -1) {
            req.session.carrinho.push(
                {
                  idProduto: idProduto,
                  quantidade: 1,
                  frete: 0 //ainda precisa implementar
                }
            );
        } else {
            req.session.carrinho[index].quantidade += 1;
        };

        res.redirect(`/carrinho`);
    },
}