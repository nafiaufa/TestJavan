const Sequelize = require("sequelize");
const mysql2 = require("mysql2");
// Konfigurasi database
const sequelize = new Sequelize("ec-nafi-javan", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectModule: mysql2
});


// Import semua model
const KeluargaBesar = require("./keluargaBesar")(sequelize, Sequelize);
const KeluargaKecil = require("./keluargaKecil")(sequelize, Sequelize);
const AnggotaKeluarga = require("./anggotaKeluarga")(sequelize, Sequelize);
const Aset = require("./aset")(sequelize, Sequelize);


// Memastikan semua model terkoneksi dengan database
sequelize.sync().then(() => {
  console.log("Database & tables created!");
});

module.exports = {
  KeluargaBesar,
  KeluargaKecil,
  AnggotaKeluarga,
  Aset,
};
