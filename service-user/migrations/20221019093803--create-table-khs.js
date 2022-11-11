'use strict';

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.createTable('khs', {
      id_mk: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nama_mk:{
        type: Sequelize.STRING,
        allowNull: false
      },
      npm:{
        type:Sequelize.INTEGER,
        allowNull: false
      },
      tahun_ajaran:{
        type: Sequelize.STRING,
        allowNull: true
      },
      semester:{
        type: Sequelize.STRING,
        allowNull: true
      },
      jadwal:{
        type: Sequelize.STRING,
        allowNull: true
      },
    });
    await queryInterface.addConstraint('khs',{
      type: 'unique',
      fields: ['npm'],
      name: 'UNIQUE_NPM'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('khs');
  }
};

