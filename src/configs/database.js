const {Sequelize} = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('cf', 'root', '2805', {
    dialect: 'mysql',
});

(async ()=>{
    try {
        await sequelize.authenticate();
        console.log(`Connect successfully!`);
    } catch (error) {
        console.log(`Disconnect database`, error);
    }
})();

module.exports = sequelize;

