const jwt = require('jsonwebtoken')
const { User } = require('../../../models/User')

module.exports = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken){
            return res.status(400).json({
                status : 'error in refreshToken',
                message : 'Token error'
            });
        }

        //FROM REFERENCE
        // const user = await User.findOne({
        //     where : { token : refreshToken }
        // });

        const user = await User.findAll({
            where : { token : refreshToken }
        });

        if(!user[0]){
            return res.status(404).json({
                status : 'error in refreshToken',
                message: 'User not found'
            });
        }
        //FROM REFERENCE
        // const { id, name, profession, avatar, role, email, pass } = user;

        await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async(err, decoded) => {
            if(err){
                return res.status(400).json({
                    status : 'error',
                    message: 'Token failed'
                });
            }
            const idUser = user[0].id;
            const name = user[0].name;
            const profesi = user[0].profession;
            const role = user[0].role;
            const email = user[0].email;
            const accesToken = await jwt.sign({ idUser, name, profesi, avatar, role, email},
                process.env.ACCES_TOKEN_SECRET,{
                    expiresIn: '1h'
                });
            res.json({accesToken})
        })
    }catch (error) {
		console.log(error)
	}
}