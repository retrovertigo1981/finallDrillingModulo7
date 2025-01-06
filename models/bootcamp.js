'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {
        through: models.UserBootcamp,
        foreignKey: 'bootcamp_id',
        otherKey: 'user_id',
      });
    }
  }

  Bootcamp.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 5,
          max: 10,
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Bootcamp',
      tableName: 'bootcamps',
    }
  );

  return Bootcamp;
};
