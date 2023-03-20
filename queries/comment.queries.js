const comment = require("../database/models/comment.model")


exports.createNewComment = (body) => {
    const newComment = new comment(body);
    return newComment.save()
}