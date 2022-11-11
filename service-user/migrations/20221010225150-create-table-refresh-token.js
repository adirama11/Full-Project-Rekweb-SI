'use strict';

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.createTable("refresh_token", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      token:{
        type: Sequelize.TEXT,
        allowNull: false
      },
      user_id:{
        type:Sequelize.INTEGER,
        allowNull: false
      },
      created_ad:{
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      updated_ad:{
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        allowNull: true
      },
    });
    await queryInterface.addConstraint('refresh_token',{
      type: 'foreign key',
      name: 'REFRESH_TOKEN_USERS_ID',
      fields: ['user_id'],
      references: {
        table: 'users',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("refresh_token");
  }
};
