const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:Sudu@1308@localhost:3306/database');  // Your DB connection

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publishedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  tableName: 'books', // Table name in the database
});

module.exports = Book;
