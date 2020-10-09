const mongoose = require('mongoose')
const { Schema  } = mongoose;


const commentSchema = new Schema({
    name: String,
    text: String,
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    icon: String,
    date: Date
})

mongoose.model('comments', commentSchema);