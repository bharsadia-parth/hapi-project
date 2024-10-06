
const {sequelize} = require("../config/sequelize")
const { UserModel } = require("../models/user-model")

const getUser = async (req, res) => {
    try{
        if(req.params.id){
            let id = req.params.id;
            
            let data = await UserModel.findOne({
                where: {
                    id
                }
            });

            if(!data) return res.response({err: `user with id ${id} not found`}).code(400);

            return res.response({data}).code(200)
        }else{
            limit = req.query.limit ? parseInt(req.query.limit) : 10;
            offset = req.query.offset ? parseInt(req.query.offset) : 0;
            let data = await UserModel.findAll({
                limit ,
                offset,
            })
            let count = data.length;
            return res.response({count, data}).code(200)
        }
        
    }catch(e){
        return res.response({"err": e}).code(500)
    }
}

const createUser = async (req, res) => {
    try{
        if(!req.payload) {
            return res.response({"err": "payload not found"}).code(400);
        };
        let {fname, lname, mobile, email} = req.payload;
        let user = await UserModel.create({
           fname,
           lname,
           mobile,
           email
        });
        return res.response(
            {
                "msg": "user created successfully", 
                "id": user.id
            }
        ).code(200)
    }catch(e){
        console.log(e);
        return res.response({"err": e}).code(500)
    }
}

const updateUser = async (req, res) => {
    try{
        
        let id = parseInt(req.params.id);
        if(isNaN(id)) {
            return res.response({"err": "invalid user id"}).code(400);
        }
        let update = {};
        Object.keys(UserModel.getAttributes()).forEach((KEY) => {
            if(req.payload[KEY]){
                update[KEY] = req.payload[KEY];
            }
        })

        if(Object.keys(update).length == 0){
            return res.response({"err": "invalid update payload"}).code(400);
        }

        let response = await UserModel.update(
            update,
            {
                where : {id}
            }
        );

        if(response == 0){
            return res.response({"err": `user with id ${id} not found`}).code(400)
        }
        return res.response({"msg": "user updated successfully"}).code(200)
    }catch(e){
        console.log(e);
        return res.response({"err": e}).code(500)
    }
}

const deleteUser = async (req, res) => {
    try{
        let id = parseInt(req.params.id);
        if(isNaN(id)) {
            return res.response({"err": "invalid user id"}).code(400);
        }
        let destruction = await UserModel.destroy({
            where: {
                id
            }
        })
        if(destruction == 0){
            return res.response({"err": `user with id ${id} not found`}).code(400)
        }
        return res.response({"msg": "user deleted successfully"}).code(200)
    }catch(e){
        console.log(e); 
        return res.response({"err": e}).code(500)
    }
}

module.exports = {
    getUser,
    createUser,
    deleteUser,
    updateUser
}