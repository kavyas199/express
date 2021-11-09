var express = require('express');
var router = express.Router();
const sequelize = new Sequelize('employeesschema', 'root', 'K@vya@123', {
    host: 'localhost',
    dialect: 'mysql' 
  });
  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
