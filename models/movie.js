'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Title cannot be empty/null" } }
    },
    releaseDate: DataTypes.INTEGER,
    animated: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};