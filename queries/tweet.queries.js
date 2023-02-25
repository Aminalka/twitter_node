  const Tweet=require("../database/models/Tweet.model")

exports.creatNewTweet=(body) => {
    const newTweet=new Tweet(body);
    return newTweet.save();
}

exports.findAllTweets= () => {
    return Tweet.find({}).exec();
}