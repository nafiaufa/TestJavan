module.exports = (sequelize, type) => {
  return sequelize.define("Aset", {
    id_aset: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_aset: type.STRING,
    id_anggota: type.INTEGER,
  });
};
