const router = require('express').Router();
const { ensureAuthenticated } = require('../config/security.config');
const {signup, signupForm, uploadImage, displayProfile, userList, followUser, unFollowUser}=require('../controllers/user.controller');

// routes pour inscrire un utilisateur
router.get('/', ensureAuthenticated, userList);
router.get('/follow/:userId',ensureAuthenticated ,followUser);
router.get('/unfollow/:userId',ensureAuthenticated , unFollowUser);

router.get('/signup/form', signupForm);  //route qui emmene l utilisateur vers le formulaire
router.post('/signup', signup);          //route qui valide l utilisateur et le cree dans la db

router.post('/update/image', ensureAuthenticated, uploadImage);

router.get('/:username', ensureAuthenticated, displayProfile)

module.exports = router;