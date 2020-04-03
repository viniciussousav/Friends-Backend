const moongose = require('mongoose');

const FriendSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const FriendModel = moongose.model('FriendSchema', FriendSchema);

module.exports = FriendModel;