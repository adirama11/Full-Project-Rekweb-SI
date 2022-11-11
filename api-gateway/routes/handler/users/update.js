const apiAdapter = require("../../apiAdapter");
const {URL_SERVICE_USER} = process.env;
const api = apiAdapter(URL_SERVICE_USER);

module.exports = async(req, res) => {
    try{
        const id = req.params.id;
        const user = await api.put(`/users/update/${id}`, req.body);
        return res.json(user.data);
    } catch(err){
        if (err.code == 'ECONMREFUSHED'){
            return res.status(500).json({
                status : 'error',
                message: 'service unvailable'
            })
        }

        console.log(err);
        return res.status(404).json(err);
    }
};

