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
        
        const uniqueSuffix = date + hour;
        
        let qtd = req.files.length;

        cb(null, `${uniqueSuffix}-${nomeproduto.replace(/ /gi,"-").toLowerCase()}-${qtd}.jpg`);
        // cb(null, `${uniqueSuffix}-${file.fieldname}.jpg`);
    }
  });
  
  const uploadFotoProduto = multer({ storage: storageFotoProduto });
  
  module.exports = uploadFotoProduto;