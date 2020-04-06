const Publication = require('../models/Publication');

module.exports = {
    async index(req, res) {
        const friends = await Publication.find();
        return res.json(friends);
    },
    async create(req, res) {
        const publication = await Publication.create(req.body);
        return res.json(publication);
    },

    async comment(req, res) {
        await Publication.findByIdAndUpdate( req.params.id, 
            {
                "$push": {
                    comments: {
                        author: req.body.author,
                        content: req.body.content
                    }
                }
            }
        );
        return res.json();
    },
    async delete(req, res) {
        await Publication.findByIdAndDelete(req.params.id);
        return res.json();
    }
};