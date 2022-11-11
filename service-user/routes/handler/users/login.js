const { User } = require("../../../models");
const Validator= require('fastest-validator');
const v = new Validator ();
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const schema = {
        email : "string | empty:false",
        pass  : "string | min:6",
    };

    const validate = v.validate(req.body, schema);

    if (validate.length){
        return res.status(200).json({
            status: "error",
            message: validate,
        });
    }

    const user = await User.findOne({
        where:{email: req.body.email}
    });

    if (!user){
        return res.status(200).json({
            status: 'error',
            message: 'User not found'
        });
    }
    const invalidPassword = await bcrypt.compare(req.body.pass, user.pass);

    if (!invalidPassword){
        return res.status(200).json({
            status: 'error',
            message: 'User not foundd'
        });
    }

    return res.status(200).json({
        status: "succes",
        message: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            profession: user.profession
        }
    });
    
}