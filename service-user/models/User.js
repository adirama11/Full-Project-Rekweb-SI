module.exports=(sequelize, DataTypes) => {
    const User = sequelize.define("User",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          name:{
            type: DataTypes.STRING,
            allowNull: false
          },
          profession:{
            type: DataTypes.STRING,
            allowNull: true
          },
          avatar:{
            type: DataTypes.STRING,
            allowNull: true
          },
          role:{
            type: DataTypes.ENUM,
            values:['admin', 'operator'],
            defaultValue: 'operator',
            allowNull: false
          },
          email:{
            type: DataTypes.STRING,
            allowNull: true,
            unique : true
          },
          pass:{
            type: DataTypes.STRING,
            allowNull: true
          },
          createdAt:{
            field: "created_ad",
            type: DataTypes.DATE
          },
          updatedAt:{
            field: "updated_ad",
            type: DataTypes.DATE,
            allowNull: true
          },
    },
    {
        tableName: "users"
    });
    return User;
};
