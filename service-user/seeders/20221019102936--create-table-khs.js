'use strict';
// const bcrypt = require('bcrypt');
// const { Sequelize } = require("../models");

// const { Sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('khs', [{
      nama_mk: 'Rekayasa Web',
      npm: '5190411438',
      tahun_ajaran: '2019',
      semester: '3',
      jadwal: 'SENIN, 14.40',
    },
    {
      nama_mk: 'Rekayasa Web',
      npm: '5190411657',
      tahun_ajaran: '2019',
      semester: '3',
      jadwal: 'SENIN, 14.40',
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('khs', null, {});
  }
};