const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
import { sequelize } from "../config/database.config"

export class Resource extends Model { }
Resource.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    resource_url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date_added: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    // Other model options go 
    modelName: "Resource",
    sequelize, // We need to pass the connection instance
    tableName: 'resource_information' // We need to choose the model name
});

// the defined model is the class itself
console.log(Resource === sequelize.models.Resource); // true
