const { DataTypes } = require("sequelize");
const { sequelize } = require('../../database/index.js');

const Rating = sequelize.define(
  "rating",
  {
    rating: {
      type: DataTypes.DECIMAL(2, 1), 
      allowNull: false, 
      validate: {
        min: 0,
        max: 10, 
    },
  },
},
  {
    timestamps: false, 
  }
);

module.exports = Rating;
