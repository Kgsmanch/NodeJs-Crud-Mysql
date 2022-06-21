const { Sequelize, DataTypes } = require ('sequelize');
const db = require ('./db');

const Produtos = db.define ('produtos', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate:{
            isFloat: true,
        },

    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.export = Produtos;