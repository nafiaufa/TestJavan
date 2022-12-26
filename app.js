const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Konfigurasi body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import semua controller
const assetController = require('./controllers/assetController');

// Menentukan route untuk setiap fungsi yang ada di controller
app.post('/addPerson', assetController.addPerson);
app.put('/editPerson/:id_anggota', assetController.editPerson);
app.delete('/deletePerson/:id_anggota', assetController.deletePerson);
app.post('/addAsset', assetController.addAsset);
app.put('/editAsset/:id_aset', assetController.editAsset);
app.delete('/deleteAsset/:id_aset', assetController.deleteAsset);
app.post('/addAssetToPerson', assetController.addAssetToPerson);
app.delete('/removeAssetFromPerson/:id_aset', assetController.removeAssetFromPerson);
app.get('/getTotalAssetValuePerPerson/:id_keluarga_kecil', assetController.getTotalAssetValuePerPerson);

// Menentukan port yang akan digunakan oleh aplikasi
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});