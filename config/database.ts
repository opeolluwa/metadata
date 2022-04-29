const { Sequelize } = require('sequelize');
export const databaseConnection = new Sequelize({
    dialect: 'sqlite',
    storage: './../database/meta-data.sqlite'
});

async function testDatabaseConnection() {
    try {
        await databaseConnection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testDatabaseConnection()