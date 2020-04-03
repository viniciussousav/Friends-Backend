const Friend = require('../models/Friend');

module.exports = {
    async index(req, res) {
        const friends = await Friend.find();
        return res.json(friends);
    },
    async create(req, res) {

        const check = await Friend.findOne({nickname: req.body.nickname});

        if (check) {
            return res.json({ status: "Nickname already exists" });
        } else {
            const newFriend = await Friend.create(req.body);
            return res.json(newFriend);
        }
        
    },
    async delete(req, res) {
        await Friend.findByIdAndDelete(req.params.id);
        return res.json();
    },
    async login(req, res) {
        
        const {nickname, password} = req.params;

        const search = await Friend.findOne({nickname: nickname, password: password});
        
        return res.json(search);

    }
};