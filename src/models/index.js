const User = require('./User');
const Role = require('./Role');
const User_Role = require('./User_role');


// Thiết lập quan hệ Many-to-Many giữa User và Role
User.belongsToMany(Role, { through: "User_Role", foreignKey: "user_id" });
Role.belongsToMany(User, { through: "User_Role", foreignKey: "role_id" });
// Role.belongsToMany(User, { through: "User_Role", foreignKey: "role_id" });


module.exports = { User, Role, User_Role };
