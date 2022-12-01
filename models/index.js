const Newexpense = require('./Newexpense');
const User = require('./User');

User.hasMany(Newexpense, {
    foreignKey: 'user_id'
});

Newexpense.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
});

module.exports = {Newexpense, User};
