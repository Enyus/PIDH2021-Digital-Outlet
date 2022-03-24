const multer = require('multer');
const path = require('path');

const storageFotoPerfil = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/profilepics'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '.jpg'
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  });
  
  const uploadFotoPerfil = multer({ storage: storageFotoPerfil });

  module.exports = uploadFotoPerfil;