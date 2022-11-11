module.exports = (sequelize, DataType) =>{
    const RefreshToken = sequelize.define("RefreshToken",
    {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          token:{
            type: DataType.TEXT,
            allowNull: false
          },
          user_id:{
            type:DataType.INTEGER,
            allowNull: false
          },
          createdAt:{
            field: "created_ad",
            type: DataType.DATE
          },
          updatedAt:{
            field: "upated_ad",
            type: DataType.DATE,
            allowNull: true
          }
    },
    {
        tableName: "refresh_token",
        timestamps: true
    });
    return RefreshToken;
};