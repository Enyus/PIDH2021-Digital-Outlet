const multer = require('multer');
const path = require('path');

const storageFotoProduto = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../public/images'))
    },
    filename: function (req, file, cb) {
        const { nomeproduto } = req.body;

        const date = new Date(Date.now()).toISOString().slice("",10).replace(/-/gi,"");
        const hour = new Date(Date.now()).toLocaleTimeString().replace(/:/gi,"");
        
        const qtd = req.files.length;
        
        const uniqueSuffix = date + hour;
        const extension = file.mimetype.slice(6);
        cb(null, `${uniqueSuffix}-${nomeproduto.replace(/[^0-9a-zA-Z]+/gi,"-").toLowerCase()}-${qtd}.${extension}`);
    },
  });
  
  const uploadFotoProduto = multer({ storage: storageFotoProduto });
  
  module.exports = uploadFotoProduto;