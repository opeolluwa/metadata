const { DataTypes, Model } = require('sequelize');
import { sequelize } from "../config/database.config"


export class User extends Model {
  /*   toJSON() {
        //dont return the password and id when returning the user object
        // return { ...this.get(), password: undefined, id: undefined };
    }; */

}
User.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        unique: true
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
    security_answer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    privacy_policy_agreement: {
        type: DataTypes.BOOLEAN,
        allowNull: false

    }

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: "user_information",
    /* defaultScope: {
        attributes: { exclude: ['password'] },
    } */
});
