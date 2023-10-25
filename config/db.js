import Sequelize from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DB_HOST)

const db = new Sequelize("agenciaviajes", process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    definne: {
        timestamps: false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false,
    createdAt: false,
    updatedAt: false,
    define:{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    },
});

export default db;