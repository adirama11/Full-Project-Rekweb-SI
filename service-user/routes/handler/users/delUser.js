const { User } = require("../../../models");

module.exports = async (req, res) => {
    const id = req.params.id;

    const user = await User.findByPk(id, {
        attributes :['id', 'name', 'role', 'profession', 'avatar']
    });

    if (!user){
        return res.status(200).json({
            status: 'error',
            message: 'User tidak ditemukan',
        })
    } else{
        await user.destroy();
    }

    const sqlOptions = {
        attributes: ['id', 'name', 'role', 'profession', 'avatar']
    } 
    
    const users = await User.findAll(sqlOptions);

    return res.json({
        status: 'succes',
        data: users
    });
}