const sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');
const db = require ('./db');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        validate:{
            min: 12,
            max: 120,
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        allowNull: false,
    },
})

// User.sync();
module.export = User;