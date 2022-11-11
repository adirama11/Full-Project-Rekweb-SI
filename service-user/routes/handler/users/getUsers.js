const {User} = require('../../../models');

module.exports = async (req, res, next) => {

    const userIds = req.query.user_ids || [];

    const sqlOptions = {
        attributes: ['id', 'name', 'role', 'profession', 'avatar']
    }

    if (userIds.length) {
        sqlOptions.where = {
            id: userIds
        }
    }

    const users = await User.findAll(sqlOptions);

    return  res.status(200).json({
        status: 'success',
        data: users
    });
}