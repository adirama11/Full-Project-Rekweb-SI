const jwt = require('jsonwebtoken')
const { User } = require('../../../models/User')

module.exports = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken){
            return res.status(400).json({
                status : 'error in refreshToken',
                message : 'Token not found'
            });
        }

        const user = await User.findOne({
            where : { token : refreshToken }
        });

        if(!user){
            return res.status(404).json({
                status : 'error in refreshToken',
                message: 'User not found'
            });
        }

        const { id, name, profession, avatar, role, email, pass } = user;
        await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async(err, decoded) => {
            if(err){
                return res.status(400).json({
                    status : 'error',
                    message: 'Token failed'
                });
            }                
            const accesToken = await jwt.sign({ id, name, profession, avatar, role, email, pass  },
                process.env.ACCES_TOKEN_SECRET,{
                    expiresIn: '1h'
                });
            res.json({accesToken})
        })
    }catch (error) {
		console.log(error)
	}
}