const receipeRouter = require('./recipes/routes');
const express = require('express');
const api = express.Router();

api.use('/receipe', receipeRouter);

module.exports = api;