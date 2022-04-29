const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
import { databaseConnection } from "./../config/database"

class User extends Model { }

User.init({
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    databaseConnection, // We need to pass the connection instance
    modelName: 'user_information' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === databaseConnection.models.User); // true

export { User }