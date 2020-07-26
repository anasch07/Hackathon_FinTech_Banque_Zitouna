'use strict';
module.exports = (sequelize, DataTypes) => {
  const Credit = sequelize.define('Credit', {
    id:{type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
    amount:{
      type:DataTypes.STRING,
      allowNull:false,
    } ,
    nbrMonths: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    paidAmount:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    date:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    state:{
        type:DataTypes.STRING,
        allowNull:true,
      }
  }, {});
  Credit.associate = function(models) {
  Credit.belongsTo(models.Account);
  };
  return Credit;
};