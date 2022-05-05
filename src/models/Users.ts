const { DataTypes, Model } = require('sequelize');
import { sequelize } from "../config/database.config"


export class User extends Model { }
User.init({
    // Model attributes are defined here
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    // Model attributes are defined here
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    security_question: {
        type: DataTypes.STRING,
        allowNUll: false
    },
    sequrity_question_answer: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: "user_information",
    defaultScope: {
        attributes: { exclude: ['password'] },
    }
});
