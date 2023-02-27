const router = require('express').Router();
const {signup, signupForm}=require('../controllers/user.controller');

// routes pour inscrire un utilisateur
router.get('/signup/form', signupForm);  //route qui emmene l utilisateur vers le formulaire
router.post('/signup', signup)          //route qui valide l utilisateur et le cree dans la db

module.exports = router;