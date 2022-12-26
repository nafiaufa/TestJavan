'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("KeluargaKecils", [
      {
        nama_keluarga_kecil: "Budi",
        id_keluarga_besar: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_keluarga_kecil: "Nida",
        id_keluarga_besar: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_keluarga_kecil: "Andi",
        id_keluarga_besar: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_keluarga_kecil: "Sigit",
        id_keluarga_besar: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("KeluargaKecils", null, {});
  },
};