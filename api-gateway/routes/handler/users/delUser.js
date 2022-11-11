const apiAdapter = require('../../apiAdapter');
const { URL_SERVICE_USER } = process.env;
const api = apiAdapter( URL_SERVICE_USER );

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await api.delete(`/users/delete/${id}`, req.body);
        return res.json(user.data);
    } catch (error){
        if (error.code == 'ECONNREFUSHED'){
            return res.status(500).json({
                status : 'error',
                message: 'Service tidak tersedia'
            })
        }

        console.log(error);
        return res.status(404).json(error);
    }
}