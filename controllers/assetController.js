// File: controllers/assetController.js

const db = require('../models');
const axios = require('axios');

// Menambahkan data orang baru ke keluarga
exports.addPerson = async (req, res) => {
  try {
    const { nama_anggota, id_keluarga_kecil } = req.body;
    const newPerson = await db.AnggotaKeluarga.create({
      nama_anggota,
      id_keluarga_kecil
    });
    return res.status(200).json({
      message: 'Successfully added new person to family',
      data: newPerson
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error adding new person to family',
      error
    });
  }
};

// Mengedit data orang dalam keluarga
exports.editPerson = async (req, res) => {
  try {
    const { nama_anggota } = req.body;
    const { id_anggota } = req.params;
    const updatedPerson = await db.AnggotaKeluarga.update(
      { nama_anggota },
      { where: { id_anggota } }
    );
    if (updatedPerson[0] === 0) {
      return res.status(404).json({
        message: 'Person not found'
      });
    }
    return res.status(200).json({
      message: 'Successfully updated person',
      data: updatedPerson
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error updating person',
      error
    });
  }
};

// Menghapus data orang dalam keluarga
exports.deletePerson = async (req, res) => {
  try {
    const { id_anggota } = req.params;
    const deletedPerson = await db.AnggotaKeluarga.destroy({
      where: { id_anggota }
    });
    if (deletedPerson === 0) {
      return res.status(404).json({
        message: 'Person not found'
      });
    }
    return res.status(200).json({
      message: 'Successfully deleted person',
      data: deletedPerson
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error deleting person',
      error
    });
  }
};

// Menambah data aset keluarga
exports.addAsset = async (req, res) => {
  try {
    const { nama_aset, id_anggota } = req.body;
    const newAsset = await db.Aset.create({
      nama_aset,
      id_anggota, harga: hargaProduct
});
return res.status(200).json({
message: 'Successfully added new asset to family',
data: newAsset
});
} catch (error) {
return res.status(500).json({
message: 'Error adding new asset to family',
error
});
}
};

// Mengedit data aset keluarga
exports.editAsset = async (req, res) => {
try {
const { nama_aset } = req.body;
const { id_aset } = req.params;
const updatedAsset = await db.Aset.update(
{ nama_aset },
{ where: { id_aset } }
);
if (updatedAsset[0] === 0) {
return res.status(404).json({
message: 'Asset not found'
});
}
return res.status(200).json({
message: 'Successfully updated asset',
data: updatedAsset
});
} catch (error) {
return res.status(500).json({
message: 'Error updating asset',
error
});
}
};

// Menghapus data aset keluarga
exports.deleteAsset = async (req, res) => {
try {
const { id_aset } = req.params;
const deletedAsset = await db.Aset.destroy({
where: { id_aset }
});
if (deletedAsset === 0) {
return res.status(404).json({
message: 'Asset not found'
});
}
return res.status(200).json({
message: 'Successfully deleted asset',
data: deletedAsset
});
} catch (error) {
return res.status(500).json({
message: 'Error deleting asset',
error
});
}
};

// Menambahkan aset yang dimiliki oleh seseorang dalam keluarga
exports.addAssetToPerson = async (req, res) => {
try {
const { nama_aset, id_anggota } = req.body;
const newAsset = await db.Aset.create({
nama_aset,
id_anggota
});
return res.status(200).json({
message: 'Successfully added new asset to person',
data: newAsset
});
} catch (error) {
return res.status(500).json({
message: 'Error adding new asset to person',
error
});
}
};

// Mengurangi asset yang dimiliki oleh seseorang dalam keluarga
exports.removeAssetFromPerson = async (req, res) => {
  try {
    const { id_aset } = req.params;
    const deletedAsset = await db.Aset.destroy({
      where: { id_aset }
    });
    if (deletedAsset === 0) {
      return res.status(404).json({
        message: 'Asset not found'
      });
    }
    return res.status(200).json({
      message: 'Successfully removed asset from person',
      data: deletedAsset
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error removing asset from person',
      error
    });
  }
};
// Menampilkan total nilai (price) aset yang dimiliki oleh masing-masing orang dalam suatu keluarga berdasarkan data harga product di api produk berikut https://dummyjson.com/docs/products
exports.getTotalAssetValuePerPerson = async (req, res) => {
try {
const { id_keluarga_kecil } = req.params;
// Menampilkan semua anggota keluarga yang terdaftar dalam keluarga kecil tertentu
const familyMembers = await db.AnggotaKeluarga.findAll({
where: { id_keluarga_kecil }
});
if (familyMembers.length === 0) {
return res.status(404).json({
message: 'No family members found in the specified family'
});
}
// Menampilkan total nilai aset yang dimiliki oleh masing-masing anggota keluarga
const totalAssetValuePerPerson = familyMembers.map(async member => {
// Menampilkan semua aset yang dimiliki oleh anggota keluarga tersebut
const assets = await db.Aset.findAll({
where: { id_anggota: member.id_anggota }
});
// Menampilkan harga produk untuk setiap aset yang dimiliki
const assetValues = assets.map(async asset => {
const { data } = await axios.get(
`https://dummyjson.com/docs/products?name=${asset.nama_aset}`
);
return data[0].price;
});
// Menjumlahkan harga produk yang dimiliki oleh anggota keluarga tersebut
const totalValue = assetValues.reduce((total, value) => total + value, 0);
return {
name: member.nama_anggota,
totalValue
};
});
return res.status(200).json({
message: 'Successfully retrieved total asset value per person',
data: totalAssetValuePerPerson
});
} catch (error) {
return res.status(500).json({
message: 'Error retrieving total asset value per person',
error
});
}
};
