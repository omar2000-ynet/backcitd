const express = require("express");
const router = express.Router();
const userController = require("../controller/userController")


router.post('/signInUser', userController.userEnregistrer);
router.post('/addQuestion', userController.enregistreQuestion);
router.post('/addpostmessage', userController.postquestion);
router.get('/recupereQuestion', userController.questionRecuperation);


module.exports = router;