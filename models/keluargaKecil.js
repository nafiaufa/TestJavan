module.exports = (sequelize, type) => {
  return sequelize.define("KeluargaKecil", {
    id_keluarga_kecil: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_keluarga_kecil: type.STRING,
    id_keluarga_besar: type.INTEGER,
  });
};
