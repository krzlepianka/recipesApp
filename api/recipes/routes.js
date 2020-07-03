const controller = require('./controller');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

router
    .route('/')
    .get(controller.getAllReceipe)
    .post(upload.single('image'), controller.createReceipe)


module.exports = router;