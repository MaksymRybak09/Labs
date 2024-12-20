const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
}, { versionKey: false });

const Article = mongoose.model("articles", articleSchema);
module.exports = Article;