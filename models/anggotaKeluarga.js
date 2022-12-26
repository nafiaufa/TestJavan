module.exports = (sequelize, type) => {
  return sequelize.define("AnggotaKeluarga", {
    id_anggota: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_anggota: type.STRING,
    id_keluarga_kecil: type.INTEGER,
  });
};
