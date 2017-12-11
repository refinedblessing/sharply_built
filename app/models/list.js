'use strict';
module.exports = (sequelize, DataTypes) => {
  var List = sequelize.define('List', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  List.associate = function(models) {
    List.hasMany(models.Task, {as: 'Items'});
  }
  return List;
};