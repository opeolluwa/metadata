const { DataTypes, Model } = require('sequelize');
import { sequelize } from "./../config/database"
// import sequelizeBcrypt from "sequelize-bcrypt";
// import { sequelizeJoi, Joi } from "sequelize-joi";

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
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: "user_information"
});


// sequelizeBcrypt(User, {
//     field: 'password', // secret field to hash, default: 'password'
//     rounds: 12, // used to generate bcrypt salt, default: 12
//     compare: 'authenticate', // method used to compare secrets, default: 'authenticate'
// })

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
