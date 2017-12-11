'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.List,
      {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      }
    );
  }
  return Task;
};