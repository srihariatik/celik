const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    password: {
        typeL: String,
        required: true,
    },
    body: String,
    salt: {
        type: String,
        required: true,
    }
}, {
    collection: 'users',
    timestamps: true,
});

module.exports = mongoose. model('Contents', schema);