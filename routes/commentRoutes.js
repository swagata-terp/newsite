const mongoose = require('mongoose')
const Comment = mongoose.model('comments')
module.exports = app => {


    app.post('/api/newcomment', async (req,res) => {

        const {comment, auth   } = req.body;
        const {firstName, familyName, _id, icon} = auth;
        const commentData = new Comment({
            name: firstName + " " + familyName,
            text: comment,
            _user: auth._id,
            icon,
            date: Date.now()
        })
        try {

           const newComment = await commentData.save();
            res.send(newComment);
        } catch (err) {
            res.status(422).send(err)

        }
    })

    app.get('/api/comments', async (req,res) => {
        const comments = await Comment.find({})

        res.send(comments)
    } )

    app.get('/api/comments/delete/:commentid', async (req,res) => {

        try{
            const del = await Comment.findOne({_id:req.params.commentid}).remove()

        } catch(err) {
            console.log(err)
        }
        const comments = await Comment.find({})

        res.send(comments)
    
    })
}

