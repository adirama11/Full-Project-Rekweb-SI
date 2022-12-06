const {User} = require('../../../models');

module.exports = async (req, res, next) => {

   
    const users = await User.findAll({
        attributes: ['id', 'name', 'role', 'profession', 'avatar', 'token']
    });

    return  res.status(200).json({
        status: 'success',
        data: users
    });
}