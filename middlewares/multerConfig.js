const multer = require('multer');
const path = require('path')

// configuração do Multer:
const storageFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/curriculos'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '.pdf'
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
});
  
const uploadFile = multer({ storage: storageFile });

module.exports = uploadFile;