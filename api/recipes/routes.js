const controller = require('./controller');
const express = require('express');
const router = express.Router();

router
    .route('/')
    .get(controller.getAllReceipe)
    .post(controller.createReceipe)

module.exports = router;