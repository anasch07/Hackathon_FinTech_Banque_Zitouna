'use strict';

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    id:{type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
    date:{
      type:DataTypes.STRING,
      allowNull:false,
    } ,
    type: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    montant:{
      type:DataTypes.STRING,
      allowNull:true,
    }
  }, {});
  Transaction.associate = function(models) {
  Transaction.belongsTo(models.Account);
  };
  return Transaction;
};