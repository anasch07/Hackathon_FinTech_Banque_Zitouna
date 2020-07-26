'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id:{type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
      username:DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress:{
      type    : DataTypes.STRING,
      isUnique : {
        msg: 'this email is taken. Please choose another one'
      },
      allowNull:false,
      validate:{
          isEmail : {
            msg: "Incorrect email"
          }
      }
  },
    tel: DataTypes.STRING, 
   address: DataTypes.STRING,
    balence: DataTypes.STRING
  }, {});
  Account.associate = function(models) {
    Account.hasMany(models.Credit)
  };
  return Account;
};