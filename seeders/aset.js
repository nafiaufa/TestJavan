"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Asets", [
      {
        nama_aset: "Samsung Universe 9",
        id_anggota: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "Samsung Galaxy Book",
        id_anggota: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "Samsung Galaxy Book",
        id_anggota: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "iPhone 9",
        id_anggota: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "iPhone X",
        id_anggota: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "Huawei P30",
        id_anggota: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "Samsung Universe 9",
        id_anggota: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "Huawei P30",
        id_anggota: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "iphone X",
        id_anggota: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "Samsung Universe 9",
        id_anggota: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "Samsung Galaxy Book",
        id_anggota: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "Huawei P30",
        id_anggota: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "iPhone X",
        id_anggota: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_aset: "",
        id_anggota: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Asets", null, {});
  },
};
