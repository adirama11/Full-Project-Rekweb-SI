const { User } = require("../../../models");
const Validator= require('fastest-validator');
const jwt = require('jsonwebtoken');
const v = new Validator ();
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    try {
        const schema = {
        email : "string | empty:false",
        pass  : "string | min:6",
    };

    const validate = v.validate(req.body, schema);

    if (validate.length){
        return res.status(400).json({
            status: "error",
            message: validate,
        });
    }

    const user = await User.findOne({
        where:{email: req.body.email}
    });

    if (!user){
        return res.status(404).json({
            status: 'error',
            message: 'User not found'
        });
    }
    const validPassword = await bcrypt.compare(req.body.pass, user.pass);

    if (!validPassword){
        return res.status(400).json({
            status: 'error',
            message: 'Password failed'
        });
    }

    const idUser = user.id;
    const name = user.name;
    const profesi = user.profession;
    const role = user.role;
    const email = user.email;


    const accesToken = jwt.sign({idUser, name, profesi, role, email }, process.env.ACCES_TOKEN_SECRET, {
        expiresIn : '360s'
    });

    const refreshToken = jwt.sign({idUser, name, profesi, role, email}, process.env.REFRESH_ACCES_TOKEN_SECRET, {
        expiresIn: '1d'
    });

    await User.update({token : refreshToken},{
        where: {
            id : idUser
        } });
    res.cookie('refresh token', refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });

    return res.status(200).json({
        status : 'OK!',
        message: accesToken
    })
    }catch(error){
        console.log(error);
    }

    
    // return res.status(200).json({
    //     status: "succes",
    //     message: {
    //         id: user.id,
    //         name: user.name,
    //         email: user.email,
    //         role: user.role,
    //         avatar: user.avatar,
    //         profession: user.profession
    //     }
    // });
    
}