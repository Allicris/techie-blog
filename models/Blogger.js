const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogger extends Model { }

Blogger.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      }
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Blogs',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    freezeTableName: true,
    undserscored: true,
    modelName: 'Blogger'
  }
);

module.exports = Blogger;