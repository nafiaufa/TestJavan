"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("AnggotaKeluargas", [
      {
        nama_anggota: "Budi",
        id_keluarga_kecil: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_anggota: "Hari",
        id_keluarga_kecil: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_anggota: "Siti",
        id_keluarga_kecil: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_anggota: "Nida",
        id_keluarga_kecil: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_anggota: "Bila",
        id_keluarga_kecil: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_anggota: "Lesti",
        id_keluarga_kecil: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_anggota: "Andi",
        id_keluarga_kecil: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_anggota: "Diki",
        id_keluarga_kecil: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_anggota: "Sigit",
        id_keluarga_kecil: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_anggota: "Doni",
        id_keluarga_kecil: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_anggota: "Toni",
        id_keluarga_kecil: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("AnggotaKeluargas", null, {});
  },
};
