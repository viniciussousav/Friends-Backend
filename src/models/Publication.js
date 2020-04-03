const moongose = require('mongoose');

const PublicationSchema = new moongose.Schema({
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Publication = moongose.model('PublicationSchema', PublicationSchema);

module.exports = Publication;