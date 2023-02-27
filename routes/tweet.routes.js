const { createTweet, deleteTweet } = require('../controllers/tweet.controller');

const router=require('express').Router();



router.post('/new',createTweet );   //creation d un tweet
router.delete('/:tweetId',deleteTweet); //supprimer un tweet





module.exports=router