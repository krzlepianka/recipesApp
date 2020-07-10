const controller = require('./controller');
const express = require('express');
const router = express.Router();

router
    .route('/')
    .get(controller.getAllReceipe)
    .post(controller.uploadPhoto, controller.createReceipe)


module.exports = router;