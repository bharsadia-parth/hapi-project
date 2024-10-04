const getUser = async (req, res) => {
    try{

        return res.response({"msg": "msg"}).code(200)
    }catch(e){
        console.log(e)
    }
}

module.exports = {
    getUser
}