module.exports = (sequelize, type) => {
  return sequelize.define("KeluargaBesar", {
    id_keluarga_besar: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_keluarga_besar: type.STRING,
  });
};