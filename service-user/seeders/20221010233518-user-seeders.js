'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',[
      {
        name: 'Suyud',
        profession: 'Administrator',
        role: 'admin',
        email: 'ohyud@gmail.com',
        pass: await bcrypt.hash('rahasia1234', 10),
        created_ad: new Date()
      },
      {
        name: 'Widodo',
        profession: 'Operator',
        role: 'opeartor',
        email: 'widodo@gmail.com',
        pass: await bcrypt.hash('rahasia1235', 10),
        created_ad: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
